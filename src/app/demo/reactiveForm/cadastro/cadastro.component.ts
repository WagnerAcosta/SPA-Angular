import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Usuario } from './model/usuario';

import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from './generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit, AfterViewInit {
  //Obter coleção de item do formulario
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';

  MASKS = utilsBr.MASKS;

  validationMessage: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {
    this.validationMessage = {
      nome: {
        required: 'O nome é requerido',
        minlength: 'O nome precisa ter no minimo 3 caracteres',
        maxlength: 'O nome precisa ter no maximo 150 caracteres',
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF inválido',
      },
      email: {
        required: 'Informe o e-mail',
        email: 'E-mail inválido',
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 10 caracteres',
      },
      confirmaSenha: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 10 caracteres',
        equalTo: 'As senhas não conferem',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessage);
  }

  ngOnInit(): void {
    let senha = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
    ]);
    let confirmaSenha = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
      CustomValidators.equalTo(senha),
    ]);

    this.cadastroForm = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120),
        ],
      ],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      confirmaSenha: confirmaSenha,
    });
  }

  ngAfterViewInit(): void {
    //Coleção de Observable
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    //Aplicando em todos
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(
        this.cadastroForm
      );
    });
  }

  addUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }
  }
}

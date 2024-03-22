import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ApiRoootsService } from '../services/api-rooots.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent {
  showUserPassword: boolean = false;
  showConfirmUserPassword: boolean = false;

  //getter
  get lastName() {
    return this.form.get('lastName');
  }
  get firstName() {
    return this.form.get('firstName');
  }
  get userEmail() {
    return this.form.get('userEmail');
  }
  get userTel() {
    return this.form.get('userTel');
  }
  get compagny() {
    return this.form.get('compagny');
  }
  get SIRET() {
    return this.form.get('SIRET');
  }
  get userBirthday() {
    return this.form.get('userBirthday');
  }
  get userPassword() {
    return this.form.get('userPassword');
  }
  get confirmUserPassword() {
    return this.form.get('confirmUserPassword');
  }
  get conditionsUtilisation() {
    return this.form.get('conditionsUtilisation');
  }
  get actuRooots() {
    return this.form.get('actuRooots');
  }

  constructor(
    private fb: FormBuilder,
    private api: ApiRoootsService,
    private router: Router
  ) {}

  public form: FormGroup = this.fb.group(
    {
      lastName: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      firstName: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      userEmail: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      userTel: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^-?[0-9]+(\.[0-9]*)?$/),
        ]),
      ],
      compagny: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      SIRET: [
        '',
        Validators.compose([Validators.required, Validators.minLength(14)]),
      ],
      userBirthday: ['', Validators.compose([Validators.required])],
      userPassword: [
        '',
        Validators.compose([
          Validators.required,
          this.passwordComplexityValidator,
        ]),
      ],
      confirmUserPassword: [
        '',
        Validators.compose([
          Validators.required,
          this.passwordComplexityValidator,
        ]),
      ],
      conditionsUtilisation: ['', Validators.required],
      actuRooots: [''],
    },
    { validator: this.passwordMatchValidator }
  );

  private passwordComplexityValidator(
    control: FormControl
  ): ValidationErrors | null {
    const password = control.value;
    if (!password) {
      return null;
    }

    const hasMinLength = password.length >= 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[()\[\]!_@&#+\-*,?/;:{}^~`=<>|$%"'\\]/.test(
      password
    );

    const isValid =
      hasMinLength &&
      hasLowercase &&
      hasUppercase &&
      hasNumber &&
      hasSpecialChar;
    if (!isValid) {
      return { passwordComplexity: true };
    }
    return null;
  }

  passwordMatchValidator(formGroup: FormGroup): ValidationErrors | null {
    const password = formGroup.get('userPassword')?.value;
    const confirmPassword = formGroup.get('confirmUserPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  SeePassword(field: string): void {
    if (field === 'userPassword') {
      this.showUserPassword = !this.showUserPassword;
    } else if (field === 'confirmUserPassword') {
      this.showConfirmUserPassword = !this.showConfirmUserPassword;
    }
  }

  submit() {
    if (this.form.valid) {
      this.api
        .postUser({
          nom: this.lastName?.value,
          prenom: this.firstName?.value,
          email: this.userEmail?.value,
          naissance: this.userBirthday?.value,
          telephone: this.userTel?.value,
          companyName: this.compagny?.value,
          siret: this.SIRET?.value,
          role: 'user',
          password: this.userPassword?.value,
        })
        .subscribe(
          (data) => console.log('Utilisateur créé :', data),
          (error) => console.error('Erreur lors de la création :', error)
        );
      this.form.reset();
      this.router.navigate(['/connexion']);
    } else {
      if (this.form.errors?.['passwordMismatch']) {
        console.error('Les mots de passe ne correspondent pas.');
        return;
      }
    }
  }
}

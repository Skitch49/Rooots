import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent {
  UserEmail = '';
  UserPassword = '';
  showUserPassword: boolean = false;
  submitForm: boolean = false;
  // Getter
  get userEmail() {
    return this.form.get('userEmail');
  }
  get userPassword() {
    return this.form.get('userPassword');
  }
  get rememberMe() {
    return this.form.get('rememberMe');
  }

  constructor(private fb: FormBuilder) {}

  public form: FormGroup = this.fb.group({
    userEmail: [
      '',
      Validators.compose([Validators.required, Validators.email]),
    ],
    userPassword: [
      '',
      Validators.compose([
        Validators.required,
        this.passwordComplexityValidator,
      ]),
    ],
    rememberMe: '',
  });

  SeePassword(field: string): void {
    this.showUserPassword = !this.showUserPassword;
  }

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

  async submit() {
    this.submitForm = true;

    if (this.form.valid) {
      this.form.reset();
    } else {
      this.userPassword!.reset();
    }
  }
}

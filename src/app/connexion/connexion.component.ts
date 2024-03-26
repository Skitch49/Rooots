import { Component, OnInit } from '@angular/core';
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
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent {
  UserEmail = '';
  UserPassword = '';
  showUserPassword: boolean = false;
  submitForm: boolean = false;
  userFullName: string | undefined;

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

  constructor(
    private fb: FormBuilder,
    private api: ApiRoootsService,
    private router: Router
  ) {}

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
      // Récupérer tous les utilisateurs
      this.api.getAllUser().subscribe(
        (users) => {
          // Trouver l'utilisateur avec l'e-mail saisi
          const user = users.find(
            (u: any) => u.email === this.userEmail?.value
          );
          if (user) {
            // Stocker le nom de l'utilisateur
            this.userFullName = user.prenom;
            this.api.setUserName(this.userFullName!);

            // Continuer avec votre logique de connexion
            this.api
              .postLogin(this.userEmail?.value, this.userPassword?.value)
              .subscribe(
                (data) => {
                  console.log('Utilisateur connecté :', data);
                  this.form.reset();
                  this.api.setLoggedIn(true);
                  this.router.navigate(['/']);
                },
                (error) => console.error('Erreur lors de la connexion :', error)
              );
          } else {
            // Utilisateur non trouvé
            console.error('Utilisateur non trouvé');
          }
        },
        (error) =>
          console.error(
            'Erreur lors de la récupération des utilisateurs :',
            error
          )
      );
    } else {
      this.userPassword!.reset();
    }
  }
}

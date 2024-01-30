import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private fb: FormBuilder) {}

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  public form: FormGroup = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
  });

  async submit() {
    console.log('test');
  }
}

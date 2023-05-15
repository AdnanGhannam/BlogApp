import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  nameMessage: string = "";
  passwordMessage: string = "";
  constructor (private http: HttpClient) { }

  onSubmit(form: NgForm) {
    const { name, password } = form.form.value;

    if (name && password) {
      // COMPLETE
      this.http
        .post<any>("http://localhost:5000/login", { name, password })
        .subscribe({
          next: val => {
            window.sessionStorage.setItem("jwt", val.data.token);
            // TODO redirect
          },
          error: err => {
            [this.nameMessage, this.passwordMessage] = ["", ""];

            if (err.status == 404) {
              this.nameMessage = err.error.errors[0].message;
            }

            if (err.status == 400) {
              this.passwordMessage = err.error.errors[0].message;
            }
          }
        });
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'blog-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  nameMessage: string = "";
  passwordMessage: string = "";
  constructor (private http: HttpClient) { }

  onSubmit(form: NgForm) {
    const { name, password, bio } = form.form.value;

    if (name && password) {
      // COMPLETE
      this.http
        .post<any>("http://localhost:5000/signup", { name, password, bio })
        .subscribe({
          next: val => {
            // TODO redirect
          },
          error: err => {
            [this.nameMessage, this.passwordMessage] = ["", ""];

            // TODO change
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

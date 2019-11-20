import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  title = "Hola mundo";
  email = "";

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.title = "Adios mundo :'("
    }, 5000);

  }

  login() {
    console.log(this.email);
  }

}

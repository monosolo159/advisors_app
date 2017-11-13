import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public username;
  public password;
  constructor(public navCtrl: NavController) {

  }

  login(){
    console.log('asdasd');
  }

}

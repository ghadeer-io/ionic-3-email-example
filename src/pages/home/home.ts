import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {EmailService} from "../../services/EmailService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private emailService: EmailService;
  private platform:Platform;

  constructor(public navCtrl: NavController, platform:Platform, emailService: EmailService) {
    this.emailService = emailService;
    this.platform = platform;
  }

  sendEmail() {
    this.emailService.sendEmail('Support');
  }
}

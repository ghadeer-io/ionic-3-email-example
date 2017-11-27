import {Injectable} from "@angular/core";
import {Platform} from "ionic-angular";
import {EmailComposer} from "@ionic-native/email-composer";

@Injectable()
export class EmailService {

  private emailComposer:EmailComposer;
  private platform:Platform;

  constructor(platform:Platform, emailComposer: EmailComposer) {
    this.emailComposer = emailComposer;
    this.platform = platform;
  }

  sendEmail(subject:string) {
    if (this.platform.is('cordova')) {
      this.emailComposer.isAvailable().then((available) =>{
          let email = {
            to: 'me@ghadeer.io',
            subject: subject,
            body: "Hi",
            isHtml: true
          };


          this.emailComposer.open(email);
      })
      .catch((err) => alert('Email Composer not available'));
    }
  }
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: 'side.menu.component.html',
})
export class SideMenuComponent {
  constructor(private navCtrl: NavController, private authSvc: AuthService) { }
  logOut() {
    this.authSvc.removeToken();
    this.navCtrl.navigateRoot('');
    window.location.reload();
  }
}

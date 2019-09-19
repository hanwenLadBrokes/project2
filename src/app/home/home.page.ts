import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { AuthenticateService } from '../service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../service/database.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    public router: Router,
    public loadingCtrl: LoadingController,
    private authService: AuthenticateService,
    private route: ActivatedRoute,
    private dataservice : DatabaseService
  ) {}

  gotoProfile(){
    this.router.navigateByUrl("profile")
  }

  gotoFlatmatepreference(){
    this.router.navigateByUrl("flatmate-preference")
  }
  recommendationList(){
    this.router.navigateByUrl("recommendation")
  }

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }

}

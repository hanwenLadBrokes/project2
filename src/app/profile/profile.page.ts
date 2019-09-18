import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';
import { AuthenticateService } from '../service/authentication.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Info } from '../models/info';
import { Item } from '../models/item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  infos: Info[];
  items: Item[];

  constructor(
    private navCtrl: NavController,
    public router: Router,
    public loadingCtrl: LoadingController,
    private authService: AuthenticateService,
    private route: ActivatedRoute,
    private dataservice : DatabaseService
  ) {}

  ngOnInit() {
    this.dataservice.show_details().subscribe(infos =>{
      this.infos = infos;
    });
    this.dataservice.show_flatmates().subscribe(items =>{
      this.items = items;
    });
  }


  update(info:Info){
    this.dataservice.update_details(info);
    
  }
  BacktoHome(){
    this.router.navigateByUrl('home');
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

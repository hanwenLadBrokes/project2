import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';
import { AuthenticateService } from '../service/authentication.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Info } from '../models/info';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  infos: Info[];
  inf:Info={
    name: '',
    age:'',
    gender:'',
    habit:''
  };

  localProfile : Info = {
    name: '',
    age:'',
    gender:'',
    habit:''
  };
  

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
      this.localProfile = this.infos[0];
    });
    this.dataservice.get_user_details(null);
    
  }

  
  update(){
      this.dataservice.update_details(this.localProfile);
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatabaseService } from '../service/database.service';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { Info } from '../models/info';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.page.html',
  styleUrls: ['./add-profile.page.scss'],
})
export class AddProfilePage implements OnInit {
 
  info:Info={
    name: '',
    age:'',
    gender:'',
    habit:''
  }
  

  constructor(
    private navCtrl: NavController,
    private dataService: DatabaseService,
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
    
  }

  submitProfile(){
    this.dataService.get_user_details(this.info);
    this.info.name = '';
    this.info.age = '';
    this.info.gender = '';
    this.info.habit = '';
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

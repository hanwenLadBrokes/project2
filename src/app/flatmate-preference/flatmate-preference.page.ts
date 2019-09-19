import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatabaseService } from '../service/database.service';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { Item } from '../models/item';

@Component({
  selector: 'app-flatmate-preference',
  templateUrl: './flatmate-preference.page.html',
  styleUrls: ['./flatmate-preference.page.scss'],
})
export class FlatmatePreferencePage implements OnInit {
  items: Item[];
  idealMate : any;

  constructor(
    private navCtrl: NavController,
    private dataService: DatabaseService,
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
    this.dataService.show_flatmates().subscribe(items =>{
      this.items = items;
      this.idealMate= this.items[0];
    });

    this.idealMate = new Object();

    this.idealMate.age = '';
    this.idealMate.gender = '';
    this.idealMate.habit = '';
  }

  

  update(){
    this.dataService.update_flatmates(this.idealMate);
    localStorage.setItem("idealMate",this.idealMate);
    localStorage.setItem("idealAge",this.idealMate.age);
    localStorage.setItem("idealGender",this.idealMate.gender);
    localStorage.setItem("idealHabit",this.idealMate.habit);
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
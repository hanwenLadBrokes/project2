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
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  items: Item[];

  validation_messages = {
    'age': [
      { type: 'required', message: 'Age is required.' },
      { type: 'minlength', message: 'Age must be at least 1 characters long.' }
    ],
    'gender': [
      { type: 'required', message: 'Gender is required.' },
      { type: 'minlength', message: 'Gender must be at least 1 characters long.' }
    ],
    'habit': [
      { type: 'required', message: 'Habit is required.' },
      { type: 'minlength', message: 'Habit must be at least 1 characters long.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private dataService: DatabaseService,
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {
    this.resetFields();
    this.dataService.show_flatmates().subscribe(items =>{
      this.items = items;
    });
  }
  resetFields(){
    this.validations_form = this.formBuilder.group({
      age: new FormControl('', Validators.compose([
        Validators.minLength(1),
        Validators.required
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.minLength(1),
        Validators.required
      ])),
      habit: new FormControl('', Validators.compose([
        Validators.minLength(1),
        Validators.required
      ])),
    });
  }
  get_input(value){
    let data = {
      age: value.age,
      gender: value.gender,
      habit: value.habit
    }
    this.dataService.get_flatmte_preference(data)
     .then(res => {
      this.router.navigateByUrl('flatmate-preference');
     })
  }

  update(){

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
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticateService } from '../service/authentication.service';
import { DatabaseService } from '../service/database.service';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.page.html',
  styleUrls: ['./recommendation.page.scss'],
})
export class RecommendationPage implements OnInit {

  arrayOfItems:any [] = [];
  myProflie:any;
  matchingResult:any;

  constructor(private navCtrl: NavController,
    public router: Router,
    private authService: AuthenticateService,
    private databaseService:DatabaseService ) {}

  ngOnInit(){
    
    this.databaseService.getUserCollection().then(snapshot => {
        console.log( snapshot );
    });

    var xiaohong:any = new Object();
    xiaohong.name = "xiaohong";
    xiaohong.dob = "01/01/1981";
    xiaohong.gender = "Female";
    xiaohong.swmming = true;
    xiaohong.baskball = true;

    

    var xiaoming:any = new Object();
    xiaoming.name = "xiaoming";
    xiaoming.dob = "01/01/1990";
    xiaoming.gender = "Female";
    xiaoming.swmming = false;
    xiaoming.baskball = true;

    var xiaobai:any = new Object();
    xiaobai.name = "xiaohong";
    xiaobai.dob = "01/08/1981";
    xiaobai.gender = "Male";
    xiaobai.swmming = true;
    xiaobai.baskball = false;
    
    var xiaowang:any = new Object();
    xiaowang.name = "xiaohong";
    xiaowang.dob = "01/08/1981";
    xiaowang.gender = "Male";
    xiaowang.swmming = true;
    xiaowang.baskball = false;

    var zhangsan: any = new Object();
    zhangsan.name = " zhangsan ";
    zhangsan.dob = " 01/01/1982";
    zhangsan.gender = "male";
    zhangsan.swmming = true;
    zhangsan.baskball = true;


    this.arrayOfItems.push( xiaohong);
    this.arrayOfItems.push( xiaoming);
    this.arrayOfItems.push( xiaobai);
    this.arrayOfItems.push( xiaowang);

    this.myProflie = zhangsan;

    this.matchingCalculator();

  }

  onUpdateProfile(){
    this.navCtrl.navigateForward('/profile')
  }

  goHome(){
    this.navCtrl.navigateForward('/home')
  }


  onCheckDetails(_item){
    //把item放到local storage
    this.navCtrl.navigateForward('/comparasion-detail');

  }

  
  matchingCalculator(){
    
    var myProflie =  this.myProflie;
    var mateProfile;
    
    
    for(var i: number = 0; i < this.arrayOfItems.length; i++){
    
        mateProfile = this.arrayOfItems[i];
        var num = 0;
        var totalHobby = 2;
        var result;

        if ( myProflie.swmming === mateProfile.swmming ){
          num += 1;
        }

        if (myProflie.baskball === mateProfile.baskball){
          num += 1;
        }

        result = ( num / totalHobby );
        this.arrayOfItems[i].result = result;
      

    }

  }
}

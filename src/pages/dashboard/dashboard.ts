import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestApiProvider} from '../../providers/rest-api/rest-api';
import {SubvegetablePage} from '../subvegetable/subvegetable'
import {SubfruitPage}  from '../subfruit/subfruit' 
import {SubmeatPage} from '../submeat/submeat'
import {SubseafoodPage} from '../subseafood/subseafood'
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  users: any;

  continue : any

  i : number

  constructor(public navCtrl: NavController, public navParams: NavParams , public api: RestApiProvider) {
    this.getUsers()
    console.log(this.i)
  }

  getUsers() {
    this.api.getUsers()
    .then(data => {
      this.users = data;
      this.continue = [this.users[2],this.users[3]]
      console.log(this.users);

      console.log(this.users[2]);
      console.log(this.users[3]);
    });
  }

  async onClick(user : any){
    switch(user.name) { 
      case "Vegetables": { 
        this.navCtrl.push(SubvegetablePage)
         break; 
      } 
      case "Fruits": { 
        this.navCtrl.push(SubfruitPage)
         break; 
      } 
      case "Meats": { 
        this.navCtrl.push(SubmeatPage)
         break; 
      } 
      case "Seafood": { 
        this.navCtrl.push(SubseafoodPage)
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  Goback(){
    this.navCtrl.pop();
  }

}

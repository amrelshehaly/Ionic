import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import {RestApiProvider} from '../../providers/rest-api/rest-api';
import {ModelPage} from '../model/model'

/**
 * Generated class for the SubvegetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subvegetable',
  templateUrl: 'subvegetable.html',
})
export class SubvegetablePage {

  results :any

  constructor(public api: RestApiProvider ,public navCtrl: NavController , private model : ModalController ) {
    this.getVeg();

   }

   getVeg(){
    
    this.api.getUsers()
    .then(data => {
      this.results = data[0].products;
      console.log(this.results);
    });
  }


  onClick(){
    this.navCtrl.pop();
  }

  showingProduct(user : any){
    let profileModal = this.model.create(ModelPage, { product: user });
    profileModal.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubvegetablePage');
  }

}

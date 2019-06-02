import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController } from 'ionic-angular';
import {RestApiProvider} from '../../providers/rest-api/rest-api';
import {ModelPage} from '../model/model'


/**
 * Generated class for the SubfruitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subfruit',
  templateUrl: 'subfruit.html',
})
export class SubfruitPage {

  fruits: any;

  constructor( public api: RestApiProvider,public navCtrl: NavController ,private model : ModalController) {
    this.getFruits();
  }
  
  getFruits() {
    this.api.getUsers()
    .then(data => {
      this.fruits = data[1].products;
      console.log(this.fruits);
    });
  }

  showingProduct(user : any){
    let profileModal = this.model.create(ModelPage, { product: user });
    profileModal.present();

  }

  onClick(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubfruitPage');
  }

}

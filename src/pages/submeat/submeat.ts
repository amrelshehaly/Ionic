import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import {RestApiProvider} from '../../providers/rest-api/rest-api';
import {ModelPage} from '../model/model'



/**
 * Generated class for the SubmeatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submeat',
  templateUrl: 'submeat.html',
})
export class SubmeatPage {

  meat : any 

  constructor( public api: RestApiProvider,public navCtrl: NavController,private model : ModalController ) {
    this.getmeat();
  }

  getmeat(){
    this.api.getUsers()
    .then(data => {
      this.meat = data[2].products;
      console.log(this.meat);
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
    console.log('ionViewDidLoad SubmeatPage');
  }

}

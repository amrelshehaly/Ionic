import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController } from 'ionic-angular';
import {RestApiProvider} from '../../providers/rest-api/rest-api';
import {ModelPage} from '../model/model'


/**
 * Generated class for the SubseafoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subseafood',
  templateUrl: 'subseafood.html',
})
export class SubseafoodPage {

  seafood : any

  constructor( public api: RestApiProvider,public navCtrl: NavController,private model : ModalController ) {
    this.getseafood();
  }

  getseafood(){
    this.api.getUsers()
    .then(data => {
      this.seafood = data[3].products;
      console.log(this.seafood);
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
    console.log('ionViewDidLoad SubseafoodPage');
  }

}

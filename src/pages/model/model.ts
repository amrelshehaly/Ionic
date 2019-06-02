import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model',
  templateUrl: 'model.html',
})
export class ModelPage {

  productView : any

  constructor(public navCtrl: NavController, public navParams: NavParams ,private view : ViewController) {
    console.log('UserId', navParams.get('product'));
    this.productView = navParams.get('product');

  }

  closeModel(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelPage');
  }

}

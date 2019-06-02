import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import {DashboardPage} from '../pages/dashboard/dashboard'
import {SubfruitPage} from '../pages/subfruit/subfruit'
import {SubvegetablePage} from '../pages/subvegetable/subvegetable'
import {SubmeatPage} from '../pages/submeat/submeat'
import {SubseafoodPage} from '../pages/subseafood/subseafood'
import {ModelPage} from '../pages/model/model'


import {HttpClientModule} from '@angular/common/http'; 


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    SubvegetablePage,
    SubfruitPage,
    SubmeatPage,
    SubseafoodPage,
    ModelPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    SubvegetablePage,
    SubfruitPage,
    SubmeatPage,
    SubseafoodPage,
    ModelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { baseURL } from '../shared/baseurl';
import { MyApp } from './app.component';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ReservationPage } from '../pages/reservation/reservation';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { LeaderProvider } from '../providers/leader/leader';
import { DishProvider } from '../providers/dish/dish';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { IonicStorageModule } from '@ionic/storage';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera } from '@ionic-native/camera';
import { CallNumber } from '@ionic-native/call-number';



@NgModule({
  declarations: [
    MyApp,
    ContactUsPage,
    AboutPage,
    HomePage,
    MenuPage,
    DishdetailPage,
    FavoritesPage,
    ReservationPage,
    LoginPage,
    RegisterPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactUsPage,
    AboutPage,
    HomePage,
    MenuPage,
    DishdetailPage,
    FavoritesPage,
    ReservationPage,
    LoginPage,
    RegisterPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LeaderProvider,
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL },
    FavoriteProvider,
    LocalNotifications,
    EmailComposer,
    SocialSharing,
    Camera,
    CallNumber

  ]
})
export class AppModule {}

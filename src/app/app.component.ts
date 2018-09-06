import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { FavoritesPage } from '../pages/favorites/favorites'
import { ReservationPage } from '../pages/reservation/reservation';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, icon: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController) {
    this.intializeApp();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon:'home', component: HomePage },
      { title: 'Menu', icon:'list-box', component: MenuPage },
      { title: 'Contact US', icon:'contact', component: ContactUsPage },
      { title: 'About', icon:'information-circle', component: AboutPage },
      { title: 'MyFavorites', icon:'heart', component: FavoritesPage }
    ];
  }
  intializeApp(){
    
  }
  openReserve() {
    let modal = this.modalCtrl.create(ReservationPage);
    modal.present();
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openLogin() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}





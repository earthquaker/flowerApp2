import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/start/start.html'
})
export class StartPage {

  constructor(private _navController: NavController) {
  }

  goToStores(){
    console.log("GoToStores");
    this._navController.push(TabsPage);
  }
}

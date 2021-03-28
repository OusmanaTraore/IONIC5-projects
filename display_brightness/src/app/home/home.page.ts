import { Component } from '@angular/core';
import { Brightness } from '@ionic-native/brightness/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

 brightnessValue = 0.42;

 constructor(private brightnessModule: Brightness) {
   this.brightnessModule.setBrightness(this.brightnessValue);
 }

 controlBrightness(){
   this.brightnessModule.setBrightness(this.brightnessValue);
 }  

}
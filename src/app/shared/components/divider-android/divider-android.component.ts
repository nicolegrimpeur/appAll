import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-divider-android',
  templateUrl: './divider-android.component.html',
  styleUrls: ['./divider-android.component.scss'],
})
export class DividerAndroidComponent {
  public phabletAndroid: boolean;

  constructor(private platform: Platform) {
    const platforms = platform.platforms();
    this.phabletAndroid = platforms.find(element => element === 'android') !== undefined && platforms.find(element => element === 'phablet') !== undefined;
  }
}

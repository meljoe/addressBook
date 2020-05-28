import { Component } from '@angular/core';
import {ContactManagerService, StoreContact} from '../contact-manager.service';
import {AlertController} from '@ionic/angular';
  import { from } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public contactManager: ContactManagerService,
    private alertCtrl: AlertController
  ) {}

}

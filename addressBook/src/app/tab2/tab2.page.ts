import { Component, ViewChild } from '@angular/core';
import {ContactManagerService, StoreContact} from '../contact-manager.service';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  

  public storeItemToAdd: StoreContact = {
    firstName: '',
    lastName: '',
    phone: 0,
    email:''
  };

  constructor(
    public ContactManager: ContactManagerService,
    public alertController: AlertController
    
  ) {}

  async validateAndSubmitForm(form: HTMLFormElement){
    if(form.reportValidity()){
      let success = this.ContactManager.addToContact(this.storeItemToAdd);

      if(success){
        this.storeItemToAdd = {
          firstName: '',
          lastName: '',
          phone:0,
          email:''

        };

      }
      else{
        const alert = await this.alertController.create({
          message: 'Phone Number Already  Exists',
          buttons: ['OK']
        });
        alert.present();
      }
    }
  }

}

import { Component } from '@angular/core';
import {ContactManagerService, StoreContact} from '../contact-manager.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  firstname: string;
  searchIsInvalid: boolean;
  itemsSearched: Array<StoreContact> = [];

  constructor(
    public contactManager: ContactManagerService
  ) {}

  clearSearch(){
    this.itemsSearched = [];
  }

  onEnterCodeClick(){
    let exists: boolean;
    const indexExisting  = this.contactManager.items.findIndex(existingItem => {
      return(existingItem.firstName === this.firstname);
    });
    exists = indexExisting >= 0;

    if(exists){
      this.searchIsInvalid = false;
      this.itemsSearched.push(this.contactManager.items[indexExisting]);
    }
    else{
      this.searchIsInvalid = true;

    }
    return(!exists);
  }

}

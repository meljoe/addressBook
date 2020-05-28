import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';


const SETTINGSTOKEN: string = 'setting';
const ITEMSTOKEN: string = 'items';

@Injectable({
  providedIn: 'root'
})
export class ContactManagerService {

  searchType: string = 'firstName';
  items: Array<StoreContact> = [];
  

  constructor(
    private storage: Storage
    
  ) { 
    this.initialize();
  }

  public  saveSettings(){
    const obj = {
      searchType: this.searchType
    };
    this.storage.set(SETTINGSTOKEN, obj);
  }

  public async initialize(){
    const savedItems = await this.storage.get(ITEMSTOKEN);
    const obj = await this.storage.get(SETTINGSTOKEN);

    if(obj){
      this.searchType = obj.searchType;
    }

    if (savedItems){
      this.items = savedItems;
    }
  }

  async clearDatabase(){
    this.storage.remove(ITEMSTOKEN);
    this.items = [];
  }

  addToContact(storeItemToAdd: StoreContact): boolean {
    let exists: boolean;
    const indexExisting = this.items.findIndex(existingItem => {
      return(existingItem.phone ===  storeItemToAdd.phone);
    });

    exists = indexExisting >= 0;

    if (!exists){
      this.items.push(storeItemToAdd);
      this.storage.set(ITEMSTOKEN, this.items);
    }
    return (!exists);
  
  
  }

  deleteContact(index) {
    this.items.splice(index, 1);
  }

  

}

export interface  StoreContact{
  firstName: string,
  lastName: string,
  phone: number,
  email: string
}

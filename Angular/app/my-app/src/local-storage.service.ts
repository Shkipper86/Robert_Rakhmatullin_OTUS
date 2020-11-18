import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly storage: Storage;

  constructor() { 
      this.storage = window.localStorage;
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }

  getKey(key: number): string {
   return  this.storage.key(key);
  }

  getLenth(){
    return this.storage.length;
  }
}

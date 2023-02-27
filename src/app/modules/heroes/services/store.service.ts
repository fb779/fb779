import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  public saveData(key: string, data: Object) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getData(key: string) {
    return localStorage.getItem(key);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  // public clearData() {
  //   localStorage.clear();
  // }
}

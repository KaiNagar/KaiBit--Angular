import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  public saveToStorage(key: string, val: object) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  public loadFromStorage(key: string) {
    var val: any = localStorage.getItem(key);
    return JSON.parse(val);
  }
}

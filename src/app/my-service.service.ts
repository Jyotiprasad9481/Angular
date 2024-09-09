import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  getGreeting():string {
    return "Hello from My Service"
  }
}

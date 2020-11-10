import { Component } from '@angular/core';
import {ShkipServiceService} from './shkip-service.service';
import {SaveLocalStorageService} from './save-local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  counter: number = 0;
  User = {name: 'Robert', age: 33};
  lognumReceived(s: number){
    console.log ('received', s)
  }
  //constructor(private shkipServiceService: ShkipServiceService) { }
  //ngOnInit(): void {
  //  this.shkipServiceService
   // .get('USA')
   // .then(console.log)
  //}
  constructor(private saveLocalStorageService: SaveLocalStorageService) { }
  ngOninit(): void{
  }
}

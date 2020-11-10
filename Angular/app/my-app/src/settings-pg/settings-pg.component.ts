import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-settings-pg',
  templateUrl: './settings-pg.component.html',
  styleUrls: ['./settings-pg.component.css']
})
export class SettingsPgComponent implements OnInit {
_Lang = new FormControl('');
_Words = new FormControl('');
  constructor() { }

  ngOnInit(): void {
   this._Lang.setValue(localStorage.getItem("_Lang"));
   this._Words.setValue(localStorage.getItem("_Words"));
  }
  mySetItem(){
    localStorage.setItem("_Lang",this._Lang.value);
    localStorage.setItem("_Words",this._Words.value);
  }

}

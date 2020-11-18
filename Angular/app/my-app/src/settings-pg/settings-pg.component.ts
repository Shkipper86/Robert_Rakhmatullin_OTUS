import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import {LocalStorageService} from '../local-storage.service'


@Component({
  selector: 'app-settings-pg',
  templateUrl: './settings-pg.component.html',
  styleUrls: ['./settings-pg.component.css']
})
export class SettingsPgComponent implements OnInit {
_Lang = new FormControl('');
_Words = new FormControl('');
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this._Lang.setValue(this.localStorageService.getItem("_Lang"))
    this._Words.setValue(this.localStorageService.getItem("_Words"))
  }

  mySetItem(){
    this.localStorageService.setItem("_Lang",this._Lang.value);
    this.localStorageService.setItem("_Words",this._Words.value);
  }

}

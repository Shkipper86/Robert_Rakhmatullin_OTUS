import { Component, OnInit } from '@angular/core'
import { LocalStorageService } from '../local-storage.service'

@Component({
  selector: 'app-added-pg',
  templateUrl: './added-pg.component.html',
  styleUrls: ['./added-pg.component.css']
})

export class AddedPgComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) { }
    output: any = '';
    KeyValue: string;

  ngOnInit(): void {
        for (let i: number = 0; i < this.localStorageService.getLenth(); i++){
          this.KeyValue = this.localStorageService.getKey(i);
          if (this.KeyValue != "_Lang" && this.KeyValue != "_Words"){
            this.output=`${this.output}\n${this.localStorageService.getKey(i)}: ${this.localStorageService.getItem(this.localStorageService.getKey(i))}\n`;
          }      
    }  
  
  }
}

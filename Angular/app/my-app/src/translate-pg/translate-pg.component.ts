import { Component, OnInit } from '@angular/core'
import {TranslateWordsService} from '../translate-words.service'
import { FormControl } from '@angular/forms'
import { LocalStorageService } from '../local-storage.service'

@Component({
  selector: 'app-translate-pg',
  templateUrl: './translate-pg.component.html',
  styleUrls: ['./translate-pg.component.css']
})

export class TranslatePgComponent implements OnInit {
  translateword = new FormControl('');
  wordsss$: any;
  addition: any; 
  lang: string;
  str: any;  
  translatedString: string

  constructor(private translateWordsService: TranslateWordsService, 
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void { }  
  translate(){
    this.addition = document.getElementById('inputStr');
    this.langString();
    this.wordsss$ = this.translateWordsService.get(this.addition.value, this.lang);
    this.addVocabulary();
  }

  addVocabulary(){
    let strArray: string [];
    let i: number;    
    strArray = this.addition.value.split(' ');
    for (i = 0; i < strArray.length; i++){
      this.str=strArray[i];      
      this.translateAddVocabulary(this.str, this.translatedString);              
    }    
  }

    async translateAddVocabulary(str, translatedString){
    translatedString = await this.translateWordsService.get(str, this.lang);  
    this.localStorageService.setItem(this.str, translatedString);  
    this.str = translatedString;
  }
  
  langString(){
    this.lang = this.localStorageService.getItem('_Lang');
    switch (this.lang) {
     case "English": {
      this.lang="en";    
       break;
      }
     default:{
       break;
      }
    }
    return this.lang;
   }
}
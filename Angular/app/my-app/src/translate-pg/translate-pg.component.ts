import {Input, Component, OnInit } from '@angular/core';
import {TranslateWordsService} from '../translate-words.service';
import { FormControl } from '@angular/forms';
import {AddedPgComponent} from '../added-pg/added-pg.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { async } from 'rxjs';

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
  strTranslatedWord: any;
  constructor(private translateWordsService: TranslateWordsService) { }
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
      this.translateAddVocabulary(this.str);    
      localStorage.setItem(strArray[i],this.str);      
    }    
    console.log(strArray);
  }
    translateAddVocabulary(str){
    this.str = this.translateWordsService.get(str, this.lang);  
    return this.str;
  }
  langString(){
    this.lang = localStorage.getItem('_Lang');
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
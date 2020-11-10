import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TranslateWordsService {

  constructor(private http:HttpClient) { }
  lang: any;
  translate(word: string, la: string){
   return this.http.get(`https://api.mymemory.translated.net/get?q=${word}!&langpair=${la}|ru`)
   }
   async get(word: string, la: string){
     let response = await (await fetch(`https://api.mymemory.translated.net/get?q=${word}!&langpair=${la}|ru`));
     let wordsss = await response.json();
     return wordsss.responseData.translatedText;
   }
  }
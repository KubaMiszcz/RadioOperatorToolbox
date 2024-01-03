import { Injectable } from '@angular/core';
import { IAppData } from '../models/appData';
import { APP_DATA_JSON } from 'src/assets/application-default-data';
import packageJson from './../../../package.json';
import { WORDS_10LETTERSUNIQUE_COOL_PL } from 'src/assets/words10letterUnique_PL.jsonc';


@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  appData: IAppData;
  version: string = packageJson.version;
  build: string = packageJson.build;
  codewords: string[] = [];

  constructor() {
    this.appData = APP_DATA_JSON;
    this.codewords = WORDS_10LETTERSUNIQUE_COOL_PL;
    //DEBUG
    // this.findUniqueWords();
  }

  findUniqueWords() {
    let wordsunique: any = [];
    words.forEach((w) => {
      if (!this.hasDuplicateLetters(w)) {
        wordsunique.push(w);
      }
    });

    console.log(wordsunique);
  }

  hasDuplicateLetters(word: string): boolean {
    const seenLetters = new Set<string>();
    for (const letter of word) {
      if (seenLetters.has(letter)) {
        return true;
      }
      seenLetters.add(letter);
    }
    return false;
  }
}


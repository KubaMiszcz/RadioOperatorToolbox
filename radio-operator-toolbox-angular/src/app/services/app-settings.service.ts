import { Injectable } from '@angular/core';
import { IAppSettings } from '../models/appData.model';
import { ALPHABET_PL, APP_SETTINGS_JSON } from 'src/assets/application-default-data';
import packageJson from './../../../package.json';
import { WORDS_10LETTERSUNIQUE_2XCOOL_PL } from 'src/assets/words10letterUnique_PL.jsonc';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  appSettings: IAppSettings;
  version: string = packageJson.version;
  build: string = packageJson.build;
  codewords: string[] = [];
  alphabet: string[] = [];

  constructor() {
    this.appSettings = APP_SETTINGS_JSON;
    this.codewords = WORDS_10LETTERSUNIQUE_2XCOOL_PL;
    this.alphabet = ALPHABET_PL;

    //DEBUG
    // this.findUniqueWords();
  }

  private findUniqueWords() {
    // let words = //this.codewords;
    // let wordsunique: string[] = [];
    // words.forEach((w) => {
    //   if (!this.hasDuplicateLetters(w)) {
    //     wordsunique.push(w);
    //   }
    // });
    // console.log(wordsunique);
  }

  private hasDuplicateLetters(word: string): boolean {
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

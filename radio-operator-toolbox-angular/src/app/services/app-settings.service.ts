import { Injectable } from '@angular/core';
import { IAppData } from '../models/appData';
import { ALPHABET_PL, APP_DATA_JSON } from 'src/assets/application-default-data';
import packageJson from './../../../package.json';
import { WORDS_10LETTERSUNIQUE_2XCOOL_PL, WORDS_10LETTERSUNIQUE_COOL_PL } from 'src/assets/words10letterUnique_PL.jsonc';
import { BehaviorSubject } from 'rxjs';
import { IReport } from '../models/report.model';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  appData: IAppData;
  version: string = packageJson.version;
  build: string = packageJson.build;
  codewords: string[] = [];
  alphabet: string[] = [];
  currenReportBS = new BehaviorSubject<IReport>({name:''});

  constructor() {
    this.appData = APP_DATA_JSON;
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

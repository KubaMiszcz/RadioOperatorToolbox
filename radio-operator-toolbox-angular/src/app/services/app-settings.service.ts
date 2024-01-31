import { Injectable } from '@angular/core';
import { AppSettings, IAppSettings } from '../models/app-settings.model';
import { ALPHABET_PL, APP_DEFAULT_SETTINGS_JSON } from 'src/assets/application-default-data';
import packageJson from './../../../package.json';
import { WORDS_10LETTERSUNIQUE_2XCOOL_PL } from 'src/assets/words10letterUnique_PL.jsonc';
import { exampleMEDEVAC_PL, exampleSALUTE_PL } from 'src/assets/application-example-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  appSettings: IAppSettings;
  // appSettingsBS = new BehaviorSubject<IAppSettings>(null);

  version: string = packageJson.version;
  build: string = packageJson.build;
  codewords: string[] = [];
  alphabet: string[] = [];

  constructor() {
    this.appSettings = APP_DEFAULT_SETTINGS_JSON;
    this.codewords = WORDS_10LETTERSUNIQUE_2XCOOL_PL;
    this.alphabet = ALPHABET_PL;

    this.appSettings.reportsTemplates.push(exampleMEDEVAC_PL);
    this.appSettings.reportsTemplates.push(exampleSALUTE_PL);

    //DEBUG
    // this.findUniqueWords();
  }

  saveAppSettings(json = '') {
    localStorage.setItem('appSettings', json);
    this.appSettings = JSON.parse(json);
  }

  loadAppSettingsOrDefault() {
    this.appSettings = JSON.parse(
      localStorage.getItem('appSettings') ??
        JSON.stringify(APP_DEFAULT_SETTINGS_JSON)
    );
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

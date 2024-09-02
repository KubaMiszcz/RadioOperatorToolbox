import { Injectable } from '@angular/core';
import { AppSettings, IAppSettings } from '../models/app-settings.model';
import { ALPHABET_PL, APP_DEFAULT_SETTINGS_JSON, DTG_TIMEZONES_CODES } from 'src/assets/app-default-settings';
import packageJson from './../../../package.json';
import { WORDS_10LETTERSUNIQUE_2XCOOL_PL } from 'src/assets/words10letterUnique_PL.jsonc';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  appSettings: IAppSettings = new AppSettings();
  // appSettingsBS = new BehaviorSubject<IAppSettings>(null);

  version: string = packageJson.version;
  build: string = packageJson.build;
  codewords: string[] = [];
  alphabet: string[] = [];
  timezones = DTG_TIMEZONES_CODES;

  constructor() {
    this.importAppSettings(JSON.stringify(APP_DEFAULT_SETTINGS_JSON));
    this.codewords = WORDS_10LETTERSUNIQUE_2XCOOL_PL;
    // this.appSettings.reportsTemplates.push(exampleMEDEVAC_PL);
    // this.appSettings.reportsTemplates.push(exampleSALUTE_PL);

    //DEBUG
    // this.findUniqueWords();
    // this.alphabet = ALPHABET_PL;
  }

  importAppSettings(json: string) {
    try {
      this.appSettings = this.ValidatedAppSettings(json);
      console.log('Poprawnie zaimportowano ustawienia aplikacji');
      this.saveAppSettingsToLocalStorage();
      // alert('Poprawnie zaimportowano ustawienia aplikacji');
    } catch (error) {
      alert(error);
    }
  }

  ValidatedAppSettings(json: string) {
    let result: IAppSettings = JSON.parse(json);

    return result;
  }

  saveAppSettingsToLocalStorage() {
    localStorage.setItem('appSettings', JSON.stringify(this.appSettings));
    console.log('Poprawnie zapisano ustawienia aplikacji');
  }

  loadAppSettingsFromLocalStorageOrDefault() {
    this.appSettings = JSON.parse(localStorage.getItem('appSettings') ?? JSON.stringify(APP_DEFAULT_SETTINGS_JSON));
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

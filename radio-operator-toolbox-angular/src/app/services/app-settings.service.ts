import { CoreService } from 'src/app/services/core.service';
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

  constructor(private coreService: CoreService) {
    this.initAppSettings();
    this.codewords = WORDS_10LETTERSUNIQUE_2XCOOL_PL;
    //LUTNIA
    this.appSettings.reportsTemplates.push(exampleMEDEVAC_PL);
    this.appSettings.reportsTemplates.push(exampleSALUTE_PL);
    // LUTNIA
    
    //DEBUG
    // this.findUniqueWords();
    // this.alphabet = ALPHABET_PL;
  }

  initAppSettings() {
    try {
      let appSettings = this.coreService.getFromLocalStorage('appSettings');
      if (!appSettings) {
        this.updateAndSaveAppSettings(APP_DEFAULT_SETTINGS_JSON);
        return;
      }

      this.updateAndSaveAppSettings(appSettings);
    } catch (error) {
      console.log(error);
    }
  }

  updateAndSaveAppSettings(appSettings: IAppSettings = this.appSettings) {
    try {
      this.appSettings = this.getValidatedAppSettings(appSettings);
      this.coreService.saveToLocalStorage('appSettings', this.appSettings);
      console.log('Poprawnie zupdatowano i zapisano USTAWIENIA aplikacji');
    } catch (error) {
      alert(error);
    }
  }

  private getValidatedAppSettings(value: IAppSettings) {
    return value;
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

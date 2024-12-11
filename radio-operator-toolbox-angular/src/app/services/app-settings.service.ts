import { CoreService } from 'src/app/services/core.service';
import { Injectable } from '@angular/core';
import { AppSettings, IAppSettings } from '../models/app-settings.model';
import packageJson from './../../../package.json';
import { WORDS_10LETTERSUNIQUE_2XCOOL_PL } from 'src/assets/words10letterUnique_PL.jsonc';
import { BehaviorSubject } from 'rxjs';
import { DTG_TIMEZONES_CODES } from 'src/assets/app-constants';
import { DEFAULT_APP_SETTINGS_JSON } from 'src/assets/app-default-settings';

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
    // this.appSettings.reportsTemplates.push(exampleMEDEVAC_PL);
    // this.appSettings.reportsTemplates.push(exampleSALUTE_PL);

    //DEBUG
    // this.findUniqueWords();
    // this.alphabet = ALPHABET_PL;
  }

  initAppSettings() {
    try {
      let appSettings = this.coreService.getFromLocalStorage('appSettings');
      if (!appSettings) {
        this.updateAndSaveAppSettings(DEFAULT_APP_SETTINGS_JSON);
        return;
      }

      this.updateAndSaveAppSettings(appSettings);
    } catch (error) {
      console.log(error);
    }
  }

  clearAllSettings() {
    this.appSettings = this.getValidatedAppSettings(new AppSettings());
    if (this.coreService.isDevEnv()) {
      console.warn('devmode');
      this.updateAndSaveAppSettings(DEFAULT_APP_SETTINGS_JSON); //km dev only, comment it in PROD
      return;
    }

    this.updateAndSaveAppSettings(this.appSettings);
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
    if(this.coreService.isArrayNullOrEmpty(value.menuTilesTree)){
      value.menuTilesTree=DEFAULT_APP_SETTINGS_JSON.menuTilesTree;
    }
    
    if(this.coreService.isArrayNullOrEmpty(value.reportsTemplates)){
      value.reportsTemplates=DEFAULT_APP_SETTINGS_JSON.reportsTemplates;
    }
    
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


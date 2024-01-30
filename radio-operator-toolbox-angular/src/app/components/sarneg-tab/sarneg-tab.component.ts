import { AppService } from '../../services/app.service';
import { KeyValue } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { indexOf, values } from 'lodash-es';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-sarneg-tab',
  templateUrl: './sarneg-tab.component.html',
  styleUrls: ['./sarneg-tab.component.scss'],
})
export class SarnegTabComponent {
  numbersDecoded = '123';
  numbersEncoded = '';
  currentCodeWord = 'BACKGROUND';
  coderwordInputValue = 'BACKGROUND';
  isCurrentCodeWordLocked = true;
  codeWords: string[] = [];
  isEncoding = true;

  // allowedCharacgets = ',./<>?;\':"[]\\{}!@#$%*()_+-=';
  // allowedCharacters = ` ,./<>?;':"[]\\{}!@#$%*()_+-=`;

  constructor(
    private appService: AppService,
    private appSettingsService: AppSettingsService,
    private coreService: CoreService
  ) {
    this.codeWords = this.coreService.getRandomElementsFromArray(
      this.appSettingsService.codewords,
      6
    );

    this.currentCodeWord = coreService.getRandomElementsFromArray(
      this.codeWords
    )[0];
    this.coderwordInputValue = this.currentCodeWord;
  }

  ngOnInit(): void {
    this.encodeWord();
  }

  test(value: any) {
    console.log(value);
  }

  encodeWord() {
    this.isEncoding = true;

    if (!this.numbersDecoded) {
      return;
    }

    this.validateNumbersForEncoding();

    this.numbersEncoded = '';
    Array.from(this.numbersDecoded?.toString()).forEach((digit) => {
      // let allowedSigns = [...' !@#$%*()_+-=[]{}|\\:";\'<>,.?/'];
      let allowedSigns = [...' .!#'];
      this.numbersEncoded += !!allowedSigns.find((s) => s === digit)
        ? digit
        : this.currentCodeWord[Number(digit)] ?? '';
    });
  }

  validateNumbersForEncoding() {
    this.numbersDecoded = this.numbersDecoded
      ?.toString()
      // .replace(/[^0-9 ,./<>?;':"\[\]\\\{\}\!@#$%*()_+-=]/g, '');
      .replace(/[^0-9 \.\!\#]/g, '');
  }

  decodeWord() {
    this.isEncoding = false;

    this.validateNumbersForDecoding(
      this.numbersEncoded,
      Array.from(this.currentCodeWord)
    );

    this.numbersDecoded = '';
    let array = Array.from(this.currentCodeWord);
    Array.from(this.numbersEncoded.toString()).forEach((letter) => {
      let allowedSigns = [...' .!#'];
      this.numbersDecoded += !!allowedSigns.find((s) => s === letter)
        ? letter
        : [...this.currentCodeWord].indexOf(letter) ?? '';
    });
  }

  validateNumbersForDecoding(string: string, allowedLetters: string[]) {
    const allowedCharacters = new RegExp(`[^${this.currentCodeWord} \.\!\#]`, 'g');

    this.numbersEncoded = this.numbersEncoded
      .toUpperCase()
      .replaceAll(allowedCharacters, '');
  }

  setCodeword(value: string) {
    if (this.isCurrentCodeWordLocked) {
      return;
    }

    this.coderwordInputValue = value;
    this.currentCodeWord = this.coderwordInputValue;
    this.encodeWord();
  }

  toggleCodewordLock() {
    this.isCurrentCodeWordLocked = !this.isCurrentCodeWordLocked;

    if (this.isCurrentCodeWordLocked) {
      this.currentCodeWord = this.coderwordInputValue;
      this.encodeWord();
    }
  }

  validateCodeword() {
    this.coderwordInputValue = this.coderwordInputValue.toUpperCase();
  }

  isCodewordValid() {
    if (
      this.coderwordInputValue.length === 10 &&
      !this.coreService.hasRepeatedLetters(this.coderwordInputValue)
    ) {
      return true;
    }

    return false;
  }
}

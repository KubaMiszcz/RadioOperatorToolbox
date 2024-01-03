import { AppService } from './../../services/app.service';
import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { indexOf, values } from 'lodash-es';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-sarneg-page',
  templateUrl: './sarneg-page.component.html',
  styleUrls: ['./sarneg-page.component.scss'],
})
export class SarnegPageComponent {
  numbersDecoded = '1122334';
  numbersEncoded = '';
  currentCodeWord = 'BACKGROUND';
  codeWords: string[] = [];
  isEncoding = true;

  constructor(
    private appService: AppService,
    private appSettingsService: AppSettingsService
  ) {
    this.codeWords = this.appService.getRandomElementsFromArray(
      this.appSettingsService.codewords,
      6
    );

    this.currentCodeWord = appService.getRandomElementsFromArray(
      this.codeWords
    )[0];
  }

  ngOnInit(): void {
    this.encodeWord();
  }

  encodeWord() {
    this.isEncoding = true;

    if (!this.numbersDecoded) {
      return;
    }

    this.validateWordDecoded();

    this.numbersEncoded = '';
    Array.from(this.numbersDecoded?.toString()).forEach((digit) => {
      this.numbersEncoded += this.currentCodeWord[Number(digit)] ?? '';
    });
  }

  validateWordDecoded() {
    this.numbersDecoded = this.numbersDecoded
      ?.toString()
      .replace(/[^0-9]/g, '');
  }

  decodeWord() {
    this.isEncoding = false;

    this.validateWordEncoded(
      this.numbersEncoded,
      Array.from(this.currentCodeWord)
    );

    this.numbersDecoded = '';
    let array = Array.from(this.currentCodeWord);
    Array.from(this.numbersEncoded.toString()).forEach((letter) => {
      let idx = array.indexOf(
        array.find((l) => l === letter.toUpperCase()) ?? ''
      );
      this.numbersDecoded += idx > 0 ? idx : '';
    });
  }

  validateWordEncoded(string: string, allowedLetters: string[]) {
    const allowedCharacters = new RegExp(`[^${this.currentCodeWord}]`, 'g');

    this.numbersEncoded = this.numbersEncoded
      .toUpperCase()
      .replaceAll(allowedCharacters, '');
  }

  changeCodeword(value: string) {
    this.currentCodeWord = value;
    this.encodeWord();
  }
}

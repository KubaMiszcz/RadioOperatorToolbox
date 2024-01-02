import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { indexOf } from 'lodash-es';
import { CODEWORDS_EN, CODEWORDS_PL } from 'src/app/services/app-settings.service';



@Component({
  selector: 'app-sarneg-page',
  templateUrl: './sarneg-page.component.html',
  styleUrls: ['./sarneg-page.component.scss'],
})
export class SarnegPageComponent {
  wordDecoded = '1122334';
  wordEncoded = 'nn';
  currentCodeWord = 'BACKGROUND';
  codeWords = CODEWORDS_PL;

  constructor() {
    this.currentCodeWord = this.codeWords[0];
  }

  ngOnInit(): void {
    this.encode();
  }

  encode() {
    this.validateWordDecoded();

    this.wordEncoded = '';
    Array.from(this.wordDecoded.toString()).forEach((digit) => {
      this.wordEncoded += this.currentCodeWord[Number(digit)] ?? '';
    });
  }

  validateWordDecoded() {
    this.wordDecoded = this.wordDecoded.replace(/[^0-9]/g, '');
  }

  decode() {
    this.validateWordEncoded(
      this.wordEncoded,
      Array.from(this.currentCodeWord)
    );

    this.wordDecoded = '';
    let array = Array.from(this.currentCodeWord);
    Array.from(this.wordEncoded.toString()).forEach((letter) => {
      let idx = array.indexOf(
        array.find((l) => l === letter.toUpperCase()) ?? ''
      );
      this.wordDecoded += idx > 0 ? idx : '';
    });
  }

  validateWordEncoded(string: string, allowedLetters: string[]) {
    const allowedCharacters = new RegExp(`[^${this.currentCodeWord}]`, 'g');

    this.wordEncoded = this.wordEncoded
      .toUpperCase()
      .replaceAll(allowedCharacters, '');
  }

  changeCodeword(value: string) {
    this.currentCodeWord = value;
    this.encode();
  }

}
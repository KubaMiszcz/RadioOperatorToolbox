import { Component } from '@angular/core';
import { CODEWORDS_PL } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-vigenere-page',
  templateUrl: './vigenere-page.component.html',
  styleUrls: ['./vigenere-page.component.scss']
})
export class VigenerePageComponent {
  textDecoded = '1122334';
  textEncoded = '';
  currentCodeWord = 'BACKGROUND';
  codeWords: string[] = [];
  isEncoding = true;

  constructor(private appService: AppService) {
    this.codeWords = this.appService.getRandomElementsFromArray(
      CODEWORDS_PL,
      6
    );
    this.currentCodeWord = appService.getRandomElementsFromArray(
      this.codeWords
    )[0];
  }

  ngOnInit(): void {
    this.encodeText();
  }

  encodeText() {
    this.isEncoding = true;

    if (!this.textDecoded) {
      return;
    }

    this.validateWordDecoded();

    this.textEncoded = '';
    Array.from(this.textDecoded?.toString()).forEach((digit) => {
      this.textEncoded += this.currentCodeWord[Number(digit)] ?? '';
    });
  }

  validateWordDecoded() {
    this.textDecoded = this.textDecoded?.toString().replace(/[^0-9]/g, '');
  }

  decodeText() {
    this.isEncoding = false;

    this.validateWordEncoded(
      this.textEncoded,
      Array.from(this.currentCodeWord)
    );

    this.textDecoded = '';
    let array = Array.from(this.currentCodeWord);
    Array.from(this.textEncoded.toString()).forEach((letter) => {
      let idx = array.indexOf(
        array.find((l) => l === letter.toUpperCase()) ?? ''
      );
      this.textDecoded += idx > 0 ? idx : '';
    });
  }

  validateWordEncoded(string: string, allowedLetters: string[]) {
    const allowedCharacters = new RegExp(`[^${this.currentCodeWord}]`, 'g');

    this.textEncoded = this.textEncoded
      .toUpperCase()
      .replaceAll(allowedCharacters, '');
  }

  changeCodeword(value: string) {
    this.currentCodeWord = value;
    this.encodeText();
  }
}

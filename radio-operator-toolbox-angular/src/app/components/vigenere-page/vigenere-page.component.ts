import { Component } from '@angular/core';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AppService } from 'src/app/services/app.service';
import { CoreService } from 'src/app/services/core.service';
import { ALPHABET_EN, ALPHABET_PL } from 'src/assets/application-default-data';

@Component({
  selector: 'app-vigenere-page',
  templateUrl: './vigenere-page.component.html',
  styleUrls: ['./vigenere-page.component.scss'],
})
export class VigenerePageComponent {
  textDecoded = 'abc';
  textEncoded = '';
  currentCodeWord = 'BACKGROUND';
  codeWords: string[] = [];
  isEncoding = true;
  codeTable: string[][] = [];
  alphabet = ALPHABET_PL;

  constructor(
    private appService: AppService,
    private appSettingsService: AppSettingsService,
    private coreService: CoreService
  ) {
    this.codeWords = this.getCodewordsTable(6);

    this.currentCodeWord = coreService.getRandomElementsFromArray(
      this.codeWords
    )[0];

    this.makeVigenereCodeTable(this.currentCodeWord);
  }

  ngOnInit(): void {
    this.encodeText();
  }

  private getCodewordsTable(count: number) {
    let result: string[] = [];
    do {
      let codewords = this.appSettingsService.codewords;
      let codeWord = this.coreService.getRandomElementsFromArray(codewords)[0];

      if (
        !result.find((c) => c === codeWord) &&
        this.checkIfCodewordCoversAlphabet(codeWord)
      ) {
        result.push(codeWord);
      }
    } while (result.length < count);

    return result;
  }

  private checkIfCodewordCoversAlphabet(codeWord: string) {
    // //is all letters present in table after roll rows
    // let isOKpart0_10 = false;
    // let isOKpart10_20 = false;
    // let isOKpart20_30 = false;
    // [...codeWord].forEach((letter) => {
    //   let idx = this.alphabet.indexOf(letter);
    //   isOKpart0_10 = isOKpart0_10 || (idx >= 0 && idx <= 9);
    //   isOKpart10_20 = isOKpart10_20 || (idx >= 10 && idx <= 19);
    //   isOKpart20_30 = isOKpart20_30 || (idx >= 20 && idx <= 29);
    // });

    // return isOKpart0_10 && isOKpart10_20 && isOKpart20_30;
    return true;
  }

  private makeVigenereCodeTable(codeWord: string) {
    [...codeWord].forEach((l) => {
      let idx = this.alphabet.indexOf(l);
      let head = [...this.alphabet];
      let tail = head.splice(idx);
      tail.push(...head);
      this.codeTable.push(tail.slice(0, codeWord.length));
    });
  }

  private makePolibiusCodeTable(codeWord: string) {
    [...codeWord].forEach((l) => {
      let idx = this.alphabet.indexOf(l);
      let head = [...this.alphabet];
      let tail = head.splice(idx);
      tail.push(...head);
      this.codeTable.push(tail.slice(0, codeWord.length));
    });
  }

  encodeText() {
    this.isEncoding = true;

    if (!this.textDecoded) {
      return;
    }

    this.validateWordDecoded();

    let allowedSigns = [...' \.\!\#'];
    this.textEncoded = '';

    Array.from(this.textDecoded).forEach((letter) => {
      let rowNo = -1;
      let colNo = -1;

      if (!!allowedSigns.find((l) => l === letter)) {
        // this.textEncoded+=` ${letter}`;
        this.textEncoded += '__';
        colNo = 0;
        return;
      }

      do {
        rowNo = this.coreService.getRandomNumber(
          this.currentCodeWord.length - 1
        );

        colNo = this.codeTable[rowNo].indexOf(letter.toUpperCase());
      } while (colNo < 0);

      this.textEncoded += ` ${rowNo}${colNo} `;
    });
  }

  validateWordDecoded() {
    this.textDecoded = this.textDecoded?.toString().replace(/[^A-Za-z =]/g, '');
    // .replace(/[^0-9 ,./<>?;':"\[\]\\\{\}\!@#$%*()_+-=]/g, '');
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

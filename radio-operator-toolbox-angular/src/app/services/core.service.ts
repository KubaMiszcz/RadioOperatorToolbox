import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { IReport } from '../models/report.model';
import packageJson from './../../../package.json';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  deg2Rad(angleDeg: number) {
    return angleDeg * (Math.PI / 180);
  }

  constructor() {}

  isDevEnv() {
    return packageJson.build.includes('dev');
  }

  getRandomNumber(max: number) {
    // getRandomNumber(10) => <0 to 10>
    return Math.round(Math.random() * max);
  }

  deepCopy<T>(obj: T): T {
    let cache: any = [];
    let str = JSON.stringify(obj, function (key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    cache = null; // reset the cache

    return JSON.parse(str);
  }

  swapArrayItems<T>(array: T[], index1: number, index2: number) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  }

  deleteItemFromArrayByIndex<T>(array: T[], idx: number) {
    array.splice(idx, 1);
  }

  getArraySortedByName<T>(array: T[]): T[] {
    return this.getArraySortedByPropertyName(array, 'name');
    // return _.orderBy(array, 'name', 'asc');
  }

  getArraySortedByPropertyName<T>(array: T[], propName: string): T[] {
    return _.orderBy(array, propName, 'asc');
  }

  getRandomElementsFromArray<T>(array: T[], count: number = 1): T[] {
    let result: any = [];
    while (count) {
      let randIdx = this.getRandomNumber(array.length - 1);
      randIdx = randIdx < 0 ? 0 : randIdx;
      let element = array[randIdx];

      if (randIdx < 0) {
        console.log(randIdx);
      }

      if (!!result.find((e: T) => e === element)) {
        continue;
      }

      result.push(array[randIdx]);
      count--;
    }

    return result;
  }

  hasRepeatedLetters(str: string) {
    return /(.).*\1/.test(str);
  }

  replaceItemInArray<T>(array: T[] | undefined, oldValue: T, newValue: T) {
    if (!array?.length) {
      return;
    }

    let idx = array?.findIndex((e) => e === oldValue) ?? -1;
    array.splice(idx, 1, newValue);
  }

  removeItemInArray<T>(array: T[] | undefined, value: T) {
    if (!array?.length) {
      return;
    }

    let idx = array?.findIndex((e) => e === value) ?? -1;
    array.splice(idx, 1);
  }

  saveToLocalStorage<T>(name: string, value: T) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  getFromLocalStorage(name: string) {
    return JSON.parse(localStorage.getItem(name) ?? '');
  }

  getValueFromEvent(event: FocusEvent | Event): string {
    return (event.target as HTMLInputElement).value;
  }

  getValueAsNumberFromEvent(event: FocusEvent | Event): number {
    return (event.target as HTMLInputElement).valueAsNumber;
  }

  round(value: number, accuracy: number = 0): number {
    return Number(value.toFixed(accuracy));
  }
}

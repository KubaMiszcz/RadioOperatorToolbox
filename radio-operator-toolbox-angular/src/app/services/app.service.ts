import { Injectable } from '@angular/core';
import { AppSettingsService } from './app-settings.service';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { ORDER_DIRECTION } from '../models/enums';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private appSettings: AppSettingsService) {}

  //====================================================================
  //====================================================================
  //====================================================================
  //====================================================================
  //====================================================================
  //====================================================================
  //GENERIC METHODS
  //move to coreservice

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
    return _.orderBy(array, 'name', 'asc');
  }

  getRandomElementsFromArray<T>(array: T[], count: number = 1): T[] {
    let result: any = [];
    while (count) {
      let randIdx = Math.round(Math.random() * array.length - 1);
      let element = array[randIdx];

      if (result?.find((e: string) => e === element)) {
        continue;
      }

      result.push(array[randIdx]);
      count--;
    }

    return result;
  }
}

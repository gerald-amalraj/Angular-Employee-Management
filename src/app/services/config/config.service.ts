import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import {trigger, state, animate, style, transition} from '@angular/core';

@Injectable()
export class ConfigService {
}

export class ValidationService {

    static emailValidator(control) {
        if (control.value.
			match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
       }
    }

static checkLimit(min: number, max: number): ValidatorFn {
       return (c: AbstractControl): { [key: string]: boolean } | null => {
          if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
       return { 'range': true };
    }
       return null;
    };
  }
}



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  callFunctionAfterDelay(callback: () => void, delay: number) {
    setTimeout(callback, delay);
  }
}

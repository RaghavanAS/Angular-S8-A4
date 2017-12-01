import { Injectable } from '@angular/core';

@Injectable()
// injecting the logger service
export class LoggerService {
  // log method to display
    log(message: any) {
      console.log('LoggerService.log():', message);
      // access some server and log the message (input parameter)
    }
    // retreive message to display appropriate message
    retrive() {
        console.log('Retrieving data.');
    }
  }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TitleService } from './Services/title-service';
import { LoggerService} from './Services/logger-service';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TitleService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

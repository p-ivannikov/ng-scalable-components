import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule.component';
import { ServicesComponent } from './components/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

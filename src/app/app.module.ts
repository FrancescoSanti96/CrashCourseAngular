import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ButtonComponent, TopBarComponent, TaskComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextformComponent } from './textform/textform.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { HeadertextComponent } from './headertext/headertext.component';

@NgModule({
  declarations: [
    AppComponent,
    TextformComponent,
    HeadertextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spongebobmemetext';

  generatedText:string=""
  headerText : string = ""

  takeNewString(s:string){
    this.generatedText = s
  }

  takeHeaderText (s:string){
    this.headerText = s
  }
}

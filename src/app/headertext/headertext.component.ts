import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-headertext',
  templateUrl: './headertext.component.html',
  styleUrl: './headertext.component.css'
})
export class HeadertextComponent implements OnInit{

  headerText:string = "mocking spongebob meme text generator"

  @Output()
  sendHeaderText = new Subject<string>()

  ngOnInit(): void {
      var headerTextArray : string[] = this.headerText.split('')
      var finalString : string = ""
      for( let char of headerTextArray){
        var num = this.getRandomInt(2);
        console.log(num)
        if(num == 0){
          char = char.toLowerCase()
        }
        else{
          char = char.toUpperCase()
        }
        finalString = finalString.concat(char)


      }
      this.sendHeaderText.next(finalString)
      this.headerText = finalString
  }
  getRandomInt(max:number):number {
    return Math.floor(Math.random() * max);
  }
}

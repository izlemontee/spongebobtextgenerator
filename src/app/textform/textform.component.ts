import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { Subject } from 'rxjs';
import { TextInput } from '../models';

@Component({
  selector: 'app-textform',
  templateUrl: './textform.component.html',
  styleUrl: './textform.component.css'
})
export class TextformComponent implements OnInit{

  @Input()
  textInput:string = ""

  @Output()
  sendNewString = new Subject<string>()

  private fb!:FormBuilder
  textForm!:FormGroup

  constructor(fb:FormBuilder){
    this.fb = fb
  }

  ngOnInit(): void {
      this.textForm = this.createTextForm()
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //     var finalString:string = this.generateNewText()
  //     this.sendNewString.next(finalString)
  // }

  createTextForm():FormGroup{
    var group: FormGroup
    group = this.fb.group({
      text: this.fb.control<string>('')
    })


    return group
  }
  generateNewText():string{
    const values = this.textForm.value as TextInput
    this.textInput = values.text
    var charArray = this.textInput.split('')
    var finalString:string = ""
    for(let c of charArray){
      var num = this.getRandomInt(2);
      if(num == 0){
        c = c.toLowerCase()
      }
      else{
        c = c.toUpperCase()
      }
      finalString = finalString.concat(c)
    }
    return finalString
  }

  getRandomInt(max:number):number {
    return Math.floor(Math.random() * max);
  }

  processForm(){
    var newString = this.generateNewText()
    console.log("newString: "+newString)
    this.sendNewString.next(newString)
  }

}

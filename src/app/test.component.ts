import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'test',
  template: `
  <h1>Hello {{name}}</h1>  
  <button  (click)="vote(true)">Agree</button>
  <button [disabled]="voted" (click)="vote(false)">Disagree</button>
  `,  
})
export class TestComponent  { 
  @Input() name:string;
  @Output() onVote = new EventEmitter<boolean>();
  voted=false;
  vote(agree:boolean){
    this.voted=true;
    this.onVote.emit(agree);
  }
  setName(string:string){
    this.name=string;
  }
}
import { Component,ViewChild,ViewChildren,QueryList } from '@angular/core';
import {TestComponent} from './test.component'
@Component({
  selector: 'my-app',
  template: `
  <h1>Chao {{name}}</h1>
  <input type="text" #Name (keyup)="4232"/><br>
  <button (click)="changeName(Name.value)">Change Name</button>
  <p>Total agree: {{agree}}</p>
  <p>Total disagree: {{disagree}}</p>
  <test *ngFor = "let name of names" [name]= "name" (onVote)=vote($event)></test>
  `,
})
export class AppComponent  { 
  @ViewChildren(TestComponent) 
  testComponents:Array<TestComponent>;
  name = 'Angular'; 
  agree:number=0;
  disagree:number=0;
  names=['A','B','C','D']
  vote(agree:boolean){
    agree?this.agree++:this.disagree++;
  }
  changeName(string:string){
    console.log(this.testComponents._results[1]);
  }
}

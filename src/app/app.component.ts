import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child-first/child.first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit,OnInit{
  ngOnInit(): void {
    console.log("ngOnInit parent called");
  }
  constructor(){
    console.log("constuctor parent called");
  }
  title = 'Hey';
  data :string = "message from parent1";
  dataUsingOutput1:string ;
  dataFromChild: string;
        @ViewChild(ChildComponent) child;

        update(){
          console.log("update method called");
          this.dataFromChild = this.child.dataForParent;
        }
        ngAfterViewInit(){
          console.log("ngAfterViewInit called");
        //  this.dataFromChild = this.child.data;
        }
        dataUsingOutput(event){
          console.log("Inside dataUsing @Output "+event);
          this.dataUsingOutput1 = event;
        }

}

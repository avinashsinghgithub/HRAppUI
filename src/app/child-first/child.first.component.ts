import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

      @Component({
        selector: 'app-child',
        template:`
          <p>{{data}}</p>
          <button (click)="emitData()">Click to emit data</button>
        `,
        styleUrls: ['./child.component.css']
      })
      export class ChildComponent implements OnInit {
        @Input() data:string;

       
        dataForParent:string = "Message from child to parent";

        @Output() dataEvent = new EventEmitter<string>();

        constructor() { 
            console.log("Child constructor called");
        }
          ngOnInit(): void {
            console.log("Child ngOnInit called");
          }

        emitData(){
            console.log("Emitting data")
          this.dataEvent.emit(this.dataForParent);
        }
        // updateData(){
        //     console.log("Emitting data")
        //   this.dataEvent.emit(this.dataForParent);
        // }
      }
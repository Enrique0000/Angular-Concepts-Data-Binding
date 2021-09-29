import { Component, OnInit, DoCheck, OnChanges, OnDestroy, AfterContentChecked, AfterViewChecked, AfterContentInit, Input} from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  templateUrl: './life-cicle.component.html',
  styleUrls: ['./life-cicle.component.css']
})
export class LifeCicleComponent implements OnInit, DoCheck, OnChanges, OnDestroy, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input() randomValue: number = 60;

  constructor() {
    this.log("constructor")
   }

  ngOnInit(): void {
    this.log("OnInit");
  }

  ngOnChanges(){
    this.log("OnChanges");
  }

  ngDoCheck(){
    this.log("DoCheck");
  } 
  
  ngAfterContentInit(){
    this.log("AfterContentInit");
  }

  ngAfterContentChecked(){
    this.log("AfterContentChecked");
  }

  ngAfterViewChecked(){
    this.log("AfterViewChecked");
  }

  ngOnDestroy(){
    this.log("OnDestroy");
  }

  private log(hook: string){
    console.log(hook);
  }

}

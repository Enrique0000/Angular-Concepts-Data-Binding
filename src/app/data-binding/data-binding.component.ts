import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  myTrue: boolean = true; 
  url: string = "http://facebook.com";
  urlAnimal: string = "http://lorempixel.com/124/125/animals/4/cc/";
  getNumber(){
    return 60 * 2;
  }

  valorSete: any = 7

  constructor() { }

  ngOnInit(): void {
  }

}

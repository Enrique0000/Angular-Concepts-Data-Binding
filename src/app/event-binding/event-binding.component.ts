import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  
  firstEvent(){
    alert("primeiro evento");
  }
  valorOfInput: any = "";
  saveValor: any 

  onKeyPress(evento: KeyboardEvent){
    this.valorOfInput = (<HTMLInputElement>evento.target).value;
  }
  saveTheValor(valor: any){
    this.saveValor = (<HTMLInputElement>valor.target).value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

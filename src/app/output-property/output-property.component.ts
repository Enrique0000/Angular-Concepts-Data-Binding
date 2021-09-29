import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'countdown',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: any = 0;
  
  @ViewChild("campoInput")  campoValorInput: any = ElementRef;
  

  aumentar(){
    this.campoValorInput.nativeElement.value++;
    
  }
  diminuir(){
    this.campoValorInput.nativeElement.value--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

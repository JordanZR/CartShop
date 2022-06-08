import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public show(op:boolean){
    if(op){
      // @ts-ignore
      document.getElementById("Popup").setAttribute("style", "visibility: visible")
      // @ts-ignore
      document.getElementById("details").setAttribute("style", "visibility: hidden")
    }else{
      // @ts-ignore
      document.getElementById("Popup").setAttribute("style", "visibility: hidden")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

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
      document.getElementById("Popup").setAttribute("style", "visibility: visible; z-index: 4")
      // @ts-ignore
      document.getElementById("details").setAttribute("style", "visibility: hidden")
      // @ts-ignore
      document.getElementById("fade").setAttribute("style", "visibility: visible; z-index: 3")
    }else{
      // @ts-ignore
      document.getElementById("Popup").setAttribute("style", "visibility: hidden")
      // @ts-ignore
      document.getElementById("fade").setAttribute("style", "visibility: hidden; z-index: 0")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

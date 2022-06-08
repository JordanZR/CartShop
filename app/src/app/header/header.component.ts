import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showDetails(op:boolean){
    if(op){
      // @ts-ignore
      document.getElementById("details").setAttribute("style", "visibility: visible")
      // @ts-ignore
      document.getElementById("Popup").setAttribute("style", "visibility: hidden")

    }else{
      // @ts-ignore
      document.getElementById("details").setAttribute("style", "visibility: hidden")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

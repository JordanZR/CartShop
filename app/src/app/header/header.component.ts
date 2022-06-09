import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public showDetails(){
      // @ts-ignore
      document.getElementById("details").setAttribute("style", "visibility: hidden")
      // @ts-ignore
      document.getElementById("fade").setAttribute("style", "visibility: hidden; z-index: 0")
  }

  constructor() { }

  ngOnInit(): void {
  }

}

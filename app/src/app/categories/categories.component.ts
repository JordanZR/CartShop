import { Component, OnInit } from '@angular/core';
import mode from '../JSON/albums.json';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public albums:any[] = []
  public songs:any[] = []
  public price:number = 0;public total:number = 0
  public show(op:boolean, album:any){
    if(op){

      for(var i = 0; i<album.songs.length;i++){
          this.songs.push(album.songs[i])
      }
      this.price = album.price
      // @ts-ignore
      document.getElementById("title").innerText = album.name + " by " + album.author
      // @ts-ignore
      document.getElementById("about").innerText = album.about
      // @ts-ignore
      document.getElementById("cover").setAttribute("src", album.imageURL)
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

  public add(){
      this.total = this.total + this.price
      // @ts-ignore
      document.getElementById("total").innerText = "$" + this.total
  }

  constructor() { }

  ngOnInit(): void {
    for(let i = 0;i<mode.length;i++){
      // @ts-ignore
      this.albums.push(mode[i])
    }
  }

}

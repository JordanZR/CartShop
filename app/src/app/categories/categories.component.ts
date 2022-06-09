import { Component, OnInit } from '@angular/core';
import mode from '../JSON/albums.json';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public albums:any[] = []
  public album:any = {}
  public songs:any[] = []
  public total:number = 0
  public shopList:any[] = []

  public show(op:boolean, album:any){
    if(op){
      this.album = album
      for(var i = 0; i<album.songs.length;i++){
          this.songs.push(album.songs[i])
      }
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
      this.songs.splice(0)
      // @ts-ignore
      document.getElementById("Popup").setAttribute("style", "visibility: hidden")
      // @ts-ignore
      document.getElementById("fade").setAttribute("style", "visibility: hidden; z-index: 0")
    }
  }

  public showDetails(op:boolean){
    if(op){
      // @ts-ignore
      document.getElementById("details").setAttribute("style", "visibility: visible; z-index:4")
      // @ts-ignore
      document.getElementById("Popup").setAttribute("style", "visibility: hidden")
      // @ts-ignore
      document.getElementById("fade").setAttribute("style", "visibility: visible; z-index: 3")
      // @ts-ignore
      document.getElementById("tableTotal").innerText = "Total: $" + this.total

    }else{
      // @ts-ignore
      document.getElementById("details").setAttribute("style", "visibility: hidden")
      // @ts-ignore
      document.getElementById("fade").setAttribute("style", "visibility: hidden; z-index: 0")
    }
  }

  public add(){
    this.shopList.push(this.album)
    this.total = this.total + this.album.price
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

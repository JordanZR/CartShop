import { Component, OnInit } from '@angular/core';
import mode from '../JSON/albums.json';
import Swal from 'sweetalert2'

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
      document.getElementById("tableTotal").innerText = "Total: $" + this.total.toFixed(2)

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
    this.total.toFixed(2)
      // @ts-ignore
    document.getElementById("total").innerText = "$" + this.total.toFixed(2)
    Swal.fire(
      'Genial!',
      'La cancion se ha agregado',
      'success'
    )
  }

  public pay(){
    Swal.fire(
      'Excelente!',
      'La compra se ha realizado con exito',
      'success'
    )
    this.shopList = []
    console.log(this.shopList)
    this.total = 0
    // @ts-ignore
    document.getElementById("total").innerText = "$0.00"
    // @ts-ignore
    document.getElementById("tableTotal").innerText = "Total: $0.00"
  }

  constructor() { }

  ngOnInit(): void {
    for(let i = 0;i<mode.length;i++){
      // @ts-ignore
      this.albums.push(mode[i])
    }
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
// import {BlogService} from "../blog.service";
import {BlogHttpService} from "../blog-http.service";
import { ActivatedRoute,Router } from '@angular/router';
// import { Z_DATA_ERROR } from 'zlib';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  // ngOnDestroy(): void{
  //   throw new Error("Method not implemented");
  // }
  // public allBlogs={};
  // public characters;
  // public allBlogs=[
    public allDetails = {};
    

  
  constructor(public blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router) { 
    console.log("Home component constructor called");
    let btn = document.getElementById("coolbutton");

    if(btn){
      btn.addEventListener("click", (e:Event) => this.getCharacters());
      }  
    
  }

  getCharacters(){
    this.router.navigate(['/blog',this.allDetails["characters"]["url"]]);
   
  } 

  

  ngOnInit() {
    console.log("Home component oninit called");
   
    
    this.allDetails["characters"] = [];
    this.allDetails["books"] = [];
    this.allDetails["houses"] = [];
    this.blogHttpService.getAllCharacters().subscribe(
      data =>{
        
        this.allDetails["characters"]=data;
      },
      error =>{
        console.log("some error occurred");
        console.log(error.errorMessage);
      }
    )
    this.blogHttpService.getAllBooks().subscribe(
      data =>{
        this.allDetails["books"]=data;
      },
      error =>{
        console.log("some error occurred");
        console.log(error.errorMessage);
      }
    )
    this.blogHttpService.getAllHouses().subscribe(
      data =>{
        console.log(this.allDetails);
        this.allDetails["houses"]=data;
      },
      error =>{
        console.log("some error occurred");
        console.log(error.errorMessage);
      }

       
    )

    
   
  

    
    
  }


  ngOnDestroy() {
    console.log("Home component ondestroy called");
  }
}

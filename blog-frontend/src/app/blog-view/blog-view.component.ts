import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {BlogService} from "../blog.service";
import {BlogHttpService} from "../blog-http.service";
import {Location} from '@angular/common';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  public currentUrl;
  public characterValue;


  constructor(private _route:ActivatedRoute,private router:Router,public blogHttpService:BlogHttpService,private location:Location) { 

    console.log("Constructor is called");
  }

  ngOnInit() {
    console.log("ngOnInitCalled");
    let myUrl=this._route.snapshot.paramMap.get('url');
    console.log(myUrl);
    this.currentUrl=this.blogHttpService.getSingleCharacter(myUrl);
    console.log(this.currentUrl);
    this.blogHttpService.getSingleCharacter(this.currentUrl).subscribe(
        data=>{
          console.log(data);
          this.characterValue=data["data"];
        },

        error=>{
          console.log(error.errorMessage);
        }

    )

    
  }




  public goBackToPreviousPage(): any{
    this.location.back();
  }

  ngOnDestroy(){
    console.log("blog view destroyed");
  }


//  public deleteThisBlog():any{
//    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
//      data=> {
//        console.log(data);
//        setTimeout(()=>{
//         this.router.navigate(['/home'])
//        },1000)
//      },

//      error =>{
//        console.log(error.errorMessage);
//      }
//    )
//  }

}

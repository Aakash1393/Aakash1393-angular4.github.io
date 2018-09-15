import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute,Router } from '@angular/router';
// import { ToastaModule } from 'ngx-toasta';
// import {ToastaService} from 'ngx-toasta';
// import {ToastaConfig} from 'ngx-toasta';
// import {ToastOptions} from 'ngx-toasta';
// import {ToastData} from 'ngx-toasta';
// import {ToastaEvent} from 'ngx-toasta';
// import {ToastaEventType} from 'ngx-toasta';
// declare var toastr: any; 



@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  // constructor(private blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router,public toastr:ToastaModule)
  // {
  //   this.toastr;
  // }
  constructor(private blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router) { 
    // Assign the selected theme name to the `theme` property of the instance of ToastaConfig. 
    // Possible values: default, bootstrap, material
    
}



  // Success()
  // {
  //   toastr.success();
  // }
  public blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  

  private insertedToasts: number[] = [];
  ngOnInit() {

  }

  themes = [{
    name: 'Default Theme',
    code: 'default'
  }];


  types = [{
    name: 'Default',
    code: 'default',
  }];

  options = {
    title: 'Toast It!',
    msg: 'Mmmm, tasties...',
    showClose: true,
    timeout: 5000,
    theme: this.themes[0].code,
    type: this.types[0].code
  };


  public createBlog(): any{
    let blogData ={
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory
    }

    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        // this.newToast();
        console.log("Blog Created");
        console.log(data);
        // this.Success();
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },1000)
      //   this.toastaService.default({
      //     title: "Toast It!",
      //     msg: "Mmmm, tasties...",
      //     showClose: true,
      //     timeout: 1000,
      //     theme: "default"
      // });
       
    },
         
      error =>{
        console.log("some error occurred");
        console.log(Error);
      
      }


    )
  }

}
function newFunction() {
  var toastr: any;
  return toastr;
}


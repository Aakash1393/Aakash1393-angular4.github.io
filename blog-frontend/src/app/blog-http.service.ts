import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public myResponse;
  public baseUrl='https://anapioficeandfire.com/api';
  public authToken="Y2JlYjRhN2FkZGQxYmY3MTc4M2ZhNTgyNTdjOGMzNjcyNTQwMWM0MTQ2NDhiMTQ0MTlhYjViMzRmYzBiMDExNTc2ZjY1NWQ1ZDRkODk0ODQyZGNmMjUyZTZlY2M1ZGM4NWRjMzY4MDFjMDc4ZDlmNzE0NDMyMjA1MmVjODU5Mjk3MWI1";
  constructor(private _http:HttpClient) { 

   console.log("blog http service was called"); 

  }

  // public getAllBlogs():any{
  //     let myResponse = this._http.get(this.baseUrl+'/'+"characters"+'/'+'1');
       
  //      console.log(myResponse);
  // }


  public getAllCharacters():any{
    let newArr=[];
    // for(var i=1;i<=2138;i++)
    // {
       this.myResponse = this._http.get(this.baseUrl+'/'+"characters");
      console.log(this.myResponse);
      // newArr.push(myResponse);
      return this.myResponse;
    // }  
    
  }

  public getAllBooks():any{
    let newArr=[];
    // for(var i=1;i<=2138;i++)
    // {
      let myResponse = this._http.get(this.baseUrl+'/'+"books");
      console.log(myResponse);
      // newArr.push(myResponse);
      return myResponse;
    // }  
    
  }

  public getAllHouses():any{
    let newArr=[];
    // for(var i=1;i<=2138;i++)
    // {
      let myResponse = this._http.get(this.baseUrl+'/'+"houses");
      console.log(myResponse);
      // newArr.push(myResponse);
      return myResponse;
    // }  
    
  }



public getSingleCharacter(currentUrl):any{
   
    let response = this._http.get(currentUrl);
    console.log(response);
    return response;

  }

  public createBlog(blogData): any{
    let myResponse = this._http.post(this.baseUrl+ '/create' + '?authToken='+this.authToken, blogData)
    return myResponse;

  }

  public deleteBlog(blogId): any{
    let data={}
    let myResponse = this._http.post(this.baseUrl+ '/' +blogId + '/delete'+'?authToken=' +this.authToken,data)
    return myResponse;

  }

  public editBlog(blogId, blogData): any{
    let myResponse = this._http.put(this.baseUrl+ '/' + blogId+'/edit'+'?authToken='+this.authToken, blogData )
    return myResponse;

  }

}

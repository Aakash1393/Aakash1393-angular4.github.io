import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import {BlogService} from "./blog.service";
import {BlogHttpService} from "./blog-http.service";
import{RouterModule} from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastaModule} from 'ngx-toasta';
import {ToastaService } from 'ngx-toasta';
import {ToastaConfig} from 'ngx-toasta';
import {ToastOptions} from 'ngx-toasta';
import {ToastData} from 'ngx-toasta';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    
    // NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastaModule.forRoot(),
    RouterModule.forRoot([
    {path:'home',component:HomeComponent},  
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'blog/:url',component:BlogViewComponent},  
    {path:'create',component:BlogCreateComponent},  
    {path:'edit/:blogId',component:BlogEditComponent}, 
      
    // {path:'**',component:NotFoundComponent}
  ])
  ],

  providers: [BlogService,BlogHttpService,ToastaService,ToastaConfig,ToastOptions,ToastData,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

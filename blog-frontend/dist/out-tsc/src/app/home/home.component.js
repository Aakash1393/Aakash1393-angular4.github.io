var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
// import {BlogService} from "../blog.service";
import { BlogHttpService } from "../blog-http.service";
var HomeComponent = /** @class */ (function () {
    function HomeComponent(blogHttpService) {
        this.blogHttpService = blogHttpService;
        // ngOnDestroy(): void{
        //   throw new Error("Method not implemented");
        // }
        this.allBlogs = [
            {
                "blogId": "1",
                "lastModified": "2017-10-20T12:20:47.854Z",
                "created": "2017-10-20T12:20:47.854Z",
                "tags": [],
                "author": "admin",
                "category": "comedy",
                "isPublished": "true",
                "views": 0,
                "bodyHtml": "this is blog body",
                "description": "this is blog 1 description",
                "title": "This is blog1"
            },
            {
                "blogId": "2",
                "lastModified": "2017-10-21T21:47:51.678Z",
                "created": "2017-10-21T21:47:51.854Z",
                "tags": [],
                "author": "admin",
                "category": "comedy",
                "isPublished": "true",
                "views": 0,
                "bodyHtml": "this is blog body",
                "description": "this is blog 1 description",
                "title": "This is blog1"
            },
            {
                "blogId": "3",
                "lastModified": "2017-10-22T22:47:51.558Z",
                "created": "2017-10-21T21:47:51.854Z",
                "tags": [],
                "author": "admin",
                "category": "comedy",
                "isPublished": "true",
                "views": 0,
                "bodyHtml": "this is blog body",
                "description": "this is blog 1 description",
                "title": "This is blog1"
            }
        ];
        console.log("Home component constructor called");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Home component oninit called");
        this.blogHttpService.getAllBlogs().subscribe(function (data) {
            console.log(data);
            _this.allBlogs = data["data"];
        }, function (error) {
            console.log("some error occurred");
            console.log(error.errorMessage);
        });
        console.log(this.allBlogs);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("Home component ondestroy called");
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [BlogHttpService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map
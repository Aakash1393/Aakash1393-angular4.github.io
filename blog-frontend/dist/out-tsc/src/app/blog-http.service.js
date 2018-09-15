var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
var BlogHttpService = /** @class */ (function () {
    function BlogHttpService(_http) {
        this._http = _http;
        this.baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
        console.log("blog http service was called");
    }
    BlogHttpService.prototype.getAllBlogs = function () {
        var myResponse = this._http.get(this.baseUrl + '/all');
        console.log(myResponse);
        return myResponse;
    };
    BlogHttpService.prototype.getSingleBlogInformation = function (currentBlogId) {
        var myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + );
        return myResponse;
    };
    BlogHttpService.prototype.createBlog = function (blogData) {
        var myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
        return myResponse;
    };
    BlogHttpService.prototype.deleteBlog = function (blogId) {
        var data = {};
        var myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
        return myResponse;
    };
    BlogHttpService.prototype.editBlog = function (blogId, blogData) {
        var myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
        return myResponse;
    };
    BlogHttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], BlogHttpService);
    return BlogHttpService;
}());
export { BlogHttpService };
//# sourceMappingURL=blog-http.service.js.map
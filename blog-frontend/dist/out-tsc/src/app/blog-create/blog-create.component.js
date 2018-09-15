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
import { BlogHttpService } from '../blog-http.service';
var BlogCreateComponent = /** @class */ (function () {
    function BlogCreateComponent(blogHttpService) {
        this.blogHttpService = blogHttpService;
        this.possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
    }
    BlogCreateComponent.prototype.ngOnInit = function () {
    };
    BlogCreateComponent.prototype.createBlog = function () {
        var blogData = {
            title: this.blogTitle,
            description: this.blogDescription,
            blogBody: this.blogBodyHtml,
            category: this.blogCategory
        };
        console.log(blogData);
        this.blogHttpService.createBlog(blogData).subscribe(function (data) {
            console.log("Blog Created");
            console.log("data");
            alert('Blog Posted Successfully');
        }, function (error) {
            console.log("some error occurred");
            console.log(error.errorMessage);
            alert("Some error occured");
        });
    };
    BlogCreateComponent = __decorate([
        Component({
            selector: 'app-blog-create',
            templateUrl: './blog-create.component.html',
            styleUrls: ['./blog-create.component.css']
        }),
        __metadata("design:paramtypes", [BlogHttpService])
    ], BlogCreateComponent);
    return BlogCreateComponent;
}());
export { BlogCreateComponent };
//# sourceMappingURL=blog-create.component.js.map
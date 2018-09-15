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
import { ActivatedRoute, Router } from '@angular/router';
var BlogViewComponent = /** @class */ (function () {
    function BlogViewComponent(_route, router) {
        this._route = _route;
        this.router = router;
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
        console.log("Constructor is called");
    }
    BlogViewComponent.prototype.ngOnInit = function () {
        console.log("ngOnInitCalled");
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log(myBlogId);
        this.getSingleBlogInformation(myBlogId);
    };
    BlogViewComponent.prototype.ngOnDestroy = function () {
        console.log("blog view destroyed");
    };
    BlogViewComponent.prototype.getSingleBlogInformation = function (currentBlogId) {
        for (var _i = 0, _a = this.allBlogs; _i < _a.length; _i++) {
            var blog = _a[_i];
            if (blog.blogId == currentBlogId) {
                this.currentBlog = blog;
            }
        }
        console.log(this.currentBlog);
    };
    BlogViewComponent = __decorate([
        Component({
            selector: 'app-blog-view',
            templateUrl: './blog-view.component.html',
            styleUrls: ['./blog-view.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, Router])
    ], BlogViewComponent);
    return BlogViewComponent;
}());
export { BlogViewComponent };
//# sourceMappingURL=blog-view.component.js.map
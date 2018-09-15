import { TestBed, inject } from '@angular/core/testing';
import { BlogHttpService } from './blog-http.service';
describe('BlogHttpService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [BlogHttpService]
        });
    });
    it('should be created', inject([BlogHttpService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=blog-http.service.spec.js.map
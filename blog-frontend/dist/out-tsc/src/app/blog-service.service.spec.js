import { TestBed, inject } from '@angular/core/testing';
import { BlogServiceService } from './blog-service.service';
describe('BlogServiceService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [BlogServiceService]
        });
    });
    it('should be created', inject([BlogServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=blog-service.service.spec.js.map
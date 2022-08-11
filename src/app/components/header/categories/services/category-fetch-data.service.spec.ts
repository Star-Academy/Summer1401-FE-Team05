import {TestBed} from '@angular/core/testing';

import {CategoryFetchDataService} from './category-fetch-data.service';

describe('CategoryFetchDataService', () => {
    let service: CategoryFetchDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CategoryFetchDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

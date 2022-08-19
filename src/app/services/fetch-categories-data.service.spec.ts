import {TestBed} from '@angular/core/testing';

import {FetchCategoriesDataService} from './fetch-categories-data.service';

describe('FetchCategoriesDataService', () => {
    let service: FetchCategoriesDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FetchCategoriesDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

import {TestBed} from '@angular/core/testing';
import {FetchMock, VALID_TOKEN} from '../mocks/fetch';
import {Token} from '../models/token.model';
import {API_USER_AUTH} from '../utils/urls';

import {ApiService} from './api.service';

describe('ApiService', () => {
    let service: ApiService;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
        service = TestBed.inject(ApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('tests valid request', async () => {
        const res = await service.post<Token>(API_USER_AUTH, {token: VALID_TOKEN});
        expect(res?.token).toBeTruthy();
    });

    it('tests invalid request', async () => {
        const res = await service.post<Token>(API_USER_AUTH, {token: ''});
        expect(res?.token).toBeFalsy();
    });
});

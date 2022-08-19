import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FetchMock, VALID_TOKEN} from '../mocks/fetch';
import {Token} from '../models/token.model';
import {User} from '../models/user.model';
import {API_USER_AUTH, API_USER_ONE, API_WISHLIST_REMOVE} from '../utils/urls';

import {ApiService} from './api.service';

describe('ApiService', () => {
    let service: ApiService;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
        });

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
        service = TestBed.inject(ApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should preform a post request with valid request', async () => {
        const res = await service.postRequest<Token>(API_USER_AUTH, {token: VALID_TOKEN});
        expect(res?.token).toBeTruthy();
    });

    it('should preform a post request with invalid request', async () => {
        const res = await service.postRequest<Token>(API_USER_AUTH, {token: ''});
        expect(res?.token).toBeFalsy();
    });
    it('should preform a post request with empty request', async () => {
        const res = await service.postRequest<Token>(API_USER_AUTH);
        expect(res?.token).toBeFalsy();
    });

    it('should preform a get request with valid request', async () => {
        const res = await service.getRequest<any>(API_USER_ONE + '/23');
        expect(res?.user?.id).toBeTruthy();
    });

    it('should preform a get request with invalid request', async () => {
        const res = await service.getRequest<any>(API_USER_ONE + '/24');
        expect(res?.user).toBeFalsy();
    });

    it('should preform a delete request with valid request', async () => {
        const res = await service.deleteRequest(API_WISHLIST_REMOVE, {token: VALID_TOKEN, id: 25015});
        expect(res).toBeTrue();
    });

    it('should preform a delete request with invalid request', async () => {
        const res = await service.deleteRequest(API_WISHLIST_REMOVE, {token: VALID_TOKEN, id: 'wrong id here!'});
        expect(res).toBeFalsy();
    });

    it('should preform a delete request with empty request', async () => {
        const res = await service.deleteRequest(API_WISHLIST_REMOVE);
        expect(res).toBeFalsy();
    });
});

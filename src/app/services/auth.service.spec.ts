import {TestBed} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {LocalStorageMock} from '../mocks/local-storage';
import {FetchMock, VALID_TOKEN, VALID_USER_LOGIN_DATA, VALID_USER_SIGNUP_DATA} from '../mocks/fetch';
import {User} from '../models/user.model';

describe('AuthService', () => {
    let service: AuthService;
    let localStorageMock: LocalStorageMock;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
        });

        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should not Log in - with no token', async () => {
        const response = await service.isLoggedIn();
        expect(service.isUserLoggedIn).toBeFalse();
        expect(response).toBeFalse();
    });

    it('should not log in - with wrong token', async () => {
        localStorageMock.setItem('token', 'some wrong token');
        const response = await service.isLoggedIn();
        expect(service.isUserLoggedIn).toBeFalse();
        expect(response).toBeFalse();
    });

    it('should log in - with correct token', async () => {
        localStorageMock.setItem('token', VALID_TOKEN);
        const response = await service.isLoggedIn();
        expect(service.isUserLoggedIn).toBeTrue();
        expect(response).toBeTrue();
    });

    it('should not log in - with wrong username and password', async () => {
        const INVALID_USER_LOGIN_DATA: User = {username: 'BijanProgrammer', password: '12345', email: ''};
        const response = await service.login(INVALID_USER_LOGIN_DATA);
        expect(localStorageMock.getItem('token')).toBeFalsy();
        expect(response).toBeFalse();
    });

    it('should log in - with correct username and password', async () => {
        const response = await service.login(VALID_USER_LOGIN_DATA);
        expect(localStorageMock.getItem('token')).toEqual(VALID_TOKEN);
        expect(response).toBeTrue();
    });

    it('should sign up - with valid username and password', async () => {
        const response = await service.signUp(VALID_USER_SIGNUP_DATA);
        expect(localStorageMock.getItem('token')).toEqual(VALID_TOKEN);
        expect(response).toBeTrue();
    });

    it('should not sign up - with invalid username and password', async () => {
        const response = await service.signUp({
            username: '',
            password: '',
            email: '',
        });
        expect(localStorageMock.getItem('token')).toEqual(null);
        expect(response).toBeFalse();
    });

    it('should log out', async () => {
        localStorageMock.setItem('token', VALID_TOKEN);
        service.logout().then();
        expect(localStorageMock.getItem('token')).toBeFalsy();
    });
});

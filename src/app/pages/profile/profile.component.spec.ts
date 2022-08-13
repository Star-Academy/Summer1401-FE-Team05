import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from 'src/app/services/api.service';
import {AuthService} from 'src/app/services/auth.service';

import {ProfileComponent} from './profile.component';
import {FetchMock, VALID_TOKEN} from '../../mocks/fetch';
import {LocalStorageMock} from 'src/app/mocks/local-storage';

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;
    let authService: AuthService;
    let apiService: ApiService;
    let host: HTMLElement;
    let fetchMock: FetchMock;
    let localStorageMock: LocalStorageMock;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
        authService = TestBed.inject(AuthService);
        apiService = TestBed.inject(ApiService);

        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should log out of the page', () => {
        const logoutBtn = host.querySelector('.exit-account');
        const logoutMethodSpy = spyOn(authService, 'logout');
        //@ts-ignore
        logoutBtn?.click();
        expect(logoutMethodSpy).toHaveBeenCalled();
    });

    it('should check if the wishlist is empty for the first time', () => {
        expect(component.wishlist).toBeFalsy();
    });

    it('should check if wishlist is getting updated', async () => {
        localStorageMock.setItem('token', VALID_TOKEN);
        const response = await component.refreshWishlist();
        expect(component.wishlist).toBeTruthy();
    });
});

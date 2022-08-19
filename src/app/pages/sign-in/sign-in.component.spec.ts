import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {FetchMock} from 'src/app/mocks/fetch';
import {LocalStorageMock} from 'src/app/mocks/local-storage';
import {AuthService} from 'src/app/services/auth.service';

import {SignInComponent} from './sign-in.component';

describe('SignInComponent', () => {
    let component: SignInComponent;
    let fixture: ComponentFixture<SignInComponent>;
    let host: HTMLElement;
    let localStorageMock: LocalStorageMock;
    let fetchMock: FetchMock;
    let authService: AuthService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SignInComponent],
            imports: [FormsModule, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SignInComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;

        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));

        authService = TestBed.inject(AuthService);
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have username and password inputs', () => {
        const usernameInput = host.querySelector('[name="username"]');
        const passwordInput = host.querySelector('[name="password"]');
        expect(usernameInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
    });

    it('should handle submit with correct username and password', async () => {
        const usernameInput = host.querySelector('[name="username"]');
        const passwordInput = host.querySelector('[name="password"]');

        usernameInput?.setAttribute('value', 'BijanProgrammer');
        passwordInput?.setAttribute('value', '1234');

        const loginMethodSpy = spyOn(authService, 'login');

        component.handleSubmit();
        fixture.detectChanges();
        expect(loginMethodSpy).toHaveBeenCalled();
    });

    it('should handle submit with empty inputs', async () => {
        component.handleSubmit();

        expect(component.validity).toBeFalse();
    });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {FetchMock} from 'src/app/mocks/fetch';
import {LocalStorageMock} from 'src/app/mocks/local-storage';
import {AuthService} from 'src/app/services/auth.service';

import {SignUpComponent} from './sign-up.component';

describe('SignUpComponent', () => {
    let component: SignUpComponent;
    let fixture: ComponentFixture<SignUpComponent>;
    let host: HTMLElement;
    let localStorageMock: LocalStorageMock;
    let fetchMock: FetchMock;
    let authService: AuthService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            imports: [FormsModule, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SignUpComponent);
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
        const emailInput = host.querySelector('[name="email"]');

        expect(usernameInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
        expect(emailInput).toBeTruthy();
    });

    it('should handle submit with correct username and password', async () => {
        const usernameInput = host.querySelector('[name="username"]');
        const passwordInput = host.querySelector('[name="password"]');
        const emailInput = host.querySelector('[name="email"]');
        const firstNameInput = host.querySelector('[name="firstName"]');
        const lastNameInput = host.querySelector('[name="lastName"]');

        usernameInput?.setAttribute('value', 'SinaProgrammer');
        passwordInput?.setAttribute('value', '12345');
        emailInput?.setAttribute('value', 'sina.programmer@gmail.com');
        firstNameInput?.setAttribute('value', 'Sina');
        lastNameInput?.setAttribute('value', 'Amini');

        const signUpMethodSpy = spyOn(authService, 'signUp');
        component.handleSubmit();
        expect(signUpMethodSpy).toHaveBeenCalled();
    });

    it('should handle submit with empty inputs', async () => {
        component.handleSubmit();
        expect(component.validity).toBeFalse();
    });
});

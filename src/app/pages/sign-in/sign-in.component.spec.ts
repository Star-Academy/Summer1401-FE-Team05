import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import {SignInComponent} from './sign-in.component';

describe('SignInComponent', () => {
    let component: SignInComponent;
    let fixture: ComponentFixture<SignInComponent>;
    let host: HTMLElement;

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
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
    it('should have username and password inputs', () => {
        const usernameInput = host.querySelector('[type="text"][name="username"]');
        const passwordInput = host.querySelector('[type="password"][name="password"]');
        expect(usernameInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
    });

    it('should handle submit with correct username and password', async () => {
        const usernameInput = host.querySelector('[name="username"]');
        const passwordInput = host.querySelector('[type="password"]');

        usernameInput?.setAttribute('value', 'BijanProgrammer');
        passwordInput?.setAttribute('value', '1234');

        component.handleSubmit();
    });

    it('should handle submit with empty inputs', async () => {
        component.handleSubmit();
    });
});

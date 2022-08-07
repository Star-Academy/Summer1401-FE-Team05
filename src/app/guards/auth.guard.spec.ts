import {TestBed} from '@angular/core/testing';
import {AuthService} from '../services/auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthGuard} from './auth.guard';
import {Router} from '@angular/router';

describe('AuthGuard', () => {
    let guard: AuthGuard;
    let authService: AuthService;
    let routeMock: any = {routeConfig: {path: ''}};
    let routeStateMock: any = {snapshot: {}, url: ''};
    let routerMock = {navigateByUrl: jasmine.createSpy('navigateByUrl')};

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard, {provide: Router, useValue: routerMock}],
            imports: [HttpClientTestingModule],
        });
        guard = TestBed.inject(AuthGuard);

        authService = TestBed.inject(AuthService);
    });

    it('should not activate when user is logged in - login route', () => {
        checkRouter('sign-in', true, false);
    });

    it('should not activate when user is logged in - signup route', () => {
        checkRouter('sign-up', true, false);
    });

    it('should not activate when user is not logged in - profile route', () => {
        checkRouter('profile', false, false);
    });

    it('should activate when user is not logged in - login route', () => {
        checkRouter('sign-in', false, true);
    });

    it('should activate when user is not logged in - signup route', () => {
        checkRouter('sign-up', false, true);
    });

    it('should activate when user is logged in - profile route', () => {
        checkRouter('profile', true, true);
    });

    const checkRouter = async (url: string, isLoggedIn: boolean, result: boolean): Promise<void> => {
        spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(isLoggedIn));
        routeMock.routeConfig.path = url;

        expect(await guard.canActivate(routeMock, routeStateMock)).toEqual(result);
    };
});

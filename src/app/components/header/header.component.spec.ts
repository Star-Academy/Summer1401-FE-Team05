import {CommonModule} from '@angular/common';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have header tag', () => {
        const headerElement = host.querySelector('header');
        expect(headerElement).toBeTruthy();
    });

    it('should be closed at the first time', () => {
        const navbar = host.querySelector('.nav');
        fixture.detectChanges();
        expect(navbar?.classList.contains('open')).toBeFalse();
    });

    const states = [true, false];
    for (const state of states) {
        it('should open and close mobile navbar properly', () => {
            checkMobileNavbar(state);
        });
    }
    const checkMobileNavbar = (open: boolean): void => {
        const navbar = host.querySelector('.nav');
        component.isMobileNavOpen = open;
        fixture.detectChanges();
        expect(navbar?.classList.contains('open')).toBe(open);
    };
});

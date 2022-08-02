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
            imports: [CommonModule, RouterTestingModule],
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

    it('should open and close mobile navbar properly', () => {
        const navbar = host.querySelector('.nav');
        fixture.detectChanges();
        expect(navbar?.classList.contains('open')).toBeFalse();
    });

    it('should open and close mobile navbar properly', () => {
        const navbar = host.querySelector('.nav');
        component.isMobileNavOpen = true;
        fixture.detectChanges();
        expect(navbar?.classList.contains('open')).toBeTrue();
    });

    it('should open and close mobile navbar properly', () => {
        const navbar = host.querySelector('.nav');
        component.isMobileNavOpen = false;
        fixture.detectChanges();
        expect(navbar?.classList.contains('open')).toBeFalse();
    });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CarouselComponent} from './carousel.component';

describe('CarouselComponent', () => {
    let component: CarouselComponent;
    let fixture: ComponentFixture<CarouselComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CarouselComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have h1 tag', () => {
        const headerElement = host.querySelector('h1');
        expect(headerElement).toBeTruthy();
    });
});

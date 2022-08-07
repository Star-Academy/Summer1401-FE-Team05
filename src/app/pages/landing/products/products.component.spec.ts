import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsComponent} from './products.component';
import {cards} from './sample-data';

describe('ProductsComponent', () => {
    let component: ProductsComponent;
    let fixture: ComponentFixture<ProductsComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProductsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have equal amount of cards', () => {
        const cardElements = host.querySelectorAll('.game-card');
        expect(cardElements.length).toEqual(cards.length);
    });

    it('should a tags as wrapper for cards ', () => {
        const cardElement = host.querySelector('.game-card');
        expect(cardElement?.tagName).toEqual('A');
    });

    it('should have images alt tags', () => {
        const imageElement = host.querySelector('.game-card__img');
        expect(imageElement?.getAttribute('alt')).toBeTruthy();
    });

    it('should only have one h3 tag per card', () => {
        const titleElement = host.querySelectorAll('h3');
        expect(titleElement.length).toEqual(cards.length);
    });
});

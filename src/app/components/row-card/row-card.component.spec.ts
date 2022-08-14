import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FetchMock, VALID_GAME_ID} from 'src/app/mocks/fetch';
import {LocalStorageMock} from 'src/app/mocks/local-storage';

import {RowCardComponent} from './row-card.component';

describe('RowCardComponent', () => {
    let component: RowCardComponent;
    let fixture: ComponentFixture<RowCardComponent>;
    let localStorageMock: LocalStorageMock;
    let fetchMock: FetchMock;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RowCardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RowCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should delete item from wishlist', async () => {
        await component.deleteWishlistItem(VALID_GAME_ID);
    });
    it('should show the off percentage in wishlist', () => {
        component.cardGame = {
            priceOnSale: 18000,
            price: 19000,
        };
        fixture.detectChanges();
        component.ngOnInit();
    });
});

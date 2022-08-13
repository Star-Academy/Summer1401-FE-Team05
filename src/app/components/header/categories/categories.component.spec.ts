import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {CategoriesComponent} from './categories.component';

describe('CategoriesComponent', () => {
    let component: CategoriesComponent;
    let fixture: ComponentFixture<CategoriesComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CategoriesComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be closed at the first time', () => {
        const dropDown = host.querySelector('.drop-down-main-btn');
        fixture.detectChanges();
        expect(dropDown?.classList.contains('open')).toBeFalse();
    });

    it('should open mobile navbar properly', () => {
        const dropDown = host.querySelector('.drop-down-main-btn');
        //@ts-ignore
        dropDown?.click();
        fixture.detectChanges();
        expect(dropDown?.classList.contains('open')).toBeTrue();
    });

    it('should close mobile navbar properly', () => {
        const dropDown = host.querySelector('.drop-down-main-btn');
        component.categoryOpen = true;
        fixture.detectChanges();
        //@ts-ignore
        dropDown?.click();
        fixture.detectChanges();
        expect(dropDown?.classList.contains('open')).toBeFalse();
    });

    it('should close mobile navbar subcategory properly', () => {
        const dropDown = host.querySelector('.drop-down-main-btn');
        //@ts-ignore
        dropDown?.click();
        fixture.detectChanges();
        expect(dropDown?.classList.contains('open')).toBeTrue();
    });
});

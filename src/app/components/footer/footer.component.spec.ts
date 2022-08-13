import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterComponent} from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have footer tag', () => {
        const footerTag = host.querySelector('footer');

        expect(footerTag).toBeTruthy();
    });

    it('should have footer class', () => {
        const footerTag = host.querySelector('footer');

        expect(footerTag?.className).toEqual('footer');
    });

    // it('should have footer__note', () => {
    //     const footer__note = host.querySelector('.footer__note');
    //
    //     expect(footer__note).toBeTruthy();
    // });
});

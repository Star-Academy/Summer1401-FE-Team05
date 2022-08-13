import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {Slide} from './models/slide';
import {slides} from './slides';

interface Item {
    src: string;
}

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    @Input() images: any;

    private readonly INTERVAL_DELAY: number = 3000;

    public items: Item[] = [
        {src: 'assets/images/banners/COD-MW-II.jpg'},
        {src: 'assets/images/banners/dying-light-2-stay-human.jpg'},
        {src: 'assets/images/banners/elden-ring.webp'},
        {src: 'assets/images/banners/horizen-forbidden-west.webp'},
        {src: 'assets/images/banners/LEGO-startwars-the-skywalker-saga.jpg'},
    ];

    public activeIndex: number = 0;

    private interval!: number;

    public ngAfterViewInit(): void {
        this.resetInterval();
    }

    public ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    public changeActiveIndex(index: number): void {
        if (index < 0) index = this.items.length - 1;
        else if (index >= this.items.length) index = 0;

        this.activeIndex = index;
        this.resetInterval();
    }

    private resetInterval(): void {
        clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.changeActiveIndex(this.activeIndex + 1);
        }, this.INTERVAL_DELAY);
    }
}

import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {Slide} from './models/slide';
import {slides} from './slides';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
    @ViewChild('scrollCards') private scrollCards!: ElementRef<HTMLElement>;

    private scrollWidth: number = this.scrollCards?.nativeElement.clientWidth ?? 1200;

    private readonly INTERVAL_DELAY: number = 3000;

    private interval!: number;
    private paused: boolean = false;

    private slide(scrollTo: number): void {
        if (this.activeScroll >= slides.length && scrollTo === -1) {
            this.scrollCards.nativeElement.scrollTo(-1, 0);
            this.activeScroll = 1;
        } else if (this.activeScroll <= 1 && scrollTo === 1) {
            this.scrollCards.nativeElement.scrollTo(-1 * this.scrollWidth * slides.length, 0);
            this.activeScroll = slides.length;
        } else {
            this.scrollCards.nativeElement.scrollBy(scrollTo * this.scrollWidth, 0);
            this.activeScroll -= scrollTo;
        }
    }
    private resetInterval(): void {
        if (this.paused === false) {
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                this.slide(-1);
            }, this.INTERVAL_DELAY);
        } else {
            clearInterval(this.interval);
        }
    }
    public slides: Slide[] = slides;

    public next(): void {
        this.slide(-1);
    }
    public prev(): void {
        this.slide(+1);
    }
    public activeScroll: number = 1;

    public ngAfterViewInit(): void {
        this.resetInterval();
    }

    public ngOnDestroy(): void {
        clearInterval(this.interval);
    }
    public stopSliding(): void {
        this.paused = true;
        this.resetInterval();
    }
    public startSliding(): void {
        this.paused = false;
        this.resetInterval();
    }
}

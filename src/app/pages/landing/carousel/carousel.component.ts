import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';

interface Item {
    src: string;
    url?: string;
}

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
    @Input() public images: any;

    private readonly INTERVAL_DELAY: number = 3000;

    public items: Item[] = [
        {src: 'assets/images/banners/COD-MW-II.jpg', url: '/games/559'},
        {src: 'assets/images/banners/dying-light-2-stay-human.jpg', url: '/games/102584'},
        {src: 'assets/images/banners/elden-ring.webp', url: '/games/119133'},
        {src: 'assets/images/banners/horizen-forbidden-west.webp', url: '/games/112874'},
        {src: 'assets/images/banners/LEGO-startwars-the-skywalker-saga.jpg', url: '/games/119305'},
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

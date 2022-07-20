import {Component} from '@angular/core';

interface Card {
    title: string;
    alt: string;
    price: number;
    percentOff: number;
    imgSrc: string;
    points: number;
}

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    public cards: Card[] = [
        {
            title: 'abc',
            alt: 'image of abc',
            price: 150000,
            percentOff: 30,
            imgSrc: 'https://via.placeholder.com/300x400',
            points: 9.8,
        },
        {
            title: 'abc',
            alt: 'image of abc',
            price: 150000,
            percentOff: 30,
            imgSrc: 'https://via.placeholder.com/300x400',
            points: 9.8,
        },
        {
            title: 'abc',
            alt: 'image of abc',
            price: 150000,
            percentOff: 30,
            imgSrc: 'https://via.placeholder.com/300x400',
            points: 9.8,
        },
        {
            title: 'abc',
            alt: 'image of abc',
            price: 150000,
            percentOff: 30,
            imgSrc: 'https://via.placeholder.com/300x400',
            points: 9.8,
        },
        {
            title: 'abc',
            alt: 'image of abc',
            price: 150000,
            percentOff: 30,
            imgSrc: 'https://via.placeholder.com/300x400',
            points: 9.8,
        },
        {
            title: 'abc',
            alt: 'image of abc',
            price: 150000,
            percentOff: 30,
            imgSrc: 'https://via.placeholder.com/300x400',
            points: 9.8,
        },
        {
            title: 'abc',
            alt: 'image of abc',
            price: 150000,
            percentOff: 30,
            imgSrc: 'https://via.placeholder.com/300x400',
            points: 9.8,
        },
        {
            title: 'abc',
            alt: 'image of abc',
            price: 150000,
            percentOff: 30,
            imgSrc: 'https://via.placeholder.com/300x400',
            points: 9.8,
        },
    ];
}

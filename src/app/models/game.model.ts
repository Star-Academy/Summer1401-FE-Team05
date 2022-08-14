export interface Game {
    id: Number;
    ageRatings?: {
        id: Number;
        category: Number;
        rating: Number;
    }[];
    cover?: {
        id: string;
        width: number;
        height: number;
    };
    description?: string;
    gameModes?: {
        id: number;
        name: string;
    }[];
    genres: Genres[];
    involvedCompanies?: {
        id: number;
        developer: boolean;
        porting: boolean;
        publisher: boolean;
        supporting: boolean;
        company: {
            id: number;
            country: number;
            description: string;
            logo: {
                id: string;
                width: number;
                height: number;
            };
            name: string;
            url: string;
            websites: {
                id: number;
                category: number;
                trusted: boolean;
                url: string;
            }[];
        };
    }[];
    keywords?: {
        id: number;
        name: string;
    }[];

    name: string;
    platforms?: {
        id: number;
        name: string;
    }[];

    playerPerspectives?: {
        id: number;
        name: string;
    }[];

    price?: number;
    priceOnSale?: number;
    rating?: number;
    ratingCount?: number;
    releaseDate?: number;

    screenshots: Screenshot[];

    storyline?: string;
    summary?: string;
    themes?: {
        id: number;
        name: string;
    }[];

    videos?: {
        id: string;
        name: string;
    }[];

    websites?: {
        id: number;
        category: number;
        trusted: boolean;
        url: string;
    }[];
}

interface Screenshot {
    id: string;
    width?: number;
    height?: number;
}

interface Genres {
    id: number;
    name: string;
}
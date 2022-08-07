import {Injectable} from '@angular/core';

import {Category} from '../model/category';

@Injectable({
    providedIn: 'root',
})
export class CategoryFetchDataService {
    private data: Category[] = [
        {
            title: 'Genre',
            subCategories: [
                {
                    id: 2,
                    name: 'Point-and-click',
                },
                {
                    id: 4,
                    name: 'Fighting',
                },
                {
                    id: 5,
                    name: 'Shooter',
                },
                {
                    id: 7,
                    name: 'Music',
                },
                {
                    id: 8,
                    name: 'Platform',
                },
                {
                    id: 9,
                    name: 'Puzzle',
                },
                {
                    id: 10,
                    name: 'Racing',
                },
                {
                    id: 11,
                    name: 'Real Time Strategy (RTS)',
                },
                {
                    id: 12,
                    name: 'Role-playing (RPG)',
                },
                {
                    id: 13,
                    name: 'Simulator',
                },
                {
                    id: 14,
                    name: 'Sport',
                },
                {
                    id: 15,
                    name: 'Strategy',
                },
                {
                    id: 16,
                    name: 'Turn-based strategy (TBS)',
                },
                {
                    id: 24,
                    name: 'Tactical',
                },
                {
                    id: 25,
                    name: "Hack and slash/Beat 'em up",
                },
                {
                    id: 26,
                    name: 'Quiz/Trivia',
                },
                {
                    id: 30,
                    name: 'Pinball',
                },
                {
                    id: 31,
                    name: 'Adventure',
                },
                {
                    id: 32,
                    name: 'Indie',
                },
                {
                    id: 33,
                    name: 'Arcade',
                },
                {
                    id: 34,
                    name: 'Visual Novel',
                },
                {
                    id: 35,
                    name: 'Card & Board Game',
                },
                {
                    id: 36,
                    name: 'MOBA',
                },
            ],
        },
        {
            title: 'theme',
            subCategories: [
                {
                    id: 1,
                    name: 'Action',
                },
                {
                    id: 17,
                    name: 'Fantasy',
                },
                {
                    id: 18,
                    name: 'Science fiction',
                },
                {
                    id: 19,
                    name: 'Horror',
                },
                {
                    id: 20,
                    name: 'Thriller',
                },
                {
                    id: 21,
                    name: 'Survival',
                },
                {
                    id: 22,
                    name: 'Historical',
                },
                {
                    id: 23,
                    name: 'Stealth',
                },
                {
                    id: 27,
                    name: 'Comedy',
                },
                {
                    id: 28,
                    name: 'Business',
                },
                {
                    id: 31,
                    name: 'Drama',
                },
                {
                    id: 32,
                    name: 'Non-fiction',
                },
                {
                    id: 33,
                    name: 'Sandbox',
                },
                {
                    id: 34,
                    name: 'Educational',
                },
                {
                    id: 35,
                    name: 'Kids',
                },
                {
                    id: 38,
                    name: 'Open world',
                },
                {
                    id: 39,
                    name: 'Warfare',
                },
                {
                    id: 40,
                    name: 'Party',
                },
                {
                    id: 41,
                    name: '4X (explore, expand, exploit, and exterminate)',
                },
                {
                    id: 42,
                    name: 'Erotic',
                },
                {
                    id: 43,
                    name: 'Mystery',
                },
                {
                    id: 44,
                    name: 'Romance',
                },
            ],
        },
        {
            title: 'Game Mode',
            subCategories: [
                {
                    id: 1,
                    name: 'Single player',
                },
                {
                    id: 2,
                    name: 'Multiplayer',
                },
                {
                    id: 3,
                    name: 'Co-operative',
                },
                {
                    id: 4,
                    name: 'Split screen',
                },
                {
                    id: 5,
                    name: 'Massively Multiplayer Online (MMO)',
                },
                {
                    id: 6,
                    name: 'Battle Royale',
                },
            ],
        },
        {
            title: 'Player Perspective',
            subCategories: [
                {
                    id: 1,
                    name: 'First person',
                },
                {
                    id: 2,
                    name: 'Third person',
                },
                {
                    id: 3,
                    name: 'Bird view / Isometric',
                },
                {
                    id: 4,
                    name: 'Side view',
                },
                {
                    id: 5,
                    name: 'Text',
                },
                {
                    id: 6,
                    name: 'Auditory',
                },
                {
                    id: 7,
                    name: 'Virtual Reality',
                },
            ],
        },
    ];

    public fetchData(): Category[] {
        return this.data;
    }
}

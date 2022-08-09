import {Injectable} from '@angular/core';
import {Category} from '../../../../components/header/categories/model/category';

@Injectable({
    providedIn: 'root',
})
export class FilterDataService {
    private filterData: Category[] = [
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
        {
            title: 'Platform',
            subCategories: [
                {
                    id: 1,
                    name: 'PC',
                },
                {
                    id: 2,
                    name: 'Playstation',
                },
                {
                    id: 3,
                    name: 'Xbox',
                },
                {
                    id: 4,
                    name: 'Mobile',
                },
            ],
        },
    ];

    public fetchFilterData(): Category[] {
        return this.filterData;
    }
}

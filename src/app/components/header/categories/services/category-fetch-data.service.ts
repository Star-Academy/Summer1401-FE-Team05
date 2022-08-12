import {Injectable} from '@angular/core';

import {Category} from '../model/category';

@Injectable({
    providedIn: 'root',
})
export class CategoryFetchDataService {
    private data: Category[] = [
        {
            title: 'ژانر ها',
            searchName: 'genres',
            subCategories: [
                {
                    id: 2,
                    name: 'نشانه گیری',
                },
                {
                    id: 4,
                    name: 'جنگی',
                },
                {
                    id: 5,
                    name: 'شوتر',
                },
                {
                    id: 7,
                    name: 'موزیکال',
                },
                {
                    id: 8,
                    name: 'پلتفرم',
                },
                {
                    id: 9,
                    name: 'پازل',
                },
                {
                    id: 10,
                    name: 'مسابقه',
                },
                {
                    id: 11,
                    name: 'استراتژی لحظه ای (RTS)',
                },
                {
                    id: 12,
                    name: 'نقش آفرینی (RPG)',
                },
                {
                    id: 13,
                    name: 'شبیه سازی',
                },
                {
                    id: 14,
                    name: 'ورزش',
                },
                {
                    id: 15,
                    name: 'استراتژی',
                },
                {
                    id: 16,
                    name: 'استراتژی نوبتی (TBS)',
                },
                {
                    id: 24,
                    name: 'تاکتیک',
                },
                {
                    id: 25,
                    name: 'هک و اسلش',
                },
                {
                    id: 26,
                    name: 'کوییز',
                },
                {
                    id: 30,
                    name: 'پین بال',
                },
                {
                    id: 31,
                    name: 'ماجرایی',
                },
                {
                    id: 32,
                    name: 'مستقل',
                },
                {
                    id: 33,
                    name: 'آرکید',
                },
                {
                    id: 34,
                    name: 'داستانی',
                },
                {
                    id: 35,
                    name: 'کارت و بازی رومیزی',
                },
                {
                    id: 36,
                    name: 'موبا',
                },
            ],
        },
        {
            title: 'تم',
            searchName: 'themes',
            subCategories: [
                {
                    id: 1,
                    name: 'اکشن',
                },
                {
                    id: 17,
                    name: 'فانتزی',
                },
                {
                    id: 18,
                    name: 'علمی تخیلی',
                },
                {
                    id: 19,
                    name: 'خشن',
                },
                {
                    id: 20,
                    name: 'دلهره آور',
                },
                {
                    id: 21,
                    name: 'بقا',
                },
                {
                    id: 22,
                    name: 'تاریخ',
                },
                {
                    id: 23,
                    name: 'مخفی کاری',
                },
                {
                    id: 27,
                    name: 'کمدی',
                },
                {
                    id: 28,
                    name: 'تجارت',
                },
                {
                    id: 31,
                    name: 'دراما',
                },
                {
                    id: 32,
                    name: 'غیر تخیلی',
                },
                {
                    id: 33,
                    name: 'سندباکس',
                },
                {
                    id: 34,
                    name: 'آموزش',
                },
                {
                    id: 35,
                    name: 'بچگانه',
                },
                {
                    id: 38,
                    name: 'جهان باز',
                },
                {
                    id: 39,
                    name: 'جنگی',
                },
                {
                    id: 40,
                    name: 'جشن',
                },
                {
                    id: 41,
                    name: '4X (explore, expand, exploit, and exterminate)',
                },
                {
                    id: 42,
                    name: 'اروتیک',
                },
                {
                    id: 43,
                    name: 'سحرآمیز',
                },
                {
                    id: 44,
                    name: 'عاشقانه',
                },
            ],
        },
        {
            title: 'سبک بازی',
            searchName: 'gameModes',
            subCategories: [
                {
                    id: 1,
                    name: 'تک نفره',
                },
                {
                    id: 2,
                    name: 'چند نفره',
                },
                {
                    id: 3,
                    name: 'تعونی',
                },
                {
                    id: 4,
                    name: 'چند صفحه ای',
                },
                {
                    id: 5,
                    name: 'بازی پیچیده آنلاین (MMO)',
                },
                {
                    id: 6,
                    name: 'بتل رویال',
                },
            ],
        },
        {
            title: 'دیدگاه بازیکن',
            searchName: 'playerPerspectives',
            subCategories: [
                {
                    id: 1,
                    name: 'اول شخص',
                },
                {
                    id: 2,
                    name: 'سوم شخص',
                },
                {
                    id: 3,
                    name: 'دید پرنده',
                },
                {
                    id: 4,
                    name: 'دید از کنار',
                },
                {
                    id: 5,
                    name: 'متن',
                },
                {
                    id: 6,
                    name: 'شنوایی',
                },
                {
                    id: 7,
                    name: 'حقیقت مجازی',
                },
            ],
        },
    ];

    public fetchData(): Category[] {
        return this.data;
    }
}

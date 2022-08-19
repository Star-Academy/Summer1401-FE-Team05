import {Injectable} from '@angular/core';
import {Category} from '../components/header/categories/model/category';

@Injectable({
    providedIn: 'root',
})
export class FetchCategoriesDataService {
    private data: Category[] = [
        {
            title: 'ژانر ها',
            searchName: 'genres',
            subCategories: [
                {
                    id: 2,
                    name: 'نشانه گیری',
                    isChecked: false,
                },
                {
                    id: 4,
                    name: 'جنگی',
                    isChecked: false,
                },
                {
                    id: 5,
                    name: 'شوتر',
                    isChecked: false,
                },
                {
                    id: 7,
                    name: 'موزیکال',
                    isChecked: false,
                },
                {
                    id: 8,
                    name: 'پلتفرم',
                    isChecked: false,
                },
                {
                    id: 9,
                    name: 'پازل',
                    isChecked: false,
                },
                {
                    id: 10,
                    name: 'مسابقه',
                    isChecked: false,
                },
                {
                    id: 11,
                    name: 'استراتژی لحظه ای (RTS)',
                    isChecked: false,
                },
                {
                    id: 12,
                    name: 'نقش آفرینی (RPG)',
                    isChecked: false,
                },
                {
                    id: 13,
                    name: 'شبیه سازی',
                    isChecked: false,
                },
                {
                    id: 14,
                    name: 'ورزش',
                    isChecked: false,
                },
                {
                    id: 15,
                    name: 'استراتژی',
                    isChecked: false,
                },
                {
                    id: 16,
                    name: 'استراتژی نوبتی (TBS)',
                    isChecked: false,
                },
                {
                    id: 24,
                    name: 'تاکتیک',
                    isChecked: false,
                },
                {
                    id: 25,
                    name: 'هک و اسلش',
                    isChecked: false,
                },
                {
                    id: 26,
                    name: 'کوییز',
                    isChecked: false,
                },
                {
                    id: 30,
                    name: 'پین بال',
                    isChecked: false,
                },
                {
                    id: 31,
                    name: 'ماجرایی',
                    isChecked: false,
                },
                {
                    id: 32,
                    name: 'مستقل',
                    isChecked: false,
                },
                {
                    id: 33,
                    name: 'آرکید',
                    isChecked: false,
                },
                {
                    id: 34,
                    name: 'داستانی',
                    isChecked: false,
                },
                {
                    id: 35,
                    name: 'کارت و بازی رومیزی',
                    isChecked: false,
                },
                {
                    id: 36,
                    name: 'موبا',
                    isChecked: false,
                },
            ],
        },
        {
            title: 'تم ها',
            searchName: 'themes',
            subCategories: [
                {
                    id: 1,
                    name: 'اکشن',
                    isChecked: false,
                },
                {
                    id: 17,
                    name: 'فانتزی',
                    isChecked: false,
                },
                {
                    id: 18,
                    name: 'علمی تخیلی',
                    isChecked: false,
                },
                {
                    id: 19,
                    name: 'خشن',
                    isChecked: false,
                },
                {
                    id: 20,
                    name: 'دلهره آور',
                    isChecked: false,
                },
                {
                    id: 21,
                    name: 'بقا',
                    isChecked: false,
                },
                {
                    id: 22,
                    name: 'تاریخ',
                    isChecked: false,
                },
                {
                    id: 23,
                    name: 'مخفی کاری',
                    isChecked: false,
                },
                {
                    id: 27,
                    name: 'کمدی',
                    isChecked: false,
                },
                {
                    id: 28,
                    name: 'تجارت',
                    isChecked: false,
                },
                {
                    id: 31,
                    name: 'دراما',
                    isChecked: false,
                },
                {
                    id: 32,
                    name: 'غیر تخیلی',
                    isChecked: false,
                },
                {
                    id: 33,
                    name: 'سندباکس',
                    isChecked: false,
                },
                {
                    id: 34,
                    name: 'آموزش',
                    isChecked: false,
                },
                {
                    id: 35,
                    name: 'بچگانه',
                    isChecked: false,
                },
                {
                    id: 38,
                    name: 'جهان باز',
                    isChecked: false,
                },
                {
                    id: 39,
                    name: 'جنگی',
                    isChecked: false,
                },
                {
                    id: 40,
                    name: 'جشن',
                    isChecked: false,
                },
                {
                    id: 41,
                    name: '4X',
                    isChecked: false,
                },
                {
                    id: 42,
                    name: 'اروتیک',
                    isChecked: false,
                },
                {
                    id: 43,
                    name: 'سحرآمیز',
                    isChecked: false,
                },
                {
                    id: 44,
                    name: 'عاشقانه',
                    isChecked: false,
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
                    isChecked: false,
                },
                {
                    id: 2,
                    name: 'چند نفره',
                    isChecked: false,
                },
                {
                    id: 3,
                    name: 'تعونی',
                    isChecked: false,
                },
                {
                    id: 4,
                    name: 'چند صفحه ای',
                    isChecked: false,
                },
                {
                    id: 5,
                    name: 'بازی پیچیده آنلاین (MMO)',
                    isChecked: false,
                },
                {
                    id: 6,
                    name: 'بتل رویال',
                    isChecked: false,
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
                    isChecked: false,
                },
                {
                    id: 2,
                    name: 'سوم شخص',
                    isChecked: false,
                },
                {
                    id: 3,
                    name: 'دید پرنده',
                    isChecked: false,
                },
                {
                    id: 4,
                    name: 'دید از کنار',
                    isChecked: false,
                },
                {
                    id: 5,
                    name: 'متن',
                    isChecked: false,
                },
                {
                    id: 6,
                    name: 'شنوایی',
                    isChecked: false,
                },
                {
                    id: 7,
                    name: 'حقیقت مجازی',
                    isChecked: false,
                },
            ],
        },
    ];

    public fetchData(): Category[] {
        return this.data;
    }
}

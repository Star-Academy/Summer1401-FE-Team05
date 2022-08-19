interface subCategory {
    id: number;
    name: string;
    isChecked?: boolean;
}

export interface Category {
    title: string;
    searchName: string;
    subCategories: subCategory[];
}

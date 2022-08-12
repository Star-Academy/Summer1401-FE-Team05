interface subCategory {
    id: number;
    name: string;
}

export interface Category {
    title: string;
    searchName: string;
    subCategories: subCategory[];
}

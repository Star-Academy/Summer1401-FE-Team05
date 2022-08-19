export interface SearchQueryParamsModel {
    searchText: string;
    category: enumCategory | null;
    subCategory: number | null;
}

enum enumCategory {
    genres = 'genres',
    themes = 'themes',
    gameModes = 'gameModes',
    playerPerspectives = 'playerPerspectives',
}

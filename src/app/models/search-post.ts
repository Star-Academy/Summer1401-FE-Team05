export interface SearchPost {
    searchPhrase: string;
    pageSize: number;
    offset: number;
    sort: number;
    filters: filter;
}

interface filter {
    gameModes: number[];
    genres: number[];
    keywords: number[];
    platforms: number[];
    playerPerspectives: number[];
    themes: number[];
    minimumRating: number;
    maximumRating: number;
}

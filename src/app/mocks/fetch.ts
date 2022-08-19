import {API_USER_AUTH, API_USER_LOGIN, API_USER_REGISTER, API_WISHLIST_REMOVE, API_WISHLIST_ALL} from '../utils/urls';
import {User} from '../models/user.model';
import {gameObject} from './gameRespons';

export const VALID_TOKEN: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImlhdCI6MTY1ODg4Mjc3Mn0._eFaFDUrI4JL5NS-d6f0J0dTgTyu51oc6AyoS7qHn0U';

export const VALID_USER_LOGIN_DATA: User = {
    username: 'BijanProgrammer',
    password: '1234',
    email: '',
};
export const VALID_USER_SIGNUP_DATA: User = {
    username: 'SinaProgrammer',
    password: '12345',
    email: 'sina.programmer@gmail.com',
};
export const VALID_GAME_ID: number = 25015;

export class FetchMock {
    private static get tokenObjectResponse(): Response {
        return new Response(JSON.stringify({id: 23, token: VALID_TOKEN}), {status: 200});
    }
    private static get gamesResponse(): Response {
        return new Response(JSON.stringify({games: []}));
    }

    private static get userResponse(): Response {
        return new Response(
            JSON.stringify({
                user: {
                    id: 23,
                    username: 'BijanProgrammer',
                    email: 'bijaneisapour@gmail.com',
                    firstName: 'بیژن',
                    lastName: 'عیسی پور',
                },
            }),
            {status: 200}
        );
    }

    private static get errorResponse(): Response {
        return new Response(JSON.stringify({message: '', trace: ''}), {status: 500});
    }

    private static isEqual(a: any, b: any): boolean {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    public async fetch(url: RequestInfo, init?: RequestInit): Promise<Response> {
        if (!init || init.method === 'get') {
            if (url.toString().endsWith('23')) return FetchMock.userResponse;

            if (url.toString().endsWith(VALID_GAME_ID.toString()))
                return new Response(JSON.stringify(gameObject), {status: 200});
        } else if (init && init.body && init.method === 'post') {
            const body = JSON.parse(init.body as any);

            if (url === API_USER_AUTH && body.token === VALID_TOKEN) return FetchMock.tokenObjectResponse;

            if (url === API_USER_LOGIN && FetchMock.isEqual(body, VALID_USER_LOGIN_DATA))
                return FetchMock.tokenObjectResponse;

            if (url === API_USER_REGISTER && FetchMock.isEqual(body, VALID_USER_SIGNUP_DATA))
                return FetchMock.tokenObjectResponse;

            if (url === API_WISHLIST_ALL && body.token === VALID_TOKEN) {
                return FetchMock.gamesResponse;
            }
        } else if (init && init.body && init.method === 'delete') {
            const body = JSON.parse(init.body as any);
            if (url === API_WISHLIST_REMOVE && body.token === VALID_TOKEN && body.id === VALID_GAME_ID)
                return FetchMock.tokenObjectResponse;
        }

        return FetchMock.errorResponse;
    }
}

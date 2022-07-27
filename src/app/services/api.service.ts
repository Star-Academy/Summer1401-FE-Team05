import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor() {}

    public async post<T>(url: string, body: any = '', init: Partial<RequestInit> = {}): Promise<T | null> {
        const options = {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
            ...init,
        };

        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok) return data as T;

        return null;
    }
}

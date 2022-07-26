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

        if (response.status === 200 || response.status === 201) return data as T;

        console.log(data);
        return null;
    }
}

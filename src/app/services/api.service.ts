import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public async postRequest<T>(url: string, body: any = '', init: Partial<RequestInit> = {}): Promise<T | null> {
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

    public async getRequest<T>(url: string, init: Partial<RequestInit> = {}): Promise<T | null> {
        const option = {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
            ...init,
        };

        const response = await fetch(url, option);
        const data = await response.json();

        if (response.ok) return data as T;
        return null;
    }

    public async deleteRequest<T>(url: string, body: any = '', init: Partial<RequestInit> = {}): Promise<T | null> {
        const option = {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
            ...init,
        };

        const response = await fetch(url, option);

        if (response.ok) console.log('ok');
        return null;
    }
}

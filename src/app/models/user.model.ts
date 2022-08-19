export interface User {
    firstName?: string;
    lastName?: string;
    username: string;
    password: string;
    email: string;
    phone?: string;
    gender?: boolean;
    dateOfBirth?: string;
    avatar?: string;
}
export interface UserLoginData {
    username: string;
    password: string;
}

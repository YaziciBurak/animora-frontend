export interface LoginFormData {
    usernameOrEmail: string;
    password: string;
}

export interface RegisterFormData {
    username: string;
    email: string;
    password: string;
    confirmPassword?: string;
}
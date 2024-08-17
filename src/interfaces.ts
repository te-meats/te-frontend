export interface UserConfig {
    username: String,
    email: String,
}

export interface LoginConfig {
    username: String,
    password: String,
}

export interface Auth {
    token: string
}

export interface AuthState {
    pending: boolean,
    error: String,
}

export interface UserConfig {
    username: string,
    email: string,
}

export interface LoginConfig {
    username: string,
    password: string,
}

export interface Auth {
    token: string,
}

export interface UserState {
    id: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
}

export interface AuthState {
    users: Array<UserState>
    pending: boolean,
    error: string,
}

export interface CreateUserConfig {
    username: string,
    password: string,
}

export interface UserFormData {
    userConfig: CreateUserConfig,
    setUserConfig: React.Dispatch<React.SetStateAction<CreateUserConfig>>,
}
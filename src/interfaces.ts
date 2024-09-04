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

export interface Customer {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
}

export interface CreateCustomerConfig {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
}

export interface UpdateCustomerConfig {
    id: string,
    first_name?: string,
    last_name?: string,
    email?: string,
    phone?: string,
}

export interface CustomerState {
    customers: Array<Customer>,
    pending: boolean,
    error: string,
}

export interface UserState {
    id: string,
    username: string,
    password: string, 
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

export interface UpdateUserConfig {
    id: string,
    username?: string,
    first_name?: string,
    last_name?: string,
    email?: string,
    phone_number?: string,
}

export interface UpdateUserPassword {
    id: string,
    password: string,
}

export interface DeleteConfig {
    id: string,
}

export interface UserFormData {
    userConfig: CreateUserConfig,
    setUserConfig: React.Dispatch<React.SetStateAction<CreateUserConfig>>,
}
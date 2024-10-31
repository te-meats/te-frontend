import { ProcessedEvent } from "@aldabil/react-scheduler/types";

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

export interface SchedulerState {
    events: Array<ProcessedEvent>,
    pending: boolean,
    error: string,
}

export interface CreateSchedulerEventConfig {
    title: string,
    start: Date,
    end: Date,
}

export interface UpdateSchedulerEventConfig {
    id: string,
    title?: string,
    start?: Date,
    end?: Date,
}

export interface WeightStation {
    live_weight: number,
}

export interface Producer {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
}

export interface Customer {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
}

export interface CreateProducerConfig {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
}

export interface UpdateProducerConfig {
    id: string,
    first_name?: string,
    last_name?: string,
    email?: string,
    phone?: string,
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

export interface WeightStationState {
    weightStation: WeightStation,
    pending: boolean,
    error: string,
}

export interface ProducerState {
    producers: Array<Producer>,
    pending: boolean,
    error: string,
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

export interface PrepOption {
    value: string
    selectedQuantityIndex: number
    units: Array<string>
}

export interface CutOption {
    value: string
    selectedPrepOptionIndex: number
    prepTypes: Array<PrepOption>
}

export interface Cut {
    value: string
    selectedCutTypeIndex: string
    cutTypes: Array<CutOption>
}

export interface PrimalType {
    value: string
    cuts: Array<Cut>
}


export interface UserFormData {
    userConfig: CreateUserConfig,
    setUserConfig: React.Dispatch<React.SetStateAction<CreateUserConfig>>,
}
export interface User {
    id: number;
    name: string;
    email: string;
    status: string;
    image?: string;
    email_verified_at?: string;
}

export interface Vendor {
    id: number;
    name: string;
    description: string;
    logo: string;
    user: User;
    products: Product[];
}
export interface Product {
    id: number;
    vendor: Vendor;
    name: string;
    description: string;
    price: number;
    count: number;
    image: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    products: Product[];
};

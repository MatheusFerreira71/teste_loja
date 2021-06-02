export interface CatDropdown {
    id: string;
    name: string;
}

export interface Category extends CatDropdown {
    bankslip_discount: number;
    created_at: Date;
    updated_at: Date;
    product: Product[];
}

export interface Product {
    id: string;
    name: string;
    stars: number;
    price: string;
    promotional_price: string;
    category_id: string;
    created_at: Date;
    updated_at: Date;
    images: Image[];
}

export interface Image {
    id: string;
    path: string;
}

export interface ProductListProps {
    title?: string;
    products: Product[];
}

export interface ProductItemProps {
    product: Product;
}
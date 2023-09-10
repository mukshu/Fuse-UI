export interface ContractsProduct
{
    id: string;
    category?: string;
    name: string;
    description?: string;
    tags?: string[];
    sku?: string | null;
    barcode?: string | null;
    brand?: string | null;
    vendor: string | null;
    stock: number;
    reserved: number;
    cost: number;
    basePrice: number;
    taxPercent: number;
    price: number;
    weight: number;
    thumbnail: string;
    images: string[];
    active: boolean;
}

export interface ContractsPagination
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

export interface ContractsCategory
{
    id: string;
    parentId: string;
    name: string;
    slug: string;
}

export interface ContractsBrand
{
    id: string;
    name: string;
    slug: string;
}

export interface ContractsTag
{
    id?: string;
    title?: string;
}

export interface ContractsVendor
{
    id: string;
    name: string;
    slug: string;
}

interface Franchise {
    address?: string,
    city_id?: number,
    created_at?: Date,
    description?: string,
    id?: number,
    image_thumbnail?: string,
    image_url?: string,
    name?: string,
    outlet_count?: number,
    outlet_name?: string,
    price?: number,
    updated_at?: Date,
    saved?: number,
    savedCompanyId: number
}

export type { Franchise }

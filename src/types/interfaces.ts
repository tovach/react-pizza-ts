export interface SortOption {
    name: string,
    value: string,
    order: string,
}

export interface PizzaItem {
    id: number;
    rating: number;
    title: string;
    description: string;
    category: string[];
    img: string;
    price: number;
    dough: Dough[];
    size: Size[];
}

interface Dough {
    value: string;
    availability: boolean;
}

interface Size {
    value: string;
    availability: boolean;
}

export interface PizzaItemCart extends Omit<PizzaItem, 'dough'|'size'> {
    quantity: number;
    dough: string;
    size: string;
}




export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export type Order = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    },
    quantity: number
}

export type ProductsContextType = {
    products: ProductType[],
    orders: Order[],
    handleAddToBasket: (product: ProductType) => void,
    handleIncr: (id: number) => void,
    handleDecr: (id: number) => void,
    handleDelete: (id: number) => void,
    totalPrice: (orders: Order[]) => number
};

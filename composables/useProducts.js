import products from '@/data/products.json';

export const useProducts = () => {
    return {
        products,
    }
}

export const useProduct = (id) => {
    console.log('userproduct')
    return products.find((product) => {
        return product.id == id;
    });
}
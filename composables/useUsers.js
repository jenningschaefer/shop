import products from '@/data/users.json';

export const useUser = (id) => {
    console.log('useAddress')
    return user.find((user) => {
        return user.id == id;
    });
}
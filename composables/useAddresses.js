import addresses from '@/data/addresses.json';

export const useAddress = (id) => {
    console.log('useAddress')
    return addresses.find((address) => {
        return address.id == id;
    });
}
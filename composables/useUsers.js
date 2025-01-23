import users from '@/data/users.json';

export const useUser = (id) => {
    console.log('useAddress')
    return users.find((user) => {
        return user.id == id;
    });
}
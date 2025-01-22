export const useUtilities = () => {
    const formatDate = (date) => {
        return `${date.substring(6, 8)}.${date.substring(4, 6)}.${date.substring(0, 4)}` 
    }

    return {
        formatDate,
    }
}
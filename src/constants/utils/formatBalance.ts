// Helper function to format numbers in 'k' format
export const formatBalance = (balance: number) => {
    if (balance >= 1000) {
        return `${(balance / 1000).toFixed(1)}k`;
    }
    return balance.toString();
}
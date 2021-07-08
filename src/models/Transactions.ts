export interface ITransaction {
    id: string;
    card: string;
    amount: number;
    status: string;
    merchant: string;
    category: string;
    created_at: number;
}
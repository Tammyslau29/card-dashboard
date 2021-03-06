export const mockCardInformation = {
    id: "12345abc-12345abc",
    user:"123abc-456def",
    number: 321,
    last_four: 4321,
    spending_limit: 8000
}

export const mockTransactions = [
    {
        id: "12345",
        card: "12345abc-12345abc",
        amount: 80.20,
        status: "pending",
        merchant: "Albertsons",
        category: "Grocery",
        created_at: 1625660349
    },
    {
        id: "12345",
        card: "12345abc-12345abc",
        amount: 250.10,
        status: "approved",
        merchant: "VW Auto",
        category: "Automotive",
        created_at: 1625141949
    },
    {
        id: "12345",
        card: "12345abc-12345abc",
        amount: 1.00,
        status: "declined",
        merchant: "JP Morgan Chase",
        category: "ATMs",
        created_at: 1625055549
    },
    {
        id: "12345",
        card: "12345abc-12345abc",
        amount: 12.65,
        status: "approved",
        merchant: "Whole Foods",
        category: "Grocery",
        created_at: 1625055549
    },
    {
        id: "12345",
        card: "12345abc-12345abc",
        amount: 0.90,
        status: "approved",
        merchant: "JP Morgan Chase",
        category: "ATMs",
        created_at: 1624970496
    },
    {
        id: "12345",
        card: "12345abc-12345abc",
        amount: 46.90,
        status: "approved",
        merchant: "Cheesecake Factory",
        category: "Restaurant",
        created_at: 1624884096
    }
]
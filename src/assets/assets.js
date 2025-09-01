import trophy from "./trophy.png";
import coinBaseLogo from "./coinBaseLogo.png";

export const assets = {
  trophy,
  coinBaseLogo,
};

export const userOverviewCardData = [
  {
    id: 1,
    title: "Total Number Of Transaction",
    percentage: "25.9%",
    Completion: 70
  },
  {
    id: 2,
    title: "Total Number Of Trade",
    percentage: "11.9%",
    Completion: 50
  },
  {
    id: 3,
    title: "Market Rate Value",
    percentage: "11.9%",
    Completion: 90
  },
]
export const userConversionData = [
        {
            id: 1,
            title: "iTunes Card",
            cards: [
                {
                    id: 1,
                    type: "USA Physical",
                    price: "N400.00"
                },
                {
                    id: 2,
                    type: "USA E-Code card",
                    price: "N400.00"
                },
                {
                    id: 3,
                    type: "UK Physical card",
                    price: "N400.00"
                },
                {
                    id: 4,
                    type: "UK E-Code card",
                    price: "N400.00"
                }
            ]
        },
        {
            id: 2,
            title: "Amazon Card",
            cards: [
                {
                    id: 1,
                    type: "USA Physical",
                    price: "N400.00"
                },
                {
                    id: 2,
                    type: "USA E-Code card",
                    price: "N400.00"
                },
                {
                    id: 3,
                    type: "UK Physical card",
                    price: "N400.00"
                },
                {
                    id: 4,
                    type: "UK E-Code card",
                    price: "N400.00"
                }
            ]
        },
        {
            id: 3,
            title: "Bitcoin",
            cards: [
                {
                    id: 1,
                    type: "Bitcoin BTC",
                    price: "N400.00"
                },
                {
                    id: 2,
                    type: "Bitcoin BTC",
                    price: "N400.00"
                },
                {
                    id: 3,
                    type: "Bitcoin BTC",
                    price: "N400.00"
                },
                {
                    id: 4,
                    type: "Bitcoin BTC",
                    price: "N400.00"
                }
            ]
        }
    ]


export const userTransactions = [
    {
        id: 1,
        date: "14/01/2019",
        transactionId: 12345678,
        type: "B",
        name: "Bitcoin",
        value: 100,
        return: 18000,
        status: "completed",
        action: "...."
    },
    {
        id: 2,
        date: "14/01/2019",
        transactionId: 12345678,
        type: "A",
        name: "Amazon",
        value: 100,
        return: 18000,
        status: "failed",
        action: "...."
    },
    {
        id: 3,
        date: "14/01/2019",
        transactionId: 12345678,
        type: "B",
        name: "Bitcoin",
        value: 100,
        return: 18000,
        status: "in progress",
        action: "...."
    },
    {
        id: 4,
        date: "14/01/2019",
        transactionId: 12345678,
        type: "B",
        name: "Bitcoin",
        value: 100,
        return: 18000,
        status: "completed",
        action: "...."
    }
]    
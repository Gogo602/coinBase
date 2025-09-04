import trophy from "./trophy.png";
import coinBaseLogo from "./coinBaseLogo.png";
import Vector from './Vector.png'
import Element01 from './Element01.png'
import Element02 from './Element02.png'
import Element03 from './Element03.png'
import Element04 from './Element04.png'
import admintrans from "./admintrans.png";
import stem from "./stem.png";
import others from "./others.png";
import googleplay from "./googleplay.png";
import itunes from "./itunes.png";
import amazon from "./amazon.png";

export const assets = {
    trophy,
    coinBaseLogo,
    Vector,
    Element01,
    Element02, 
    Element03,  
    Element04,
    admintrans,
    stem,
    others,
    googleplay,
    itunes,
    amazon
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

export const Users = [
    {
        id: 1,
        status: "Active",
        username: 'Raman Ridwan',
        email: "Ramonridwan@protonmail.com"
    },
    {
        id: 2,
        status: "Down",
        username: 'Raman Ridwan',
        email: "Ramonridwan@protonmail.com"
    },
    {
        id: 3,
        status: "Active",
        username: 'Raman Ridwan',
        email: "Ramonridwan@protonmail.com"
    },
    {
        id: 4,
        status: "Pending",
        username: 'Raman Ridwan',
        email: "Ramonridwan@protonmail.com"
    },
    {
        id: 5,
        status: "Down",
        username: 'Raman Ridwan',
        email: "Ramonridwan@protonmail.com"
    }
]

export const Agents = [
    {
        id: 1,
        status: "Active",
        username: 'Quadri Lawal',
        email: "Quaderilawal@protonmail.com"
    },
    {
        id: 2,
        status: "Active",
        username: 'Quadri Lawal',
        email: "Quaderilawal@protonmail.com"
    },
    {
        id: 3,
        status: "Active",
        username: 'Quadri Lawal',
        email: "Quaderilawal@protonmail.com"
    },
    {
        id: 4,
        status: "Active",
        username: 'Quadri Lawal',
        email: "Quaderilawal@protonmail.com"
    },
    {
        id: 5,
        status: "Active",
        username: 'Quadri Lawal',
        email: "Quaderilawal@protonmail.com"
    }
]
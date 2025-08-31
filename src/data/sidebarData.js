import { FaCog, FaEye, FaWallet } from 'react-icons/fa';
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";

export const sidebarData = {
    user: [
        { to: '/user', label: 'Overview', icon: FaEye },
        { to: '/user/trade', label: 'Trade', icon: HiOutlineChatAlt2 },
        { to: '/user/wallet', label: 'Wallet', icon: HiOutlineChatAlt2 },
        { to: '/user/transactions', label: 'Transactions', icon: HiOutlineChatAlt2 },
        { to: '/user/statistics', label: 'Statistics', icon: HiOutlineChatAlt2 },
        { to: '/user/setting', label: 'Settings', icon: HiOutlineChatAlt2 },
    ],
    agent: [
        { to: '/agent', label: 'Overview', icon: FaEye },
        { to: '/agent/user', label: 'User', icon: FaEye },
        { to: '/agent/trade', label: 'Trade', icon: HiOutlineChatAlt2 },
        { to: '/agent/wallet', label: 'Wallet', icon: FaWallet },
        { to: '/agent/transactions', label: 'Transactions', icon: AiOutlineTransaction },
        { to: '/agent/statistics', label: 'Statistics', icon: BiBarChart },
        { to: '/agent/settings', label: 'Settings', icon: FaCog },
    ],
    admin: [
        { to: '/admin', label: 'Dashboard', icon: FaEye },
        { to: '/admin/users', label: 'Users', icon: FaCog },
        { to: '/admin/agents', label: 'Agent', icon: BiBarChart },
        { to: '/admin/cards', label: 'Cards', icon: BiBarChart },
        { to: '/admin/bitcoin-ethereum', label: 'Bitcoin & Ethereum', icon: BiBarChart },
        { to: '/admin/payments', label: 'Payment', icon: BiBarChart },
        { to: '/admin/transactions', label: 'Transaction', icon: BiBarChart },
        { to: '/admin/statistics', label: 'Statistics', icon: BiBarChart },
        { to: '/admin/logout', label: 'Logout', icon: BiBarChart },
    ]
};
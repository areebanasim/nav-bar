import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductIcon from '@mui/icons-material/ProductionQuantityLimits';
import BlogIcon from '@mui/icons-material/LocalLibrary';
import LoginIcon from '@mui/icons-material/LockOpen';
import NotFoundIcon from '@mui/icons-material/DoNotDisturbAlt';

const SideBarData = () => [
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/home"
    },
    {
        title: "User",
        icon: <PersonIcon/>,
        link: "/home"
    },
    {
        title: "Product",
        icon: <ProductIcon/>,
        link: "/home"
    },
    {
        title: "Blog",
        icon: <BlogIcon/>,
        link: "/home"
    },
    {
        title: "Login",
        icon: <LoginIcon/>,
        link: "/home"
    },
    {
        title: "Not Found",
        icon: <NotFoundIcon/>,
        link: "/home"
    }
];
export default SideBarData;

import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/home",
        cName: 'nav-text'
    },
    {
        title: "Products",
        icon: <ListIcon />,
        path: "/products",
        cName: 'nav-text'
    },
    {
        title: "Providers",
        icon: <LocalShippingIcon />,
        path: "/providers",
        cName: 'nav-text'
    }
];
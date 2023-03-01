import React, { useState, createContext } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import SideNavBar from '../components/SideNavBar';
import Dashboard from './dashboard/Dashboard';

export const LandingContext = createContext()

function Landing() {
    const tabList = [
        { value: "dashboard", label: "儀表板" },
        { value: "menu", label: "餐牌" },
        { value: "discount", label: "優惠" },
    ]
    const [currentTab, setCurrentTab] = useState(tabList[0]);

    const handleClickTab = (newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <LandingContext.Provider value={{}}>
            <SideNavBar />
        </LandingContext.Provider>
    )
}

export default Landing;
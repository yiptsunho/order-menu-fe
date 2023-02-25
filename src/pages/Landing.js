import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Landing() {
    const tabList = [
        { value: "dashboard", label: "儀表板" },
        { value: "menu", label: "餐牌" },
        { value: "discount", label: "優惠" },
    ]
    const [currentTab, setCurrentTab] = useState(tabList[0]);
  
    const handleChange = (event, newValue) => {
      setCurrentTab(newValue);
    };

    return (
        <Container maxWidth="lg">
            This is the landing page
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={currentTab}
                    onChange={(e, value) => handleChange(e, value)}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    {tabList.map((tab) => {
                        return (
                            <Tab
                            value={tab.value}
                            label={tab.label}
                            />
                        )
                    })}
                    <TabPanel value={currentTab}>
                        {() => {
                            if (currentTab === "dashboard") {
                                return (
                                    <Dashboard />
                                )
                            } else if (currentTab === "dashboard") {
                                
                            }
                        }}
                    </TabPanel>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Landing;
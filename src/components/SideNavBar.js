import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import Home from "@mui/icons-material/HomeRounded";
import MenuIcon from "@mui/icons-material/MenuRounded";
import MenuBook from '@mui/icons-material/MenuBookRounded';
import Discount from '@mui/icons-material/DiscountRounded';
import { Link, Outlet } from 'react-router-dom';
import { Container } from '@mui/system';

function SideNavBar() {
    const { collapseSidebar } = useProSidebar();

    return (
        <div id="app" style={{ height: "100vh", display: "flex", background: "#F5F7FB" }}>
            <Sidebar style={{ height: "100vh" }}>
                <Menu>
                    <MenuItem
                        icon={<MenuIcon />}
                        onClick={() => {
                            collapseSidebar();
                        }}
                        style={{ textAlign: "center" }}
                    >
                        {" "}
                        <h2>Admin</h2>
                    </MenuItem>
                    <MenuItem
                        icon={<Home sx={{ color: "#fd7e5b" }} />}
                        component={<Link to="dashboard" />}
                    >
                        Dashboard
                    </MenuItem>
                    <SubMenu
                        icon={<MenuBook sx={{ color: "#fd7e5b" }} />}
                        label="Menu"
                    >
                        <MenuItem
                            component={<Link to="manageitem" />}
                        >
                            Manage Item
                        </MenuItem>
                        <MenuItem
                            component={<Link to="managemenu" />}
                        >
                            Manage Menu
                        </MenuItem>
                    </SubMenu>
                    <MenuItem
                        icon={<Discount sx={{ color: "#fd7e5b" }} />}
                        component={<Link to="discount" />}
                    >
                        Discount
                    </MenuItem>
                </Menu>
            </Sidebar>
            <Container maxWidth="xl" height="100vh">
                <Outlet />
            </Container>
        </div>
    )
};

export default SideNavBar;

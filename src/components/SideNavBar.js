import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import Home from "@mui/icons-material/HomeRounded";
import MenuIcon from "@mui/icons-material/MenuRounded";
import MenuBook from '@mui/icons-material/MenuBookRounded';
import Discount from '@mui/icons-material/DiscountRounded';
import { Link, Outlet } from 'react-router-dom';
import { Container } from '@mui/system';

function SideNavBar() {
    const { collapseSidebar, broken, toggleSidebar, collapsed } = useProSidebar();
    // const [width, setWidth] = useState("")
    // const getSize = () => {
    //     setWidth(window.innerWidth)
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', getSize)
    //     if (width < 400) {
    //         collapseSidebar()
    //     } else {
    //         collapseSidebar()
    //     }
    //     return () => {
    //         window.removeEventListener
    //     }
    // }, [])


    return (
        <React.Fragment>
            <div id="app" style={{ display: 'flex', background: "#F5F7FB" }}>
                {/* <div id="app" style={{ width: "100vw", height: "100vh", display: "flex", background: "#F5F7FB" }}> */}
                <Sidebar
                    defaultCollapsed
                    breakPoint="md"
                    style={{ height: "100vh" }}
                >
                    <Menu>
                        <MenuItem
                            icon={<MenuIcon />}
                            onClick={() => {
                                collapseSidebar();
                            }}
                            style={{ textAlign: "left" }}
                        >
                            {" "}
                            <h2>Admin</h2>
                        </MenuItem>
                        <MenuItem
                            icon={<Home sx={{ color: "#fd7e5b" }} />}
                            component={<Link to="dashboard" />}
                            onClick={() => {
                                if (!collapsed) {
                                    collapseSidebar();
                                }
                            }}
                        >
                            Dashboard
                        </MenuItem>
                        <MenuItem
                            icon={<MenuBook sx={{ color: "#fd7e5b" }} />}
                            component={<Link to="manageitem" />}
                            onClick={() => {
                                if (!collapsed) {
                                    collapseSidebar();
                                }
                            }}
                        >
                            Menu
                        </MenuItem>
                        {/* <SubMenu
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
                    </SubMenu> */}
                        {/* <MenuItem
                            icon={<Discount sx={{ color: "#fd7e5b" }} />}
                            component={<Link to="discount" />}
                            onClick={() => {
                                if (!collapsed) {
                                    collapseSidebar();
                                }
                            }}
                        >
                            Discount
                        </MenuItem> */}
                    </Menu>
                </Sidebar>
                <Container maxWidth="xl" height="100vh">
                    {broken &&
                        <button className="sb-button" onClick={() => toggleSidebar()}>
                            Toggle
                        </button>
                    }
                    <Outlet />
                </Container>
            </div>
        </React.Fragment>
    )
};

export default SideNavBar;

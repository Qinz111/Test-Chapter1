import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaHeart, FaReact } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  ProSidebar,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaList,
  FaGithub,
  FaRegLaughWink,
} from "react-icons/fa";
import sidebarBg from "../../components/assets/nhi.jpeg";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../Home/HomePage";
import App from "../../App";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <div>
              <NavLink to="/" className="navbar-brand">
                <FaReact size="30px" color="blue" /> W E B
              </NavLink>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>
              Dashboard
              <Link to="/admins" />
            </MenuItem>
            <MenuItem icon={<FaGem />}> Components</MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<FaRegLaughWink />} title="Features">
              <MenuItem>
                {" "}
                User Management
                <Link to="/admins/manage-users" />
              </MenuItem>
              <MenuItem> Quiz Management</MenuItem>
              <MenuItem> Question Management</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                viewSource
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;

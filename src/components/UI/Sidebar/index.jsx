import React, { useState, useEffect } from "react";
import menuConfig from "./menu.config";
/* Antd */
import { Layout, Menu, Avatar, Row } from "antd";
/* Assets */
import reactLogo from "../../../assets/react.svg";

/* Styles */
if (typeof window === "object") {
  require("./style.scss");
}

const { Sider } = Layout;
const menu = menuConfig();

function UISidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [importedIcons, setImportedIcons] = useState(null);

  useEffect(() => {
    import("@ant-design/icons").then(antdIcons => setImportedIcons(antdIcons));
  }, []);

  return (
    <Sider
      style={{ zIndex: 1 }}
      width={300}
      collapsible
      collapsed={collapsed}
      onCollapse={collapsed => setCollapsed(collapsed)}
    >
      <Row
        className="sidebar-avatar-wrapper"
        type="flex"
        justify="center"
        align="middle"
      >
        <Avatar
          style={{ backgroundColor: "#1890ff" }}
          size={collapsed ? 40 : 200}
          src="https://avatars0.githubusercontent.com/u/22524458?s=460&v=4"
        />
      </Row>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
        {importedIcons &&
          menu.map((item, index) => {
            return (
              <Menu.Item key={index}>
                {React.createElement(importedIcons[item.icon])}
                <span>{item.label}</span>
              </Menu.Item>
            );
          })}
      </Menu>
      <div className="current-tech">
        <header className="current-tech-header">
          <img
            src={reactLogo}
            className="current-tech-logo"
            style={{ height: collapsed ? 50 : 100 }}
            alt="Current tech"
          />
          {!collapsed && (
            <React.Fragment>
              <p>
                Currently working as a <code>React</code> developer
              </p>
              <a
                className="current-tech-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </React.Fragment>
          )}
        </header>
      </div>
    </Sider>
  );
}

export default UISidebar;

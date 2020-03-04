import React from "react";
import "./App.css";
import "antd/dist/antd.css";

/* Antd */
import { Layout } from "antd";

/* Components */
import UISidebar from "./components/UI/Sidebar";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <UISidebar />
      <Layout>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
}

export default App;

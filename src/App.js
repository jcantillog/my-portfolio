import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import ParticlesContainer from "./components/Particles";

/* Antd */
import { Layout } from "antd";

/* Components */
import UISidebar from "./components/Sidebar";
import Content from "./components/Content";

const { Content: AntContent } = Layout;

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <UISidebar />
      <Layout style={{ backgroundColor: "#0f4269", overflowY: "hidden" }}>
        <ParticlesContainer />
        <AntContent
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          <Content />
        </AntContent>
      </Layout>
    </Layout>
  );
}

export default App;

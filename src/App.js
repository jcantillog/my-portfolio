import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import ParticlesContainer from "./components/UI/Particles";

/* Antd */
import { Layout, Carousel } from "antd";

/* Components */
import UISidebar from "./components/UI/Sidebar";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <UISidebar />
      <Layout style={{ backgroundColor: "#0f4269", overflowY: "hidden" }}>
        {/* <ParticlesContainer /> */}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24
          }}
        >
          <Carousel dotPosition={"bottom"}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

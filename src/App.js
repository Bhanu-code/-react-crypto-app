
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
  Navbar, Exchanges, Homepage, Cryptocurrencies, News,
  CryptoDetails
} from "./components";

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              {/* <Route path="/exhanges" element={<Exchanges />} /> */}
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>

        </Layout>
      </div>
      <div className="footer" >
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          CryptoSys<br />
          All rights reserved
        </Typography.Title>

      </div>
    </div>
  );
}

export default App;

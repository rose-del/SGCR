import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

export default function App () {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFFF00',
        }}
      >
        <div className="demo-logo" />
      </Header>
    </Layout>
  );
};

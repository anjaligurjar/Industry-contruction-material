import React from 'react';
import Header from './Header';
import './style.css';

export default function Layout() {
  return (
    <div>
      <Layout>
        <h1> Search the instruments</h1>
        <p>Welcome our site</p>
        <Header />
      </Layout>
    </div>
  );
}

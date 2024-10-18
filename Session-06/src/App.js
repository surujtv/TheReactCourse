import React from "react";
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Body} from './components/Body'


export const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

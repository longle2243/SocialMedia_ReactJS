import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import MyPost from "./component/MyPost";
import Posts from "./component/Posts";
import Account from './component/Account';
import Friend from './component/Friend';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MyPost />} />
          <Route path="post/*" element={ <Posts />} />
          <Route path="account/" element={ <Account />} />
          <Route path="friend/" element={ <Friend />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
  }
}

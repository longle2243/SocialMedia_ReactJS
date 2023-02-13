import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import ListTodo from "./component/Listtodo";
import Posts from "./component/Posts";
import GetDataApi from './component/getApi';
import Userlist from './component/Userlist';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ListTodo />} />
          <Route path="post/*" element={ <Posts />} />
          <Route path="account/" element={ <GetDataApi />} />
          <Route path="friend/" element={ <Userlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
  }
}

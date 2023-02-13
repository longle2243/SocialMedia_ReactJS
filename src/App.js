import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Layout";
import ListTodo from "./component/Listtodo";
import Product from "./component/Posts";
import GetDataApi from './component/getApi';
import Userlist from './component/Userlist';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ListTodo />} />
          <Route path="posts/*" element={ <Product />} />
          <Route path="api/" element={ <GetDataApi />} />
          <Route path="user/" element={ <Userlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


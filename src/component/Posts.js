import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const postshardcode = [{ id: 123, title: 'Post aaa', body: 'Description 123 ' }];
var datapost=[];

const PostsList = ({ posts }) => {
  const [isHidden, setIsHidden] = useState(false);
  const hiddendiv = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div>
      <TableContainer component={Paper}>
        {
          posts ?
            <div style={{ display: isHidden ? 'none' : 'block' }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {posts.map((post) => (
                    <TableRow
                      key={post.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row"> <Link style={{ color: "green" , textDecoration: "none"}} to={{ pathname: `/posts/${post.id}`, state: { post } }} onClick={hiddendiv}>{post.title}</Link></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div> : <p>Loading...</p>
        }
      </TableContainer>
    </div>
  );
};

const PostsDetail = () => {
  const routeParams = useParams();
  var post

  if (datapost.length>0){
    post = datapost.find(p => p.id === parseInt(routeParams.id));
  }   
  return (
    <div>
      <h1>POSTS</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default function Posts(){
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  datapost=data
  return (
    <div className="admin-panel-container">
      <hr />
      {data ? <PostsList posts={data} /> : <PostsList posts={postshardcode} />}
      <Routes>
        <Route path="/:id" element={<PostsDetail />} />
      </Routes>
    </div>
  );
};



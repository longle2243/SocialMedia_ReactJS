import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const postshardcode = [{ id: 123, title: 'Loading...', body: 'Description 123 ' }];
var datapost = [];

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
                <TableHead>
                  <TableRow>
                    <TableCell sx={{color:"red",fontWeight: "bold"}}>NEW POST</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow
                      key={post.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row"><h3 style={{color: "violet"}}>{post.id}</h3> <Link style={{ color: "blue", textDecoration: "none" }} to={{ pathname: `/post/${post.id}`, state: { post } }} onClick={hiddendiv}>{post.title}</Link></TableCell>
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

  if (datapost.length > 0) {
    post = datapost.find(p => p.id === parseInt(routeParams.id));
  }
  console.log(post.id);
  return (
    <div>
      <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{post.id}</Typography>
        </CardContent>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{post.title}</Typography>
            <Typography variant="body2" color="text.secondary">{post.body}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>

  );
};

export default function Posts() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  datapost = data
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


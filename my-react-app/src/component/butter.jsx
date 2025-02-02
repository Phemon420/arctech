import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import fetchPosts from "../redux/action/action";

const Butter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.getPosts.posts);
  const loading = useSelector((state) => state.getPosts.loading);
  const error = useSelector((state) => state.getPosts.error);

  const handleFetchPosts = () => {
    dispatch(fetchPosts()); // Dispatch the fetch action on button click
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <button onClick={handleFetchPosts} style={{ marginBottom: "20px", padding: "10px 15px", fontSize: "16px" }}>
        Fetch Posts
      </button>
      <button onClick={() => navigate('/mindmap')}>Go to Mind-Map</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <TableContainer component={Paper} sx={{ width: { xs: "100%", md: "50%" }, maxHeight: 400, overflowY: "auto" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.length > 0 ? (
              posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.body}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No Data Available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Butter;

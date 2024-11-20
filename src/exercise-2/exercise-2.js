import React, { useState } from 'react';
import BlogPost from './BlogPost';
import { Link } from 'react-router-dom';
import './exercise-2.css';

const Exercise2 = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts,{ title, description, imageUrl }]);
    setTitle('');
    setDescription('');
    setImageUrl('');
  };

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Link to="/" style={{ textDecoration: 'none' }}><button className="go-home-btn">Back to Menu</button></Link>

      <h2>Create a New Blog Post</h2>

      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label>
            Title:
            <br />
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
          </label>
        </div>

        <div>
          <label>
            Description:
            <br />
            <textarea value={description}onChange={(e) => setDescription(e.target.value)} required/>
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <br />
            <input type="url"value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
          </label>
        </div>
        <button type="submit">Submit Post</button>
      </form>

      <div className="blog-posts-container">
        {posts.map((post, index) => (
          <div className="blog-post-card" key={index}>
            <button className="delete-btn" onClick={() => handleDelete(index)}>X</button>
            <BlogPost title={post.title} description={post.description} imageUrl={post.imageUrl}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise2;

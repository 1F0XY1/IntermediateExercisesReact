import React from 'react';

const BlogPost = ({ title, description, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '20px', borderRadius: '10px', width: '300px' }}>
      {imageUrl && (<img src={imageUrl} alt={title} style={{ maxWidth: '100%', borderRadius: '10px' }}/>)}

      <h2 style={{ color: '#333', marginTop: '10px' }}>{title}</h2>
      <p style={{ color: '#555' }}>{description}</p>
    </div>

  );
};

export default BlogPost;

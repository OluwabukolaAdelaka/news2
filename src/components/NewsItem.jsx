import React from 'react';
import '../styles/News.css';


const NewsItem = ({img, title, description, readMore, author}) => {
  return (
    <div className="news">
        <img src={img} alt={img} />
        <h1 className="myTitle">{title}</h1>
        <p className="description">{description}</p>
        <small className="writer text-muted">Author: {author}</small>   
        <button className="mybtn"><a href={readMore} target="_blank" rel="noopener noreferrer">Read More</a></button>
    </div>
  );
};

export default NewsItem;

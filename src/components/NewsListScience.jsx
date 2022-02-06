import React, {useState, useEffect} from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsList = () => {
    const [news, getNews] = useState([]);

    useEffect(() => {
        const fetchnews = async () => {
            const {data} = await axios.get('https://newsapi.org/v2/everything?q=science&apiKey=1725a232fe9f44bcad53f480461022b9');
            getNews(data.articles);
        }
        fetchnews();
    }, []);
  return (
    <React.Fragment>
        {news.map(articles => (
            <NewsItem 
            key={articles.url}
            img={articles.urlToImage}
            title={articles.title}
            description={articles.description}
            author={articles.author}
            readMore={articles.url}
            />
        ))}
    </React.Fragment>
  );
};

export default NewsList;

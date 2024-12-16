import React, { useState, useEffect } from 'react';
import '../styles/patient/patient-home.css';

const NewsCard = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "3cfc119633ee4c71bafef0e3b3ef1637";
      const searchQuery = "vision OR eye care OR optometry OR eye treatment OR eyeglasses OR eye disease OR ophthalmology OR contact lenses OR LASIK OR retina OR glaucoma OR cataract OR blindness OR vision therapy OR visual impairment"
      const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&pageSize=10&apiKey=${apiKey}`; // Fetch 10 articles

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "ok" && data.articles.length > 0) {
          console.log("Fetched Articles:", data.articles); // Debugging

          setArticles(data.articles);
        } else {
          console.error("No articles found.");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [articles]);

  return (
    <div className="news-item">
      {loading ? (
        <p>Loading...</p>
      ) : articles.length > 0 ? (
        <div className="news-content">
          <h3 className="article-title">
            {articles[currentIndex].title || "No title available"}
          </h3>
          <a href={articles[currentIndex].url} target="_blank" rel="noopener noreferrer">
            <img
              src={articles[currentIndex].urlToImage || "placeholder.jpg"}
              alt={articles[currentIndex].title || "News Image"}
              className="news-image"
            />
          </a>
        </div>
      ) : (
        <p>No relevant articles found. Please try again later.</p>
      )}
    </div>
  );
};

export default NewsCard;

    import React, { useState, useEffect } from 'react';
    import '../styles/patient-home.css';

    const NewsCard = () => {
    const [articles, setArticles] = useState([]); 
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
        const apiKey = "3cfc119633ee4c71bafef0e3b3ef1637";
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${apiKey}`; // Fetch 5 articles // Can add more // Country is set to US for now - wil change later

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data.status === "ok" && data.articles.length > 0) {
            setArticles(data.articles); 
            } else {
            console.error("No articles found");
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
            setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length); // Cycle through articles
        }, 3000); // Change article every 3 seconds // Change to what interval you want

        return () => clearInterval(interval); 
        }
    }, [articles]); 

    return (
        <div className="news-item">
        {loading ? (
            <p>Loading...</p>
        ) : (
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
        )}
        </div>
    );
    };

    export default NewsCard;

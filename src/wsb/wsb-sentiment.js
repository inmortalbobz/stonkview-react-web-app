import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";

const WsbSentiment = () => {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('/api/v1/apps/reddit');
        setStocks(response.data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, []);

  const renderSentimentIcon = (sentiment) => {
    if (sentiment === 'Bullish') {
      return <i className="bi bi-arrow-up-circle-fill text-success"></i>;
    } else if (sentiment === 'Bearish') {
      return <i className="bi bi-arrow-down-circle-fill text-danger"></i>;
    }
    return null;
  };

  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="my-4">Top 50 Stocks Discussed on Reddit Wallstreetbets Today</h4>
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
              <tr>
                <th>Ticker</th>
                <th>No. of Comments</th>
                <th>Sentiment</th>
                <th>Sentiment Score</th>
              </tr>
              </thead>
              <tbody>
              {stocks.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.ticker}</td>
                    <td>{stock.no_of_comments}</td>
                    <td>
                      {renderSentimentIcon(stock.sentiment)}
                      <span className="ml-2"> {stock.sentiment}</span>
                    </td>
                    <td>{stock.sentiment_score.toFixed(3)}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default WsbSentiment;

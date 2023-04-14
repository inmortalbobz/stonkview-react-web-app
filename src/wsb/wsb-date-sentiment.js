import React from 'react';

const WsbDateSentiment = ({ stocks }) => {
  const renderSentimentIcon = (sentiment) => {
    if (sentiment === 'Bullish') {
      return <i className="bi bi-arrow-up-circle-fill text-success"></i>;
    } else if (sentiment === 'Bearish') {
      return <i className="bi bi-arrow-down-circle-fill text-danger"></i>;
    }
    return null;
  };
  return (
      <div>
        <h2>Top 50 Stocks Discussed on Reddit Wallstreetbets</h2>
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
                <td>{stock.sentiment_score ? stock.sentiment_score.toFixed(3) : null}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default WsbDateSentiment;
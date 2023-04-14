import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector} from "react-redux";
import WsbDateSentiment from "./wsb-date-sentiment";
import {useNavigate} from "react-router";
const WsbSearch = () => {
  const { currentUser } = useSelector((state) => state.users);
  const [date, setDate] = useState('');
  const [stocks, setStocks] = useState(null);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/wsb')
  }
  const fetchStocks = async (date) => {
    try {
      const response = await axios.get(`/api/v1/apps/reddit?date=${date}`);
      setStocks(response.data);
    } catch (error) {
      console.error('Error fetching stocks:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchStocks(date);
    navigate(`/wsb/search/${date}`)
  };
  return (
      <div className="container">
        {(currentUser && currentUser.role === "Bronze") && (
            <div className="row">
              <div className="col-12">
                <div className="alert alert-info">
                  Please Upgrade to Gold to access this feature.
                </div>
              </div>
            </div>
        )}
        {!currentUser && (
            <div className="row">
              <div className="col-12">
                <div className="alert alert-info">
                  Please Log in as Gold tier for access.
                </div>
              </div>
            </div>
        )}
        {(currentUser && currentUser.role !== "Bronze") && (
            <div className="row">
          <div className="col-md-12">
            <h4 className="my-4">WSB Sentiment by Date</h4>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="form-group">
                <label htmlFor="date">Select a date:</label>
                <input
                    type="date"
                    id="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <button onClick={handleGoBack}
                      className="btn btn-primary me-2">
                Back
              </button>
              <button type="submit" className="btn text-doge btn-dark me-2"
                      style={{ color: '#FFD700' }}>
                Get Data
              </button>
            </form>
            {stocks && <WsbDateSentiment stocks={stocks} />}
          </div>
        </div>)}
      </div>
  );
};

export default WsbSearch;
import WsbSentiment from "./wsb-sentiment";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import React from "react";
const WsbPage = () => {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1)
  }
  const handleSearch = () => {
    navigate('/wsb/search')
  }
  return (
      <div className="col-xl-12 main-content">
        <button onClick={handleGoBack}
                className="btn btn-primary me-2">
          Back
        </button>
        <button onClick={handleSearch}
                className="btn text-doge btn-dark me-2"
                style={{ color: '#FFD700' }}>
          Search WSB Sentiment By Specific Date
        </button>
        {currentUser && <WsbSentiment />}
        {!currentUser && (
            <div className="row">
              <div className="col-12">
                <div className="alert alert-info">
                  Please log in to use WSB feature.
                </div>
              </div>
            </div>
        )}
      </div>
  )
}

export default WsbPage;
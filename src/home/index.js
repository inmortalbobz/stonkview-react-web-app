import NavigationSidebar from "./left-side-bar";
import { useDispatch, useSelector } from "react-redux";
import WelcomeNewUsers from "./welcome";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import LogSummary from "./widgets/summary-widget";
import UnLogSummary from "./widgets/summary-widget-unlog";
import stockGraph from './assets/stock-graph.png';
import wsbGraph from './assets/wsb-graph.webp'
import './HomePage.css'

const HomePage = () => {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div className="home-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 d-none d-xl-block">
            <NavigationSidebar />
          </div>

          <div className="col-xl-10 main-content">
            {currentUser && <WelcomeNewUsers />}
            {currentUser && <LogSummary />}
            {currentUser && (
              <>
                <h3 className="mb-4">Dashboard</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card feature-card">
                      <img
                        src={stockGraph}
                        alt="Stock Graph"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Live Stock Prices</h5>
                        <p className="card-text">
                          Stay up to date with the latest stock prices and market trends.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Add more feature cards here */}
                  <div className="col-md-6">
                    <Link to="/wsb" className="text-decoration-none text-dark">
                      <div className="card feature-card">
                        <img
                          src={wsbGraph}
                          alt="Stock Graph"
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">WSB Sentiment</h5>
                          <p className="card-text">
                            Get top 50 stocks discussed on Reddit subeddit - Wallstreetbets.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            )}
            {!currentUser && <UnLogSummary />}
            {!currentUser && (
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-info">
                    Please log in to access your dashboard.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
import NavigationSidebar from "./left-side-bar";
import {useDispatch, useSelector} from "react-redux";
import WelcomeNewUsers from "./welcome";
import {useEffect} from "react";
import stockGraph from './assets/stock-graph.png';
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
              {currentUser && (
                  <>
                    <h2 className="mb-4">Your Dashboard</h2>
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
                    </div>
                  </>
              )}

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
// const HomePage = () =>{
//   const {currentUser} = useSelector((state) => state.users)
//
//   return (
//       <>
//         {
//             currentUser &&
//             <div className="row">
//               <div className="col-2 d-none d-xl-block">
//                 <NavigationSidebar/>
//                 <br/>
//                 <br/>
//                 <WelcomeNewUsers/>
//
//               </div>
//             </div>
//         }
//
//         {
//             !currentUser &&
//             <div className="row">
//               <div className="col-2 d-none d-xl-block">
//                 <ul className="list-group">
//                   login please
//                 </ul>
//
//               </div>
//
//             </div>
//         }
//
//       </>
//
//
//   )
//
//
// }
//
// export default HomePage;
import "./doge-color.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutThunk } from "../users/users-thunk";

const TopNavigationBar = () => {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3 mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/logo.webp"
            alt="Logo"
            className="img-fluid me-2 rounded-circle"
            height={50}
            width={50}
          />
          <span className="fw-bold" style={{ fontSize: "1.25rem" }}>
            Stonk
          </span>
          <span className="fw-bold text-doge" style={{ fontSize: "1.25rem" }}>
            View
          </span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </li>
            {currentUser && currentUser.role === "Admin" && (
              <li className="nav-item">
                <Link to="/users" className="nav-link">
                  Users Management
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                View My Profile
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {currentUser ? (
              <>
                <div className="col-5">
                  {" "}
                  {currentUser.role} Home, Welcome {currentUser.username}
                </div>

                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-outline-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigationBar;

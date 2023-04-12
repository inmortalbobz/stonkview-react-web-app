import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logoutThunk} from "../users/users-thunk";

const TopNavigationBar = () => {
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutThunk())
  }
  return (
      <div className="container">
        <div className="row">

          <div className="col-xl-7">
            <h1>
              <Link to="/" style={{textDecoration: "none"}}>
                <span className="text-dark">Stonk</span>
                <span className="text-danger">View</span>
              </Link>
            </h1>
            {
                currentUser &&
                <h6>
                  <div className="col-5 text-primary"> Welcome, {currentUser.role} {currentUser.username}</div>
                </h6>
            }
          </div>

          <div className="col-xl-5">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="/search" className="nav-link">Search</a>
              </li>
              {
                  currentUser && currentUser.role === 'Admin' &&
                  <>
                    <li className="nav-item">
                      <a href="/users" className="nav-link">Users Management</a>
                    </li>
                  </>
              }

              <li className="nav-item">
                <a href="/profile" className="nav-link">View My Profile</a>
              </li>
              {
                  currentUser &&
                  <>
                    <button className="btn btn-primary" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
              }
              {
                  !currentUser &&
                  <>
                    <li className="nav-item">
                      <a href="/login" className="nav-link"> Login</a>
                    </li>
                    <li className="nav-item">
                      <a href="/register" className="nav-link"> Register</a>
                    </li>
                  </>
              }
            </ul>
          </div>
        </div>
      </div>
  )
}
export default TopNavigationBar;

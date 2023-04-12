import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {welcomeUsersThunk} from "./welcome-thunk";
import './welcomeUsers.css'
const WelcomeUsers = () =>{
  const newUsers = useSelector((state) => state.welcomeUsers)
  const userArray = Object.values(newUsers)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(welcomeUsersThunk())
  },[])

  return (
      <div className="welcome-users-sidebar position-fixed h-100">
        <h3 className="mb-4 text-center">Welcome New Users</h3>
        {userArray && (
            <ul className="list-group">
              <li className="list-group-item active">Best Wishes for our recent new users</li>
              {userArray?.map((item) => (
                  <li className="list-group-item" key={item._id}>
                    <a href={`/profile/${item._id}`} className="text-decoration-none">
                      {item.username}
                    </a>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
};

export default WelcomeUsers;
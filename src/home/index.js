import NavigationSidebar from "./left-side-bar";
import {useDispatch, useSelector} from "react-redux";
import WelcomeNewUsers from "./welcome";
import {useEffect} from "react";



const HomePage = () =>{
  const {currentUser} = useSelector((state) => state.users)

  return (
      <>
        {
            currentUser &&
            <div className="row">
              <div className="col-2 d-none d-xl-block">
                <NavigationSidebar/>
                <br/>
                <br/>
                <WelcomeNewUsers/>

              </div>
            </div>
        }

        {
            !currentUser &&
            <div className="row">
              <div className="col-2 d-none d-xl-block">
                <ul className="list-group">
                  login please
                </ul>

              </div>

            </div>
        }

      </>


  )


}

export default HomePage;
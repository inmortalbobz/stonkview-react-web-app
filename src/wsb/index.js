import WsbSentiment from "./wsb-sentiment";
import {useSelector} from "react-redux";

const WsbPage = () => {
  const { currentUser } = useSelector((state) => state.users);
  return (
      <div className="col-xl-12 main-content">
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
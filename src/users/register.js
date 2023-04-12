import React from "react";
import {useNavigate} from 'react-router-dom'

const RegisterMainPage = () => {
  const navigate = useNavigate();
  const handleRegisterBronze = () => {
    navigate('./bronze')
  }

  const handleRegisterGold= () => {
    navigate('./gold')
  }

  const handleRegisterAdmin = () => {
    navigate('./admin')
  }

  const handleLoginLink = () => {
    navigate("/login");
  };

  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="mb-5 text-center">Register</h1>
                <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={handleRegisterBronze}
                >
                  Bronze User Register
                </button>
                <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={handleRegisterGold}
                >
                  Gold User Register
                </button>
                <button
                    className="btn btn-primary w-100 mb-3"
                    onClick={handleRegisterAdmin}
                >
                  Admin User Register
                </button>
                <p className="text-center">
                  Already have an account?{" "}
                  <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={handleLoginLink}
                  >
                  Please Login
                </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RegisterMainPage;
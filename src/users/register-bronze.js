import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./bronze/users-bronze-thunk";
import {useNavigate} from "react-router-dom";

const BronzeRegister = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [validatePassword, setValidatePassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('Bronze')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleRegister = async () => {
    if (password !== validatePassword) {
      setError('Passwords must match')
      return
    }
    setError(null)
    const newUser = {username, password, firstName, lastName, role, email}
    try {
      const originalPromiseResult = await dispatch(registerThunk(newUser)).unwrap()
      navigate("/")
    } catch (error) {
      setError("Unable to register")
    }
  }
  const handleGoBack = () => {
    navigate(-1)
  }
  return(
      <div className="background-moon-container container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="mb-5 text-center">Bronze User Register</h1>
                {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                )}
                {/* Form */}
                <form>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                        id="username"
                        className="form-control"
                        value={username}
                        placeholder="Enter username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                        id="password"
                        className="form-control"
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* Validate Password */}
                  <div className="mb-3">
                    <label htmlFor="validatePassword" className="form-label">
                      Re-Enter Password
                    </label>
                    <input
                        id="validatePassword"
                        className="form-control"
                        type="password"
                        value={validatePassword}
                        placeholder="Reenter password"
                        onChange={(e) => setValidatePassword(e.target.value)}
                    />
                  </div>
                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                        id="email"
                        className="form-control"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/*First Name*/}
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                        id="firstName"
                        className="form-control"
                        value={firstName}
                        placeholder="Enter First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  {/*Last Name*/}
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                        id="lastName"
                        className="form-control"
                        value={lastName}
                        placeholder="Enter Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  {/* Register Button */}
                  <button
                      type="button"
                      onClick={handleRegister}
                      className="btn btn-primary w-100 mb-3"
                  >
                    Register
                  </button>
                  {/* Go Back Button */}
                  <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={handleGoBack}
                  >
                    Go Back to Register
                  </button>
                </form>
                {/* Welcome Message */}
                {currentUser && (
                    <h2 className="mt-3 text-center">
                      Welcome {currentUser.role} {currentUser.username}
                    </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BronzeRegister
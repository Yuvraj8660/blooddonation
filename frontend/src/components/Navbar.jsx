
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setToken } from "../redux/slices/authSlice";


const Navbar = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user)

  useEffect(() => {
    console.log("this code will run", token)
  }, [token])


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Blood Bank </Link>
      </div>

      <ul className="navbar-links">

        <>
          {
            token && <>
              {
                user?.role === "Donor" &&
                <li>
                  <Link to="/donate">Donate Khoon</Link>
                </li>

              }
              {
                user?.role === "Doctor" &&
                <li>
                  <Link to="/collect">View All Donars </Link>
                </li>
              }
            </>
          }

        </>
        {
          token === undefined ? (<>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>) :
            (<li onClick={() => {
              console.log("click hua")
              dispatch(setToken(undefined))
              localStorage.removeItem("token")
            }}>
              Logout
            </li>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;

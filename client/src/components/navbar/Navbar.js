import Swal from 'sweetalert2';
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import '../../features/auth/registerLogin/login-page.css';
import useAuth from "../../hooks/useAuth";
import {  useSendLogoutMutation } from "../../features/auth/authApiSlice";
import { MdLogout, MdDensityMedium, MdEmojiPeople, MdFace, MdOutlinePermIdentity, MdOutlineSearch } from "react-icons/md";
import Search from "../search/Search";
import "./navbar.css"
import LoginPage from '../../features/auth/registerLogin/LoginPage';
import RegisterPage from '../../features/auth/registerLogin/RegisterUser';

const Navbar = () => {
  const [logout, { isSuccess: isLogoutSuccess }] = useSendLogoutMutation()
  const navigate = useNavigate();
  const location = useLocation();
  const { firstname, lastname } = useAuth();  // בדיקה האם המשתמש מחובר
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const logoutClick = () => {
    console.log("logout")
    logout()
  }
  useEffect(() => {
    if (isLogoutSuccess) {
      navigate("/")
    }

  }, [isLogoutSuccess])
  // useEffect(() => {
  //   if (firstname) {
  //     // אם המשתמש מחובר, מציגים הודעה שהוא מחובר כבר
  //     Swal.fire({
  //       icon: 'info',
  //       title: 'הינך כבר מחובר',
  //       text: 'אתה מחובר כ ' + firstname,
  //       confirmButtonText: 'אוקיי',
  //     });
  //   }
  // }, [firstname]);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

 
    const isHomePage = location.pathname === "/";

  return (
    <div className="navbarBox">
        <div className="navbar-top-homepage"> 
           {firstname ?             
            <div className="nav-hello"><img className="account-profile" alt="" src="/account-white.png" />
          היי {firstname}{ } {lastname}! </div>
          : <><LoginPage/>
            <RegisterPage/></>}
          <img alt="" src="/shopping-cart.png" className="shopping-cart-home" />
          <img alt="" src="/heart.png" className="heart-home" />
          {/* הצגת כפתור היציאה רק אם המשתמש לא נמצא בדף הבית */}
        {!isHomePage && (
          <button className="logout-button" onClick={logoutClick}>
            <MdLogout />
            יציאה
          </button>
        )}
          {!isHomePage && ( <Search placeholder="...Search" />)}
          <div className="nav-icons">
            {/* <MdDensityMedium /> */}
          </div>

        </div>
        <div className="navbar-under-homepage">
          <img className="logo-homepage" src="/logor.png" />
          <NavLink to={"/dash/about"}>אודות</NavLink>
          <NavLink to={"/dash/astro"}>אסטרולוגיה</NavLink>
          <NavLink to={"/dash/blogs"}>בלוג</NavLink>
          <NavLink to={"/dash/diagnosiss"}>אבחונים</NavLink>
          <NavLink to={"/dash/diagnosiss"}>מה אומרים עלינו?</NavLink>
          <button onClick={() => scrollToSection("contact-section")}>יצירת קשר</button>
        </div>
        {/* <div className="nav-menu">
        <div className="nav-text"></div>
        <h1>האזור האישי</h1>
        נהל את החשבון שלך, ערוך את הפרטים האישיים, שנה סיסמה וצפה בהסטורית הרכישה שלך"      </div> */}
      </div>

  );
};

export default Navbar;

"use client"
import "./signUp.css"
import Image from "next/image";
import Netflix from "../images/homePage/netflix.png";
const page = () => {
    return (
        <main >
            <a href="/">
                <Image id="logo" src={Netflix} alt="" />
            </a>
            <div className="signUp--container">
                <h1>Sign In</h1>
                <div className="inputs">
                    <input id="email" type="email" placeholder="Email or Phone number" />
                    <h4 id="notvalid--mail">Please enter a valid email or phone number </h4>
                    <input id="password" type="password" placeholder="Password" />
                    <h4 id="notvalid--pass">Your password must contain between  4 and 60 characters.</h4>
                    <button id="signUp" onClick={(() => location.href = "/userspage")}>Sign In </button>
                </div>
                <span>
                    New to Netflix?
                    <a href="/">Sign up now</a>
                </span>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
            </div>

        </main>
    )
}

export default page
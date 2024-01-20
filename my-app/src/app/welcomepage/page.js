import Image from "next/image"
import "./welcomePage.css"
import Logo from "../images/homePage/logo.png"
import User1 from "../images/usersPage/user1.jpg"
const page = () => {
    return (
        <>
            <nav>
                <div class="mainHeader">
                    <Image id="logo" src={Logo} alt="" />
                    <ul>
                        <li id="Home">Home</li>
                        <li id="Series">Series</li>
                        <li id="Films">Films</li>
                        <li id="Latest">Latest</li>
                        <li id="MyList">MyList</li>
                    </ul>
                </div>
                <div class="secondHeader">
                    <span id="search" class="material-symbols-outlined">search</span>
                    <input style={{ display: "none" }} id="clickSearch" type="text" placeholder="Titles,people,genres" />
                    <span class="material-symbols-outlined">notifications</span>
                    <span class="material-symbols-outlined">
                        <Image src={User1} alt="" />
                        arrow_drop_down
                    </span>
                </div>
            </nav>
            <div class="videoContainer">
                <video width="100%" autoplay >
                    <source src="../videos/Peaky Blinders _ Season 5 Trailer _ Netflix.mp4" />
                </video>
            </div>
            <div class="filmsContainer"></div>
        </>
    )
}

export default page
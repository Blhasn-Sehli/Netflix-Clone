"use client"
import Image from "next/image"
import "./usersPage.css"
import user1 from "../images/usersPage/user1.jpg"
import user2 from "../images/usersPage/user2.png"
import user3 from "../images/usersPage/user3.jpg"
import user4 from "../images/usersPage/user4.jpg"
import user5 from "../images/usersPage/user5.jpg"

const page = () => {
    const handleCardClick = () => {
        location.href = "/welcomepage"
    }
    return (
        <main>
            <span> Who's Watching?</span>
            <div className="cards">
                <div onClick={handleCardClick} className="userCard">
                    <Image src={user1} alt="" />
                    <h1>MpK</h1>
                </div>
                <div onClick={handleCardClick} className="userCard">
                    <Image src={user2} alt="" />
                    <h1>Aziz</h1>
                </div>
                <div onClick={handleCardClick} className="userCard">
                    <Image src={user3} alt="" />
                    <h1>Khalil</h1>
                </div>
                <div onClick={handleCardClick} className="userCard">
                    <Image src={user4} alt="" />
                    <h1>Yassine</h1>
                </div>
                <div className="userCard">
                    <Image src={user5} alt="" />
                    <h1>Bango</h1>
                </div>
            </div>
        </main>
    )
}

export default page
import { useState } from "react";

export default function LikedButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [isClicks, setIsClicks] = useState(0);

    let isToggleLike = () => {
        setIsLiked(!isLiked);
        setIsClicks(isClicks + 1);
    }

    let likeStyle = {color: "red", fontSize: "30px"};

    return (
        <div>
            <p style={{fontSize: "16px", fontWeight: "bold"}}>Clicks = {isClicks}</p>
            <p onClick={isToggleLike} style={likeStyle}>
                {
                    isLiked ? (<i className="fa-solid fa-heart"></i>) : (<i className="fa-regular fa-heart"></i>)
                }
            </p>
        </div>
    )
}
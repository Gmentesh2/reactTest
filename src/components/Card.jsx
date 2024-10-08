import React from "react";


// create card component
const Card = () => {
    return (
        <div className="card">
            <img src="https://th.bing.com/th/id/OIP.cRT6RCVvwHTayfPtBx1GOAHaE8?w=253&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
            <h2 className="card-title">Card Title</h2>
            <p className="card-description">Card Description</p>
            <button className="card-button">button</button>
        </div>
    )
}

export default Card;
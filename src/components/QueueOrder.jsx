import React from "react";

export default function QueueOrder(props) {
    // Create random name to orders not posted by the user.
    const randomNames = ["Simone", "Rie", "Camilla", "Kristine", "Marie", "Anders", "Søren", "Christian", "Phillip", "Thomas"];
    const namesLen = randomNames.length;
    const randomNumber = Math.floor(Math.random() * namesLen);
    const randomName = randomNames[randomNumber];

    return (
        <div className="queueOrder row justify-content-between">
            <div className="col">
                <p>{props.id === props.userOrder[0].id ? props.userOrder[0].name : randomName}</p>
            </div>
            <div className="col text-end">
                <p>No. </p>
                <span>{props.id}</span>
            </div>
        </div>
    )
}
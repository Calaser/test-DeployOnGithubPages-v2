import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

function Header(props) {
    return (
        <header>
            <Stats
                totalPlayers={props.totalPlayers}
                totalPoints={props.totalPoints}
            />
            <h1>{props.title}</h1>
            <Stopwatch />
        </header>
    )
};

export default Header;
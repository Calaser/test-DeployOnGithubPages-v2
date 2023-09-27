import React, { memo } from "react";
import Counter from "./Counter.js";
import Icon from "./icon.js";
function Player(props) {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.deletePlayer(props.player.id)}>✖</button>
                <Icon 
                    isHighScore={props.isHighScore}
                />
                {props.player.name}
            </span>
            <Counter
                id={props.player.id}
                score={props.player.score}
                scoreChange={props.scoreChange}
            />
        </div>
    )
};

function plaerScoreAreEqual (prevProps, nextProps) {
    return  prevProps.player.score === nextProps.player.score && prevProps.isHighScore === nextProps.isHighScore;
}

export default memo(Player, plaerScoreAreEqual);
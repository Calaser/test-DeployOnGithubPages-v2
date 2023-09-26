import React from "react";

function Stats(props) {
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{props.totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{props.totalPoints}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Stats;
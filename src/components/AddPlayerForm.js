import React, { useRef } from "react";

function AddPlayerForm(props) {
    const playerInput = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        if (playerInput.current.value) {
            props.HendleAddPlayer(playerInput.current.value);
            playerInput.current.value = "";
        }
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input
                type="text"
                ref={playerInput}
                placeholder="Rnter a player's name"
            />
            <input
                type="submit"
                value="Add Player"
            />
        </form>
    );
}

export default AddPlayerForm;
import React, { useState, useEffect } from "react";

export const Compteur = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Vous avez cliqué ${count} fois`;
    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)}>
            + 1
        </button>
    )
}


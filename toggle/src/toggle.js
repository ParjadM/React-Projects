import React, { useState, useEffect } from 'react';


function Toggle() {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = isOn ? "#ffffff" : "#000000";
    }, [isOn]);

    return (
        <div>
            <h1 style={{ color: "red" }}>Toggle</h1>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? "Switch Off" : "Switch On"}
            </button>
        </div>
    );
}

export default Toggle;





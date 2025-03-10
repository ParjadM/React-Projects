import React, { useState } from 'react';

function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState('#ffffff');
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF", "#FF33FF"];

    return (
        <div className="color-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: selectedColor}}>
                <p>the background Color is: {selectedColor}</p>
            </div>
            <div className="color-buttons">
                {colors.map((color) => (
                    <button
                        key={color}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default ColorPicker;
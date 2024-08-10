import React, { useState } from "react";
import { props, points, passives, spells, ultimate } from "../info";

export const CharacterComponent = () => {
    const [character, setCharacter] = useState(points);
    const [successCount, setSuccessCount] = useState(0);
    const [newAbility, setNewAbility] = useState(null);

    const handleChange = (stat, value) => {
        setCharacter(prevState => ({
            ...prevState,
            [stat]: prevState[stat] + value
        }));
    };

    const incrementSuccessCount = () => {
        setSuccessCount(prev => {
            const newCount = prev + 1;
            if (newCount === 4) {
                setNewAbility(ultimate.ult);
            }
            return newCount;
        });
    };

    return (
        <div className="character-container" style={{backgroundImage: 'url("../assets/background.jpg")'}}>
            <h1>{props.name}</h1>
            <img src={'./assets/assets.jpg'} alt="Character" className="character-image"/>
            <p><strong>Расса:</strong> {props.rasa}</p>
            <p><strong>Класс:</strong> {props.class}</p>
            <p><strong>Пол:</strong> {props.sex}</p>
            <p className="character-history"><strong>История:</strong> {props.history}</p>
            <h2>Статы</h2>
            {Object.entries(character).map(([key, value]) => (
                <div key={key}>
                    <button onClick={() => handleChange(key, -1)}>-</button>
                    <strong>{key.toUpperCase()}:</strong> {value}
                    <button onClick={() => handleChange(key, 1)}>+</button>
                </div>
            ))}
            <div>
                <button onClick={incrementSuccessCount}>Отметить успешный бросок 20</button>
                <p>Удачных бросков: {successCount}</p>
                {newAbility && <p>{newAbility}</p>}
            </div>
            <h2>Активки</h2>
            {Object.entries(spells).map(([key, value]) => (
                <div key={key}>
                    <p>{key}: {value}</p>
                </div>
            ))}
            <h2>Пассивки</h2>
            {Object.entries(passives).map(([key, value]) => (
                <div key={key}>
                    <p>{key}: {value}</p>
                </div>
            ))}
        </div>
    );
};

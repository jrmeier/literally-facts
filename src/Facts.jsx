import React, { useState} from 'react';
import './Facts.css'


export const Facts = () => {
    const [facts, setFacts] = useState([]);

    const getRandomFact = () => {
        fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(res => res.json())
        .then(data => setFacts([...facts, data]))
    }

    const removeFact = (index) => {
        const newFacts = [...facts];
        newFacts.splice(index, 1);
        setFacts(newFacts);
    }

    return (
        <div className="facts">
        <h2>Facts</h2>
        <button onClick={getRandomFact}> Get Fact</button>
        <ul>
            {facts.map(fact => (
            <li key={fact.id} className='factsLi'>
                <span className="fact-remove" onClick={() => removeFact(fact.id)}>👎</span>
                <span className="fact-title">{fact.text}</span>
                <a className="fact-title" href={fact.source_url}>source</a>
            </li>
            ))}
        </ul>
        </div>
    );
}
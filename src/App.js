import React, { useState, useEffect } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

function App() {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    const handleChange = (event) => {
        setSearchField(event.target.value);
    };

    const fillteredMonsters = monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <div className="App">
            <h1>Monster Rolodex</h1>
            <SearchBox
                placeholder="search monsters"
                handleChange={handleChange}
            />
            <CardList monsters={fillteredMonsters} />
        </div>
    );
}

export default App;

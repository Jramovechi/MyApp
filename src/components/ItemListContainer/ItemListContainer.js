import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (props) => {
    const [users, setUsers] = useState( [] );

    console.log(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);

    return (
            <div className='ItemListContainer'>
            
            <h1 className="Title">{props.geeting}</h1>
            
            <ItemList users={users} />
            
            </div>
            
    );
};

export default ItemListContainer;
import React, { useState, useEffect } from "react";
import CardComponent from "../CardComponent/CardComponent"; 

const ItemList = () => {
    const [users, setUsers] = useState( [] );

    console.log(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);

    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id}>   
                        <CardComponent data={user} />
                    </div>
                );
            })}
            
        </div>
    );
};

export default ItemList;

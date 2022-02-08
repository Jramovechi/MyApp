import React from "react";
import Item from "../Item/Item"; 

const ItemList = ( { users } ) => {

    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id}>   
                        <Item data={user} />
                    </div>
                );
            })}
            
        </div>
    );
};

export default ItemList;

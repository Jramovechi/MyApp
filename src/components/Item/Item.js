import * as React from "react";
import "./Item.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Item = ({ data }) => {
    return (
        <div className="Item">
            <Card
                style={{ margin: 40 }}
                sx={{ maxWidth: 345 }}
            >
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.email}
                </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Item;

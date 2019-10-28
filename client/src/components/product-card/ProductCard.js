 import React from "react";
import "./ProductCard.css";

const ProductCard = props => (
	<div class="photoCards" onClick={props.imageOnClick}> 
        <div class="img-container">
            <img alt={props.image.replace(".jpg", "")} img src={require("../images" + props.image)} />
        </div>
    </div>
);

export default ProductCard;
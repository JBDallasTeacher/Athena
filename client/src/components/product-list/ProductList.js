// imports dependencies and files
import React, { Component } from "react";
import ProductCard from "../product-card/ProductCard";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import products from "../hockey.json";

class ProductList extends Component { 
    state = {
        products, 
        clickedHockey:[]
    };

    // When hockey product photo is clicked
    hockeyOnClick = event => {
        const currentHockey = event.target.alt;
        const hockeyClicked = this.state.clickedHockey.indexOf(currentHockey);

        // Hockey product opens to a new window where you can purchase the product
        if (hockeyClicked) {
            this.setState({
                hockey: this.state.hockey(function(a, b) {
                    return 
                })
            })
        }




    }


    render() {
        return (
            <div>
                <div className="wrapper">
                    <List>
                    {this.state.products.map(product => (
                        <ListItem key={product.id}>
                        <Link to={"/products/" + product.id}>
                            <ProductCard imageOnClick={this.imageOnClick}
                            id={product.id}
                            key={product.id}
                            image={product.image}
                            />
                            </Link>
                            </ListItem>
                    ))}
                    </List>
                </div>
            </div>
        );
    }
}

export default ProductList;


















































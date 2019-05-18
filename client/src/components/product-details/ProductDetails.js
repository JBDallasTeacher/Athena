import React, { Component } from "react";
import API from "../../utils/API";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                'title': 'Sample Product',
                'description': 'My Product description'
            }
        };
    }
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => this.setState({ product: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
            <div>
              <h1>
                {this.state.product.title}
              </h1>
            <article>
              <h1>Description</h1>
              <p>
                {this.state.product.description}
              </p>
            </article>
        </div>
    );
  }
}

export default ProductDetails;

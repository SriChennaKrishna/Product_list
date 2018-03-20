import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as userActions from "../actionCreators/products";

class ProductList extends Component {
  componentDidMount() {
    const products = {
      "products": [
        {
          "reviewURL": "assets/images/rating-4_0.gif",
          "imageUrl": "//pics.drugstore.com/prodimg/389604/450.jpg",
          "prodId": "1",
          "productDisplayName": "Herbal Essences Body Envy Volumizing Shampoo Citrus",
          "reviewHoverMessage": "4.5 out of 5",
          "priceInfo": {
            "regularPrice": "$3.99",
            "unitPrice": "$0.39"
          },
          "shippingChargeMsg": "FREE shipping on orders of $35 or more.",
          "prodDescription": "Body Envy Volumizing Shampoo will help show you the difference between body and big hair.  It's all about body with a lightweight formula fused with passion flower sunrise and pearl.  This exhilarating clean will help lift you up."
        },
        {
          "reviewURL": "assets/images/rating-2_1.gif",
          "imageUrl": "https://pics.drugstore.com/prodimg/397325/900.jpg",
          "prodId": "prod6013608",
          "productDisplayName": "Boost Original, Complete Nutritional Drink Rich Chocolate",
          "reviewHoverMessage": "2.0 out of 5",
          "priceInfo": {
            "regularPrice": "$8.49",
            "unitPrice": "$0.30",
            "unitPriceSize": "oz."
          },
          "shippingChargeMsg": " Ship to Store FREE! ",
          "prodDescription": "This drink contains Prebio1 blend which is a proprietary blend of prebiotic fibers designed to help promote the growth of beneficial intestinal bacteria and support a healthy digestive system."
        },
        {
          "reviewURL": "assets/images/rating-2_9.gif",
          "imageUrl": "//pics.drugstore.com/prodimg/345542/450.jpg",
          "prodId": "prod6013608",
          "productDisplayName": "Head & Shoulders Classic Clean Dandruff Shampoo",
          "reviewHoverMessage": "3.0 out of 5",
          "priceInfo": {
            "regularPrice": "$5.26",
            "unitPrice": "$0.30",
            "unitPriceSize": "oz."
          },
          "shippingChargeMsg": "Buy 1, Get 1 50% OFF",
          "prodDescription": "Benefits: removes flakes*, calms itching*, relieves irritation*, reduces redness.*, great scent, fights dryness, leaves hair beautiful."
        },
        {
          "reviewURL": "assets/images/rating-1_0.gif",
          "imageUrl": "//pics.drugstore.com/prodimg/28117/900.jpg",
          "prodId": "prod6013608",
          "productDisplayName": "Nature Made Calcium, Magnesium &  Zinc, Tablets",
          "reviewHoverMessage": "1.0 out of 5",
          "priceInfo": {
            "regularPrice": "$6.82",
            "unitPrice": "$0.30",
            "unitPriceSize": "oz."
          },
          "shippingChargeMsg": " Ship to home FREE at $35! ",
          "prodDescription": "   Take one tablet up to three times daily with meals. Keep bottle tightly closed. Store in a cool, dry place, out of reach of children. © Pharmavite Corporation"
        }
      ]
    }
    this.props.actions.getProductsSuccess(products);
  }

  render() {
    const { productCard } = this.props.products;
    let prodArr = [];
    if (productCard && productCard.products && productCard.products.length > 0) {
      prodArr = productCard.products;
    }
    return <div className="container">

      <div className="prod-name">
        <h2 className="prod-head-tile">Products</h2>
      </div>
      <ul>
        {prodArr.map((item, index) => <li key={index} style={{ 'list-style': 'none' }}>
          <div className="col-md-3">
            <div className="each-product">
              <div className="product-image-properties">
                <img alt={item.productDisplayName} src={item.imageUrl} className="images" />
              </div>
              <div className="prod-name">
                <h4 className="product-name">{item.productDisplayName}</h4>
              </div>
              <p className="product-price">{item.priceInfo.regularPrice}</p>

              <div className="product-button">
                <button type="button" className="cart-add-button">Add To Cart</button>
                <button type="button" className="cart-add-button">View Details</button>
              </div>
            </div>
          </div>
        </li>)}
      </ul>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);


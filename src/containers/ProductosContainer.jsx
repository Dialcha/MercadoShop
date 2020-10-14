import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/actions";
import Productos from "../components/Productos";

class ProductosContainer extends Component {
    constructor(props) {
        super(props);
        if (this.props.match.path === "/search/:keyword") {
            this.props.onCategoryClick(this.props.match.params.keyword);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props);
        console.log(nextProps);
    }

    render() {
        return(
            <div>
                <Productos />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onCategoryClick: (keyword) =>
        dispatch(fetchProductos(keyword)),
    };
  };
  
  const mapStateToProps = (state) => {
    const { fetchProductos } = state;
    return { fetchProductos };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ProductosContainer);
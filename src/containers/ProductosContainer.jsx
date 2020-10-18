import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/actions";
import Productos from "../components/Productos";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRouteChange: async (keyword) => {
      await dispatch(fetchProducts(keyword));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    items: state.fetchProductos.productos.items
  }
};

const ProductosFetch = connect(mapStateToProps, mapDispatchToProps)(Productos);

export default ProductosFetch;

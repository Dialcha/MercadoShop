import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/actions";
import Productos from "../components/ProductosCopy";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRouteChange: (keyword) => {
      dispatch(fetchProducts(keyword));
    },
  };
};

const ProductosFetch = connect(null, mapDispatchToProps)(Productos);

export default ProductosFetch;
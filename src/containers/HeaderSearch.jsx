import { connect } from 'react-redux'
import { fetchProducts } from '../redux/actions/actions';
import Header from '../components/Header';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(fetchProducts('iphone'))
        }
    }
}

const HeaderSearch = connect(
    null,
    mapDispatchToProps
)(Header)

export default HeaderSearch;
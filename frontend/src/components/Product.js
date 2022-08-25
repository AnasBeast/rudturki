import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import { color } from '@mui/system';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <div>
      <Card.Body className='p-10'>
        <Link to={`/product/${product.slug}`} style={{ textDecoration: 'none', color:"black" }}>
          <div className='d-flex align-items-center shadow-lg rounded-lg flex-wrap row overflow-hidden bg-white'>
            <div className='col-md-3 p-0'>
              <img src={"../images/judge-icon22.png"} className="w-100" alt={product.name} />
            </div>
            <div class="judge-content flex items-center px-3 col-md-9"><h3 dir="ltr" class="text-gray-700 ">{product.name}</h3></div>
          </div>
        </Link>        
      </Card.Body>
    </div>
  );
}
export default Product;

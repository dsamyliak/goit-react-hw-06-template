// import { LoginPage } from 'pages/LoginPage';
// import { useSelector, useDispatch } from 'react-redux';
import { AppBar } from './AppBar';
import { Outlet } from 'react-router-dom';

// import { add, remove } from '../redux/items/slice';
// import { increment, decrement} from '../redux/myValue/slice';

export const Layout = () => {
  // const dispatch = useDispatch();
  // const value = useSelector(state => state.myValue);
  // const items = useSelector(state => state.items);

  return (
    <div>
      {/* {value}
      <button onClick={() => dispatch(increment(100))}>Increment</button>
      <button onClick={() => dispatch(decrement(50))}>Decrement</button> */}
      <AppBar />
      <Outlet />

      {/* <ul>{items.map(item => <li key={'id' + item}>{item}</li>)}</ul>
      <button onClick={() => dispatch(add('text'))}>Add Text</button> */}
    </div>
  );
};

import {createStore} from 'redux';
import cartReducer from '../../../redux-app/src/newone/Reducer';

const Store = createStore(
    cartReducer,
    window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTEN
);
export default Store;
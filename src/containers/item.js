
import {connect} from 'react-redux';
//引入UI组件
import Item from '../components/item';
//引入action creators
import {item} from '../redux/actions';
//暴露容器组件
export default connect(

)(Item);
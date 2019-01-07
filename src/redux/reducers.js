/**
 * Created by Administrator on 2019/1/5.
 */
import {combineReducers} from 'redux'



function xxx(state = 0, action) {
  
  return state
}

function yyy(state = {}, action) {
  
  return state
}

// 返回合并后的reducer函数
//暴露出的就是对象，value为函数名，函数式为值
export default combineReducers({
  xxx,
  yyy
})
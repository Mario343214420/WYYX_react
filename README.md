
redux配置
store会使用reducers，reducers会使用action-types，
先action系列，然后reducers，最后store
action，使用多个创建action的action的creators
其中有同步action creator，会创建并返回action对象
异步action creator，会创建并返回dispatch => {xxx}

import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'


const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState,action)=>{
    console.log(action.type)
    // console.log(123,state,action)
    if(action.type === "changeInput"){
        console.log("执行change")
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === "addItem"){
        console.log("执行更新item")
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === "DELETE_ITEM"){
        // console.log("执行更新del")
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1);
        return newState
    }
    if(action.type === "getList" ){ //根据type值，编写业务逻辑
        console.log("接口获取");
        let newState = JSON.parse(JSON.stringify(state))
        console.log(1213213,action.data)
        newState.list = action.data.list //复制性的List数组进去
        return newState
    }
    
    return state

    
}
import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './State/index';

export default function Button() {
     const dispatch = useDispatch()
    return (
       <button onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+ Increment</button>
    )
}

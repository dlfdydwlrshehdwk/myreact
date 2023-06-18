import { Table } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../src/store/userSlice';
import { plusAge } from '../../src/store/userSlice';
import {plusCount} from '../store.js'

function Cart(){

    let state = useSelector((state)=>{return state})
    let data = state.data
    let dispatch = useDispatch()
    // console.log(state.data);

    return(
        <div>
            <button onClick={()=>{
            dispatch(changeName())
            }}>
            {state.user.name}{state.user.age}의 장바구니</button>
            <button onClick={()=>{
                dispatch(plusAge(10))
            }}>버튼</button>
        <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((x,i)=>{
                        return(
                            <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{x.name}</td>
                            <td>{x.count}</td>
                            <td>
                                <button onClick={()=>{
                                    dispatch(plusCount(state.data[i].id))
                                    }}>+</button>
                            </td>
                            </tr>   
                        )
                    })
                }

                
            </tbody>
        </Table>
        </div>
    )
}

export default Cart;


// 수정함수를 먼저 만들고
// 수정함수좀 실행해주세요라고 함
// store.js에 부탁하는메세지를 적음

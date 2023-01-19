import React, {useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks";
import {fetchUsers} from "./store/reducers/ActionCreators";

function App() {
    const [checked, setChecked] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {users, error, isLoading} = useAppSelector(state => state.userReducer)


    function handlerChecked() {
        setChecked(!checked)
        if (!checked){
            dispatch(fetchUsers())
        }

    }

  return (
    <div>
        {isLoading && <p>Идет загрузка</p>}
        {error && <p>{error}</p>}
        <div className='container'>
            <label className='checkbox'>
                <input type="checkbox" onChange={handlerChecked} className='invisible-checkbox'/>
                <span className='visible-checkbox'></span>
            </label>
            <span> Загрузить список с сервера </span>
        </div>

        {users.map(m=><p key={m.id}>{m.name}</p>)}
    </div>
  );
}

export default App;
import React, {useState, useEffect} from 'react';
import {IUser} from './IUser'
import {getDataPromise, getUnsplashPromise} from './getDataPromise'
import {Card} from './Card'
import './App.css'

function App() {
  const limit = 1
  const [skip, setSkip] = useState(0)
  const [users, setUsers] = useState<IUser[]>([])
  const [srcs, setSrcs] = useState<string[]>([])

  const onClick = () => {
    getDataPromise((receivedUsers: IUser[]) => {
      setSkip(skip + limit)
      setUsers([...users, ...receivedUsers])
    })(skip, limit)

    getUnsplashPromise((receivedSrcs: string[]) => {
      setSrcs([...srcs, ...receivedSrcs])
    })(limit)
  }
  useEffect(onClick, [])

  return (
    <div className='App'>{
      users.map((user: IUser, key:number) => (<Card user={user} json={srcs[key]} click={onClick} key={key.toString()} />))
    }</div>
  )
}

export default App;

import React from 'react'
import {IUser} from './IUser'

export const Card: React.FC<{user:IUser, json:string, click: () => void}> = ({user, json, click}) => {
  const {name, email, sentence, profession, birthday} = user
  const b = new Date(birthday)
  const src = json ? JSON.parse(JSON.stringify(json)).urls.small : ''

  return (
    <div className='card'>
      <img src={src} className={'card-img-top'} />
      <div className='card-body'>
        <h5 className='card-title'>{name} ({email})</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{profession} birthday: {b.getFullYear()}</h6>
        <p className='card-text'>{sentence}</p>
        <a href='#' className='btn btn-primary' onClick={click}>more data...</a>
      </div>
    </div>
  )

}

export default Card

import {IUser} from './IUser'
import axios from "axios";

type GetDataPromiseCallback = (a: IUser[]) => void
type GetUnsplashPromiseCallback = (a: string[]) => void
const api = process.env.REACT_APP_UNSPLASH_API
export const getDataPromise = (fn: GetDataPromiseCallback) => (skip:number, limit: number) => {
  fetch(`https://172.105.196.169:4000/${skip}/${limit}`)
    .then(res => res.json())
    .then(fn)
}

export const getUnsplashPromise = (fn: GetUnsplashPromiseCallback) => (limit: number) => {
  fetch(`https://api.unsplash.com/photos/random?count=${limit}`,{
    headers: {
      Authorization:
        'Client-ID ' + api
    }
  }).then(res => res.json())
    .then(res => fn([...res]))
}
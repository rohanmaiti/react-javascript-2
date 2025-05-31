import React from 'react'
import {useContext} from "react";
import { MyContext } from './Dashboard';
export const Profile = () => {
    const user = useContext(MyContext)
  return (
    <> 
        <div>Profile of {user.name} and his age is {user.age}</div>
    </>

  )
}

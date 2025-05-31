import React from 'react'
import {useContext} from "react";
import {MyContext} from "./Dashboard";


export const Sidebar = () => {
    const user = useContext(MyContext);
  return (
    <>
      <div>Sidebar of {user.name}</div>
    </>
  )
}

import React from 'react'
import {createContext} from 'react'
import {Profile} from "./Profile";
import {Sidebar} from "./Sidebar";

export const MyContext = createContext();
export const Dashboard = () => {
    let user = {
        name:"Rohan Maiti",
        age:21
    }
  return (
    <>
    <MyContext.Provider value={user}>
    <div>Dashboard</div>
    <Sidebar/>
    <Profile/>
    </MyContext.Provider>
    </>
  )
}

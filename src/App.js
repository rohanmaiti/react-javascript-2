import "./App.css";
// import Heading from './Components/Func_01';
import { Heading } from "./Components/Func_01";
import Headings from "./Components/Func_02";
import ClassComp01 from "./Components/Class_01";
import ClassComp02 from "./Components/Class_02";
import ClassComp03 from "./Components/Class_03";
import ClassComp04 from "./Components/Class_04";
import ClassComp05 from "./Components/Class_05";
import Click from "./Components/Func_03_evntHndl";
import ClassComp06 from "./Components/Class_06";
import Form from "./Components/Form_07";
import From_08 from "./Components/Form_08";
import Form_Image from "./Components/Form_img_09";

import Life_cycle_01 from "./LifeCycle/lifeCycle_01";

import Ques_01 from "./questions/ques_01";
import Ques_02 from "./questions/ques_02";

import Counter from "./Components/func_04_state";
import Input from "./Components/Func_05";

import Css from "./Components/Func_06_css";

import Todo from "./todo/todoComponent/input";

// learing useContext hook
import { Dashboard } from "./useContextHook/Dashboard";

// learning Routes
import { Router, Routes, Route, Outlet } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

import { Home } from "./Routing/Home";
import { About } from "./Routing/About";
import { Profile } from "./Routing/Profile";
import { User } from "./Routing/User";
import { Dashboard2 } from "./Routing/Dashboard2";
import { Demo } from "./ErroBoundry/Demo";
function App() {
  const flexStyle = {
    display: "flex",
    gap: "10px",
  };
  const user = true;
  return (
    <div className="App">
      {/* <Heading/> */}
      {/* <ClassComp01/> */}

      {/*Functional Comp with props*/}
      {/* <Headings/> */}
      {/* <Headings name="Rohan" age="21" /> */}
      {/* <Headings name="Rahul" age="27"> <p>Children of Rahul</p> </Headings> */}

      {/*Class Comp with props*/}
      {/* <ClassComp02/> */}
      {/* <ClassComp02 num="01"/> */}
      {/* <ClassComp02 num="02"> <p>children class Comp</p> </ClassComp02> */}

      {/*state management*/}
      {/* <ClassComp03/> */}
      {/* <ClassComp04/> */}
      {/* <ClassComp05/> */}

      {/* <ClassComp06 className="abc" list={[1,2,3,4,5,6,7]}/>
       <Click/> */}

      {/*form data handiling*/}
      {/* <Form/> */}
      {/* <From_08/> */}

      {/* Lyfe Cycle method */}
      {/* <Life_cycle_01/> */}

      {/* <Ques_01/> */}
      {/* <Ques_02/> */}

      {/* use state  hook */}
      {/* <Counter/> */}
      {/* <Input/> */}

      {/* styling  */}
      {/* <Css/> */}

      {/* <Todo/> */}

      {/* <Form_Image/> */}
      {/* Learing useContext() and createContext() START*/}
      {/* <Dashboard/> */}
      {/* Learing useContext() and createContext() ENDS*/}

      {/* Learing Routes START */}
      <div style={flexStyle}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </div>
      {/* basic  */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>404 Page not found</h1>}/>
        {/* dynamic routing */}
        <Route path="/user/:id" element={<User/>}/>
        {/* Navigate */}
        <Route path="/homepage" element={<Navigate to="/home"/>}/>
        {/* nested routing -1*/}
        <Route path="/dashboard/*" element={<Dashboard2 />} />
        {/* nested routing -2 */}
        <Route path="dashboard3" element={<h1>Dashboard-3 <Outlet/> </h1>}>
          <Route index element={<h5>Dashboard Home page</h5>} />
          <Route path="settings" element={<h1>Setting</h1>} />
        </Route>

        {/* layout route */}
        {/* Routes without a path create new nesting for their children, but they don't add any segments to the URL. */}
        <Route element={<h1> MarketingLayout <Outlet /> </h1>}>
          <Route index element={<h3>Marketing Home</h3>} />
          <Route path="contact" element={<h3>Marketing contact</h3>} />
        </Route>

        {/* layout route - 2 */}
        {/* <Route path="projects">
          <Route index element={<h4>Project Home</h4>} />
          <Route
            element={
              <div>
                {" "}
                Project Layout <Outlet />
              </div>
            }
          >
            <Route path=":pid" element={<h3>Pid</h3>} />
            <Route path=":pid/edit" element={<h3>Edit PID</h3>} />
          </Route>
        </Route> */}

        {/* protected route  */}
        {/* <Route element={!user? <Outlet/> : <Navigate to='home' /> }  >
          <Route path='login' element={<h3>Login page</h3>}  />
        </Route> */}
      </Routes>




      {/* Learn Error Boudary  in ErrorBoundry folder*/}
      <Demo/>
    </div>
  );
}

export default App;

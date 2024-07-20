import './App.css';
// import Heading from './Components/Func_01';
import {Heading} from './Components/Func_01';
import Headings from './Components/Func_02';
import ClassComp01 from './Components/Class_01';
import ClassComp02 from './Components/Class_02';
import ClassComp03 from "./Components/Class_03"
import ClassComp04 from './Components/Class_04';
import ClassComp05 from './Components/Class_05';
import Click from './Components/Func_03_evntHndl';
import ClassComp06 from './Components/Class_06';
import Form from './Components/Form_07';
import From_08 from './Components/Form_08';

import Life_cycle_01 from './LifeCycle/lifeCycle_01';

import Ques_01 from './questions/ques_01';
import Ques_02 from "./questions/ques_02"

import Counter from './Components/func_04_state';
import Input from './Components/Func_05';

import Todo from './todo/todoComponent/input';

function App() {
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

       <Todo/>
    </div>
  );
}

export default App;

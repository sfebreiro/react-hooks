import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";
import { MainApp } from './09-useContext/MainApp';
// import { TodoApp } from './08-useReducer/TodoApp'
// import { Padre } from './07-tarea-memo/Padre'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks.jsx'
// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>

)

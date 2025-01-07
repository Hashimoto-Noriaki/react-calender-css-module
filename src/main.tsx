import React from 'react'
import ReactDOM from 'react-dom/client'
import { TopPage } from "./components/pages/TopPage";
import './styles/destyle.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TopPage/>
  </React.StrictMode>,
)

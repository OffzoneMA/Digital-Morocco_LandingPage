import React from "react";
import ReactDOM from 'react-dom/client';
import View from "./View";

// CONTAINER 🧊
const container = document.getElementById('root');

// CREATE ROOT 🪸
const root = ReactDOM.createRoot(container!);

// RENDER ⚡
root.render(<View />);

// LOG ENVIRONMENT
console.log(process.env.NODE_ENV);
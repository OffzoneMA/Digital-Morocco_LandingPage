import React from "react";
import ReactDOM from 'react-dom/client';
import View from "./View";
import LogRocket from 'logrocket';
// import { v4 as uuidv4 } from 'uuid';
// import setupLogRocketReact from 'logrocket-react';


// LogRocket.init('yyzfsk/digital-morocco-landing-page');

// const uid = uuidv4();
// LogRocket.identify(uid);

// setupLogRocketReact(LogRocket);



// CONTAINER 🧊
const container = document.getElementById('root');

// CREATE ROOT 🪸
const root = ReactDOM.createRoot(container!);

// RENDER ⚡
root.render(<View />);

// LOG ENVIRONMENT
console.log(process.env.NODE_ENV);
import 'react-toastify/dist/ReactToastify.css';
// import 'animate.css';

import React, { Suspense } from 'react'
import { useRoutes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import appRoutes from "./routes"

const BaseApp = () => {
    const content = useRoutes(appRoutes)
  return (
    <Suspense fallback={<h2>Loading...</h2>} >
    <ToastContainer/>
    {content}
    </Suspense>
  )
}

export default BaseApp
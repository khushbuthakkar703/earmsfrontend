import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import BaseApp from './BaseApp';
import { BrowserRouter as BaseRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BaseRouter>
      <ToastContainer limit={1} />
      <BaseApp />
    </BaseRouter>
  );
}

export default App;

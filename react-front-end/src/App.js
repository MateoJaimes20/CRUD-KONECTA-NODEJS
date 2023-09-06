import './App.css';

//IMPORTAMOS COMPONENTES
import CompShowEmpleados from './empleado/ShowEmpleados';
import CompCreateEmpleado from './empleado/CreateEmpleado';
import CompShowSolicitudes from './solicitud/ShowSolicitudes';
import CompCreateSolicitud from './solicitud/CreateSolicitud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowEmpleados/>} />
          <Route path='/create' element={<CompCreateEmpleado/>} />
        </Routes>
        <Routes>
        <Route path='/' element={<CompShowSolicitudes/>} />
        <Route path='/createSolicitud' element={<CompCreateSolicitud/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

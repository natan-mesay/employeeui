
import Navbar from './components/Navbar';
import './App.css';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path='/EmployeeList' element={<EmployeeList />}></Route>
          <Route index element={<EmployeeList />}></Route>
          <Route path='/AddEmployee' element={<AddEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

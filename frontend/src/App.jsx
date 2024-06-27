import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentRegistrationLogin from './components/Student/StudentRegistrationLogin';
import TeacherRegistrationLogin from './components/Teacher/TeacherRegistrationLogin';
import InstitutionRegistrationLogin from './components/Institution/InstitutionRegistrationLogin';
import CenterRegistrationLogin from './components/Center/CenterRegistrationLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student/register" element={<StudentRegistrationLogin />} />    
        <Route path="/teacher/register" element={<TeacherRegistrationLogin />} />  
        <Route path="/institution/register" element={<InstitutionRegistrationLogin />} />  
        <Route path="/center/register" element={<CenterRegistrationLogin />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
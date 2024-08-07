import { BrowserRouter, Route, Routes } from 'react-router-dom';
//loginPage
import LandingPage from './pages/LandingPage';
import StudentRegistrationLogin from './components/Student/StudentRegistrationLogin';
import TeacherRegistrationLogin from './components/Teacher/TeacherRegistrationLogin';
import InstitutionRegistrationLogin from './components/Institution/InstitutionRegistrationLogin';
import CenterRegistrationLogin from './components/Center/CenterRegistrationLogin';

//students
import UpdateProfile from './components/Student/UpdateProfile';
import StudentHome from './pages/StudentHome';
import InstitutionsList from './components/Student/InstitutionsList';
import AdminHome from './pages/AdminHome';
import InstitutionDetails from "./components/Student/InstitutionDetails";
import CentersList from "./components/Student/CentersList";
import CenterDetails from "./components/Student/CenterDetails";
import MaterialList from './components/Student/MaterialList';
import AdminLogin from './components/Admin/AdminLogin';
import ApprovalsPage from './components/Admin/ApprovalsPage';
import InstitutionsPage from './components/Admin/InstitutionsPage';
import CentersPage from './components/Admin/CentersPage';
import CenterDetail from './components/Admin/CenterDetail';

//Institutions
import InstitutionHome from "./pages/InstitutionHome";
//Teacher
import TeacherHome from "./pages/TeacherHome";
//Center
import CenterHome from "./pages/CenterHome";
import StudentProfile from './components/Student/StudentProfile';


import PdfHome from './pages/PdfHome';
import TeacherUploadMaterial from './components/Teacher/TeacherUploadMaterial';
import InstitutionAdmission from './components/Institution/InstitutionAdmission';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student/register" element={<StudentRegistrationLogin />} />    
        <Route path="/teacher/register" element={<TeacherRegistrationLogin />} />  
        <Route path="/institution/register" element={<InstitutionRegistrationLogin />} />  
        <Route path="/institution/admissions" element={<InstitutionAdmission />} />
        <Route path="/center/register" element={<CenterRegistrationLogin />} />  
        <Route path="/admin/login" element={<AdminLogin />} /> 
        <Route path="/student/home" element={<StudentHome />} />
        <Route path="/admin/home" element={<AdminHome/>}/> 
        <Route path="/student/institution" element={<InstitutionsList />} /> 
        <Route path="/student/home" element={<StudentHome />} /> 
        <Route path="/student/institution" element={<InstitutionsList />} />
        <Route path="/student/institution/:id" element={<InstitutionDetails/>} /> 
        <Route path="/student/centre" element={<CentersList />} />
        <Route path="/student/center/:id" element={<CenterDetails />} />
        <Route path="/student/materials" element={<MaterialList/>}/>
        <Route path="/admin/approvals" element={<ApprovalsPage />} />
        <Route path="/admin/institutions" element={<InstitutionsPage />} />
        <Route path="/admin/centers" element={<CentersPage />} />
        <Route path="/admin/institutions/:id" element={<InstitutionDetails />} />
        <Route path="/admin/centers/:id" element={<CenterDetail />} />
        <Route path="/institution/home" element={<InstitutionHome />} />
        <Route path="/teacher/home" element={<TeacherHome/>} />
        <Route path="/center/home" element={<CenterHome />} />
        <Route path="/student/profile/:id" element={<StudentProfile />} />
        <Route path="/student/updateProfile/:id" element={<UpdateProfile />} /> {/* Assuming UpdateProfile component exists */}
        <Route path="/pdf/home" element={<PdfHome />} /> 
        <Route path="teacher/upload/material"element={<TeacherUploadMaterial/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

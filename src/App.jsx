
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Participante from "./pages/Participante";
import Admin from "./pages/Admin";
import SuperAdmin from "./pages/SuperAdmin";
import Participantes from "./pages/Participantes";
import Administradores from "./pages/Administradores";
import Charlas from "./pages/Charlas";
import Metricas from "./pages/Metricas";

export default function App(){
return <BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/participante" element={<Participante/>}/>
<Route path="/admin" element={<Admin/>}/>
<Route path="/superadmin" element={<SuperAdmin/>}/>
<Route path="/superadmin/participantes" element={<Participantes/>}/>
<Route path="/superadmin/admins" element={<Administradores/>}/>
<Route path="/superadmin/charlas" element={<Charlas/>}/>
<Route path="/superadmin/metricas" element={<Metricas/>}/>
</Routes>
</BrowserRouter>
}

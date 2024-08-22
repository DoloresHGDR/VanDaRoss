import { Route, Routes, Navigate} from 'react-router-dom';
import Dashboard from '../components/dashboard';
import DashboardAdmin from '../components/dashboardAdmin';
import Panel from '../components/panel'



const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/dashboardAdmin" element={<DashboardAdmin/>} />
            <Route path="/panel" element={<Panel/>} />
            <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
    )
}

export default PrivateRoutes;
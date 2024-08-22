import { Route, Routes, Navigate} from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import Register from '../components/register';
import Api from '../components/api'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/api" element={<Api/>} />
            <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
    )
}

export default PublicRoutes;

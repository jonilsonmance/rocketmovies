import { CreateMovie } from '../pages/CreateMovie';
import { Routes, Route } from 'react-router-dom';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateMovie />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

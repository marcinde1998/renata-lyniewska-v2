import './AppRoutes.css';
import { Route, Routes } from 'react-router-dom';

import Home from "../vievs/Home";
import AboutUs from '../vievs/AboutUs';
import Blog from '../vievs/Blog';
import Contact from '../vievs/Contact';
import Galery from '../vievs/Galery';
import Shop from '../vievs/Shop';


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
    );

}

export default AppRoutes;
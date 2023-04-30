import { Route, Routes } from 'react-router-dom';

import axios from 'axios';
import Home from "../vievs/Home";
import AboutUs from '../vievs/AboutUs';
import Blog from '../vievs/Blog';
import Contact from '../vievs/Contact';
import Galery from '../vievs/Galery';
import Shop from '../vievs/Shop';
import { useEffect, useState } from 'react';
import LoginModerator from '../vievs/LoginModerator';
import AddPost from '../vievs/AddPost';


const AppRoutes = () => {

    const [blogPostBase, setBlogPostBase] = useState([]);
    const getBlogPostList = () => {
        axios.get('http://localhost:8080/show/blog/posts').then((req) => {
            setBlogPostBase(req.data);
        });
    }
    useEffect(() => {
        getBlogPostList();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blog" element={<Blog getBlogPostList={blogPostBase} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login/moderator/103201337/kitel/page" element={<LoginModerator />} />
            <Route path="/login/moderator/103201337/kitel/page/addpost" element={<AddPost getBlogPostList={blogPostBase}/>} />
        </Routes>
    );
};

export default AppRoutes;
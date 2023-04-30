import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


const LoginModerator = () => {


    const [userPass, setUserPass] = useState([]);
    const getUserPass = () => {
        axios.get('http://localhost:8080/show/users/moderator').then((req) => {
            setUserPass(req.data);
        });
    };
    useEffect(() => {
        getUserPass();
    }, []);

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;

        setLoginData({
            ...loginData,
            [name]: target.value
        });
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (loginData.username === userPass[0].username && loginData.password === userPass[0].password) {
            navigate("/login/moderator/103201337/kitel/page/addpost");
        } else {
            window.alert("Błędny login lub hasło!");
        };
    };

    return (
        <div className="login">
            <h2>Logowanie</h2>

            <form onSubmit={handleSubmit} action="" method="POST">
                <label htmlFor="username">Login: </label>
                <input type="text" name="username" id="username" value={loginData.username} onChange={handleInputChange} required></input><br />

                <label htmlFor="password">Hasło: </label>
                <input type="text" name="password" id="password" value={loginData.password} onChange={handleInputChange} required></input><br />

                <input type="submit" value="Zaloguj"></input>

            </form>
        </div>
    );
};

export default LoginModerator;
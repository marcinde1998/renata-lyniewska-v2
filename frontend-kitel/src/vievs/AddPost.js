import axios from "axios";

import React, { useState } from "react";

function AddPost(props) {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/add/post/to/blog/posts', {
            title: formData.title,
            content: formData.content
        });
    }

    const deletePost = (id) => {
        console.log(id);
        axios.delete('http://localhost:8080/delete/' + id, {
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.error(error);
        });
    }



    return (
        <div className="containerAddCustomer">
            <h2>Zarządzanie postami</h2>
            <form onSubmit={handleSubmit} action="/login/moderator/103201337/kitel/page" method="POST">
                <label htmlFor="title">Tytuł</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={handleInputChange} required></input>
                <label htmlFor="content">Treść posta</label>
                <input type="text" name="content" id="content" value={formData.content} onChange={handleInputChange} required></input>
                <input type="submit" value="Dodaj" className="btn"></input>
            </form>

            <div className="postSection">
                <div className="postSectionContainer" >
                    {props.getBlogPostList.map(blogPost => {
                        return (
                            <div key={blogPost._id}>
                                <div>{blogPost._id}</div>
                                <div>{blogPost.title}</div>
                                <div>{blogPost.content}</div>
                                <button onClick={() => {
                                    let id = blogPost._id;
                                    deletePost(id);
                                }}>Usuń</button>
                                <button onClick={() => {
                                    console.log(blogPost._id);
                                }}>Klik!</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default AddPost;
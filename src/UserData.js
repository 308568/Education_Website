import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; 

const UserData = () => {
    const [data, setData] = useState([]);

    // Fetch user data
    const loadData = async () => {
        try {
            const result = await Axios.get('http://localhost:3000/User');
            setData(result.data);
        } catch (error) {
            console.log("Error fetching data", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // Delete user
    const deleteUser = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                
                const updatedData = data.filter((user) => user.id !== id);
                setData(updatedData);
                // Make delete request to server
                await Axios.delete(`http://localhost:3000/User/${id}`);
            } catch (error) {
                console.error("Error deleting user", error);
            }
        }
    };

    return (
        <table className="table table-hover table-striped text-center my-3">
            <thead className="fw-bold">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    {/* <th>Password</th> */}
                    <th>Education</th>
                    <th>Skill</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="fw-normal">
                {data.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.pass}</td>
                        <td>{user.skill1}</td>

                        <td>{user.skill}</td>
                        <td>
                            <i
                                className="fa fa-trash text-danger mx-2"
                                style={{ cursor: 'pointer' }}
                                onClick={() => deleteUser(user.id)}
                            ></i>
                            <NavLink to={`/edituser/${user.id}`}>
                                <i className="fa fa-edit text-success mx-2"></i>
                            </NavLink>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserData;

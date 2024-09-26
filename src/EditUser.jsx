import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    const [skill, setSkill] = useState('');
    const [skill1, setSkill1] = useState('');

    // Fetch user data based on id
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await Axios.get(`http://localhost:3000/User/${id}`);
                setName(result.data.name);
                setEmail(result.data.email);
                // setPass(result.data.pass);
                setSkill(result.data.skill);
                setSkill1(result.data.skill1);
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };
        getData();
    }, [id]);

    // Update user data
    const updateForm = async (e) => {
        e.preventDefault();
        try {
            await Axios.put(`http://localhost:3000/User/${id}`, { name, email, skill, skill1 });
            alert('Successfully Updated!!');
            navigate('/userdata');
        } catch (error) {
            console.error("Error updating user data", error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 m-0 p-0">
                    {/* <h1 className="p-3 my-3 text-center text-warning">Edit User</h1> */}

                    <div className="c1">
                <div className="ci">

               <h1 style={{margin:'5%',color:'white'}}>Edit Form </h1>

                 </div>
           </div>

                </div>
                <form onSubmit={updateForm}>
                    <div className="row fw-bold p-4  text-light">
                        <div className="col-md-8 my-3">
                            <div className="form-group">
                                <label htmlFor="">Update Your Name :</label>
                                <input
                                    type="text"
                                    placeholder="Update your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 my-3">
                            <div className="form-group">
                                <label htmlFor="">Update Your Email :</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 my-3">
                            {/* <div className="form-group">
                                <label htmlFor="">Update Your Password :</label>
                                <input
                                    type="password"
                                    placeholder="Enter strong password"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    className="form-control"
                                />
                            </div> */}
                        </div>

                        <div className="col-md-12 my-3">
                            <label htmlFor="">Update Your Education:</label>
                            <select
                                className="form-control"
                                value={skill1}
                                onChange={(e) => setSkill1(e.target.value)}
                            >
                                <option value="None">Select Your Education</option>
                                <option value="BCA">BCA</option>
                                <option value="BCS">BCS</option>
                                <option value="BSC">BSC</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="col-md-12 my-3">
                            <label htmlFor="">Update Your Course:</label>
                            <select
                                className="form-control"
                                value={skill}
                                onChange={(e) => setSkill(e.target.value)}
                            >
                                <option value="None">Select Your Course</option>
                                <option value="ReactJS">ReactJS</option>
                                <option value="Modern JS">Modern JS</option>
                                <option value="Node JS">Node JS</option>
                                <option value="MERN Stack">MERN Stack</option>
                                <option value="AWS Solution Arch">AWS Solution Arch</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="col-md-12 text-center">
                            <button className="btn btn-danger px-4 my-3 fw-bold">Update User</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;

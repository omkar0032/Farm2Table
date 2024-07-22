import React, { useState } from 'react'
import Layout from '../../components/Layout/layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import "../../styles/AuthStyles.css"
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    //form function for handlesubmit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address,answer });
            if (res && res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('something went wrong')
        }
    }
    return (
        <Layout title={"Register Page-E-commerce app"}>
            <div className='form-container'>
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName">E-mail</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter E-mail" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName">Phone</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Phone no" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName">Address </label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Address" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName">Answer </label>
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="What is your pet name?" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register
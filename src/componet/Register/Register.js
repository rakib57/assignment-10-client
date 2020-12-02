import React, { useContext, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css'
import logo from '../../logos/Group 1329.png'



const Register = () => {
   
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const {name} = useParams();
    const history = useHistory();

    const [user, setUser] = useState({
        name: '',
        email: '',
        date: '',
        description: '',
        organization: '',
        success: ''
    })


const handleSubmit = ()=>{
    history.push('/donation')
}

const handleChange = (e) => {

    let isFieldValid = true;
    if (e.target.name === 'email') {
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (isFieldValid) {
        const newUserInfo = { ...loggedInUser };
        newUserInfo[e.target.name] = e.target.value;
        setLoggedInUser(newUserInfo);
    }
}

return (
    <div className="RegisterVolunteer">

        <Link to="/"> <img className="logo" src={logo} alt="" /> </Link>
        

        
            <form onSubmit={handleSubmit} action="">
                <h2> Register as a Volunteer </h2>
                <input type="text" name="name" onChange={handleChange} placeholder="Full Name" id="" value={loggedInUser.name} required/>

                <input type="text" name="email" onChange={handleChange} placeholder="Username or Email" id="" value={loggedInUser.email} required/>

                <input type="date" name="date" onChange={handleChange} id="" required/>

                <input type="text" name="description" onChange={handleChange} placeholder="Description" id=""  required/>

                <input type="text" name="organization" placeholder="Organize books at the library." id="" value={name} required/>

                <input 
                    style={{ 
                        background: "#3F90FC", 
                        height: "35px", color: "white", 
                        marginTop: "60px",paddingBottom:'35px', 
                        fontSize: "1.2rem" ,
                        borderRadius: "5px"
                    }}
                    type="submit"
                    value="Registration"
                    
                />
            </form>
        
    </div>
);
};

export default Register;
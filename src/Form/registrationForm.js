import React, {useState,useEffect} from 'react';
import axios from 'axios'
import './style.css'
function RegistrationForm() {

    const [userData ,setUserData] = useState([]);
    
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [mobileNum,setMobileNum] = useState('')
    const [username,setUserName] = useState('')

        const handleFormSumbit = (e) => {
        e.preventDefault();
        const dataToSubmit = {
            name,
            email,
            password,
            mobileNum,
            username,
        }
        fetch('https://ixonotest.herokuapp.com/api/User/submit-profile',{
            method: 'POST',
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
        body: JSON.stringify(dataToSubmit)
        }).then(res =>res.json())
        .then(res =>{
            console.log(res)
        })
        .catch(err => console.log('ERROR'))
    }

const getuserData = async () => {
    try {
        const data = await axios.get('https://ixonotest.herokuapp.com/api/User/get-profiles');
        console.log(data.data);
        setUserData(data.data);
    } catch (err) {
        console.log(err);
    }
};

    useEffect(() => {
        getuserData();
    }, 
    []);

    
    return(
        <form method='post' action='' onSubmit={handleFormSumbit}>
            <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="Name">Name </label>
                    <input className="form__input" type="text" value={name} onChange = {(e) => setName(e.target.value)} id="Name" placeholder="Name"/>
                </div>
                
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => setEmail(e.target.value)} placeholder="Email"/>
                </div>

                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>

                <div className="mobileNum">
                    <label className="form__label" for="mobileNum">Mobile No </label>
                    <input className="form__input" type="number"  id="mobileNo" value={mobileNum} onChange = {(e) => setMobileNum(e.target.value)} placeholder="Mobile No"/>
                </div>

                <div className="userName">
                    <label className="form__label" for="userName">UserName</label>
                    <input className="form__input" type="userName"  id="userame" value={username} onChange = {(e) => setUserName(e.target.value)} placeholder="User Name"/>
                </div>
                
            </div>
            <div className="footer">
                <button  type="submit" className="btn">Submit</button>
            </div>
        </div>
            <div className="footer1">
            
                <button  type="submit" className="btn">Clear Screen</button>
                </div>
                <div className="footer2">
                <button  type="submit" className="btn">Show List</button>
       
        </div>
        
        <div>
        <table>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>Mobile Num</th>
                </tr>
            </thead>
            <tbody>
            {userData.map((users) => {
            return (
              
                   <tr>
                        <td> {users.id}</td>
                        <td> {users.name}</td>
                        <td> {users.email}</td>
                        <td>{users.username}</td>
                        <td>{users.mobileNum}</td>
                   </tr>
            )
            })}
            </tbody>
        </table>

           

            </div>
        </form>      
    )       
}

export default RegistrationForm








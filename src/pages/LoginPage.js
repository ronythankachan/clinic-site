import React,{useState} from 'react'
import './LoginPage.css'

const signUpData = {
    titlebtn:'Sign up',
    content:'Sign up to order medicines, view your booking history and manage your orders',
    msg:'Have an account?',
    subbtn:'Login'
}
const loginData = {
    titlebtn:'Login',
    content:'Login with you account to manage orders, order medicines etc',
    msg:'Dont have an account?',
    subbtn:'Sign up'
}

const Loginpage = () => {
    const [signUp, setSignUp] = useState(true)
    const [infoData, setInfoData] =useState(signUpData)
    const toggle = () =>{
        signUp? setInfoData(loginData):setInfoData(signUpData);
        setSignUp(!signUp)
    }
    return (
        <div className="loginpage">
            <div className="loginpage__container">
                <div className="loginpage__info">
                    <div className="loginpage__info__content">
                        <h2>{infoData.titlebtn}</h2>
                        <small>{infoData.content}</small>
                    </div>
                    <div className="loginpage__info___loginbtn">
                        <small style={{opacity:0.7}}>{infoData.msg}</small>
                        <button onClick={toggle}>{infoData.subbtn}</button>
                    </div>
                </div>
                <div className="loginpage__form">
                    {
                        signUp ? <p>Sign UP</p> : <p>Login</p>
                    }
                    {/* test2 */}
                </div>
            </div>
        </div>
    )
}
export default Loginpage
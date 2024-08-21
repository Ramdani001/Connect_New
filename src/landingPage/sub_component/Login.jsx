import React, { useEffect, useState } from "react";
import axios from 'axios';
import bcrypt from 'bcryptjs'
import { format } from 'date-fns';

export default function Login(props){
    const addUser = async (userData) => {
        try {

            const response = await axios.post('http://localhost:3000/api/v1/users/regist', userData);
            
            if(response.status == 200){
                setShowAlert(true);
                // if(response_per == 200){
                    sessionStorage.setItem("id_user", userData.id_user);
                    const timer = setTimeout(() => {
                        window.location.href = '/login';
                    }, 3000);
                // }

            }
            console.log('User added:', response.status);
        } catch (error) {
            if(error.response){
                if(error.response.status == 300){
                    setshowAlertWar(true);
                }
            }
            if (error.response) {
                console.error('Response errora:', error.response.status);
                console.error('Response data:', error.response.data);
            
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    const [showForm, setShowForm] = useState(true);

        const [showPassword, setShowPassword] = useState(true);
        const [showPassword1, setShowPassword1] = useState(true);

        const [invalidPass, setInvalidPass] = useState(true);
        const currentDate = new Date();

        const [formData, setFormData] = useState({
          email: '',
          username: '',
          tipe: 2, 
          nama: '',
          no_telp: '',
          alamat: '',
          password: '',
          created_at: format(currentDate, 'yyyy-MM-dd'),
          updated_at: format(currentDate, 'yyyy-MM-dd'),
        });

        const [formLogin, setFormLogin] = useState({
            email: '',
            password: '',
        });

        const changeInput = (e) => {
            const { name, value } = e.target;

            setFormLogin(prevState => ({
              ...prevState,
              [name]: value,
            }));

        };

        const handleLogin = (e) => {
            e.preventDefault();
            checkLogin(formLogin);
            console.log(formLogin);
          };

          const checkLogin = async (userData) => {
            try {
    
                const response = await axios.post('http://localhost:3000/api/v1/users/check', userData);
                
                
                if(response.status == 200){
                    const data = response.data;
                    
                    data.map(e => {
                        
                        async function verifyPassword(password, hash) {
                            try {
                                const isMatch = await bcrypt.compare(password, hash);
    
                                if(isMatch == true){
                                    alert("Anda berhasil login");
                                    console.log("Password Sama");
                                    if(e.tipe == 1){
                                        window.location.href = '/admin';
                                    }else{
                                        window.location.href = '/';
                                    }
                                }else{
                                    alert("Password atau email salah!");
                                    console.log("Password Tidak Sama");
                                }
    
                                // console.log('Password match:', isMatch);
                                return isMatch;
                            } catch (error) {
                                console.error('Error verifying password:', error);
                            }
                        }
    
                        
                        (async () => {
                            const password = userData.password;
                            const hashedPassword = await e.password;
                            
                            // Verifikasi password
                            const isPasswordCorrect = await verifyPassword(password, hashedPassword);
                            // console.log('Is password correct?', isPasswordCorrect);
                        })();
                    });

                    // console.log(typeof(response.data));
                }
                console.log('User added:', response.status);
            } catch (error) {
                
                setshowAlertWar(true);
                if (error.response) {
                    console.error('Response errora:', error.response.status);
                    console.error('Response data:', error.response.data);
                
                } else {
                    console.error('Error:', error.message);
                }
            }
        };


        // Regist

      
        const handleChange = (e) => {
            const { name, value: rawValue } = e.target;

            let value = rawValue;
        
            if (name === "password") {
                value = bcrypt.hashSync(rawValue, 10);
            }
          setFormData(prevState => ({
              ...prevState,
              [name]: value,
            }));

        };
        const [ showAlert, setShowAlert ] = useState(false);
        const [ showAlertWar, setshowAlertWar ] = useState(false);
      
        const handleSubmit = (e) => {
          e.preventDefault();
          addUser(formData);
        };

        useEffect(() => {
            const timer = setTimeout(() => {
                setShowAlert(false);
                setshowAlertWar(false);
                // window.location.href = '/login';
            }, 3000); // 3000 ms = 3 detik
    
            // Clean up the timer if the component unmounts
            return () => clearTimeout(timer);
        }, [showAlert]); 
      
    return (
        <>
            <div className="w-full h-[100vh] grid place-center bg-gray-200 p-5">

                {/* Alert */}
                <div className={showAlert == true ? "w-full h-full mt-7 flex justify-center absolute bounce transition-all duration-700" : "hidden"}>
                    <div className="w-[300px] h-[100px] bg-green-400 shadow-md border-2 border-blue-300 rounded-md absolute">
                        <span className="p-1 text-end">
                            X
                        </span>
                        <p className="text-center p-2 font-olive">
                            Selamat Bergabung
                        </p>
                    </div>
                </div>
                {/* Terpaka */}
                <div className={showAlertWar == true ? "w-full h-full mt-7 flex justify-center absolute bounce transition-all duration-700" : "hidden"}>
                    <div className="w-[300px] h-[100px] bg-yellow-400 shadow-md border-2 border-blue-300 rounded-md absolute">
                        <span className="p-1 text-end cursor-pointer" onClick={e => setshowAlertWar(false)}>
                            X
                        </span>
                        <p className="text-center p-2 font-olive">
                            Email sudah terdaftar
                        </p>
                    </div>
                </div>
                {/* Alert */}

                <div className="w-full border-2 flex justify-center">
                        
                    <div className="w-[80%] h-full bg-white/25 shadow-md flex gap-4 p-5 border-2 border-white rounded-md">
                        <div className="bg-purple-400 p-5 w-full h-full rounded-md shadow-md">
                            <img src="images/bg3.png" alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className=" p-5 w-full h-full">
                            <span className="flex justify-end font-popins">
                                Not a member? <button className="pl-2 text-blue-400" onClick={e => setShowForm(!showForm)}>Register</button>
                            </span>
                            <div className="text-center mt-[100px]">
                                <h5 className="text-3xl font-bold font-olive">
                                    Hello, Again!
                                </h5>
                                <h6 className="pt-4 font-normal mb-5 font-popins">
                                    Wellcome back you've been missed!
                                </h6>
                            </div>

                            {/* Form Login */}
                            <div className={showForm ? "mt-5 transition-all duration-700" : "mt-5 hidden"}>
                                <form onSubmit={handleLogin}>
                                    <div className="grid place-center w-full mt-[90px] gap-5">
                                        <div className="w-full flex justify-center">
                                            <input type="text" className="py-3 shadow-md px-2 rounded-md w-[50%]" name="email" placeholder="Email" onChange={changeInput} />
                                        </div>
                                        <div className="w-full flex justify-center">
                                            <input type="text" className="py-3 shadow-md px-2 rounded-md w-[50%]" name="password" placeholder="Password" onChange={changeInput} />
                                        </div>
                                        <div className="w-full flex justify-center mt-3">
                                            <button type="submit" className="py-3 px-5 w-[50%] rounded-md shadow-md bg-orange-400 text-white">Sign In</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className={showForm ? "hidden" : "transition-all duration-700"}>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid place-center w-full  gap-5">
                                        <div className="w-full flex justify-center">
                                            <input type="email" className="py-3 shadow-md px-2 rounded-md w-[60%]" name="email" placeholder="Email" 
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <input type="text" name="username" className="py-3 w-[60%] shadow-md rounded-l-md px-2 w-[50%] border-white" placeholder="Username" onChange={handleChange} required/>
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <input type={showPassword1 ? "password" : "text"} name="password" className="py-3 shadow-md px-2 rounded-l-md w-[50%]" placeholder="Password" onChange={handleChange} required/>
                                            <div className="h-full bg-white rounded-r-md p-2">
                                                <img src={"images/eye.png"} alt="" className={showPassword1 ? "w-[30px] h-[30px] " : "hidden"} onClick={e => setShowPassword1(!showPassword1)}/>

                                                <img src={"images/close_eye.png"} alt="" className={showPassword1 ? "hidden" : "w-[30px] h-[30px]"} onClick={e => setShowPassword1(!showPassword1)}/>

                                            </div>
                                        </div>
                                        
                                        <div className="w-full flex justify-center mt-3">
                                            <button className="py-3 px-5 w-[60%] rounded-md shadow-md bg-orange-400 text-white">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Form Login */}
                            
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};
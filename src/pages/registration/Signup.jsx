import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/data/MyContext";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader2 from "../../components/loader/Loader2";

function Signup() {
  let [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const context = useContext(MyContext);
  let {loading,setLoading} = context

  const signup =  async()=>{
    
    setLoading(true)

     if(value.name === "" || value.email === "" || value.password === ""){
      return toast.error("All Fields are require")
      // return toast("wow to see")
     }

     try{
      const users = await createUserWithEmailAndPassword(auth,value.email,value.password)
      console.log(users);

      const user = {
        name:value.name,
        uid:users.user.uid,
        email:users.user.email,
        time : Timestamp.now()
      }

      const userRef = collection(fireDB,"users")
      await addDoc(userRef,user);
      toast.success("Signup Succesfully")
      setValue({
        name: "",
        email: "",
        password: "",
      });
      setLoading(false)

     }catch(err){
      console.log(err);
      toast.error("signup Failed")
      setLoading(false)
     }
  }
  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader2 />}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            value={value.name}
            onChange={(e) =>
              setValue((curr) => {
                return { ...curr, [e.target.name]: e.target.value };
              })
            }
            type="text"
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            value={value.email}
            onChange={(e) =>
              setValue((curr) => {
                return { ...curr, [e.target.name]: e.target.value };
              })
            }
            type="email"
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            value={value.password}
            onChange={(e) =>
              setValue((curr) => {
                return { ...curr, [e.target.name]: e.target.value };
              })
            }
            name="password"
            type="password"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
            onClick={() => signup()}
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;

import { TextField } from "@mui/material";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" w-[60rem] h-[40rem] border-[1px] relative flex shadow1">
        <div className="absolute bg-customorange w-full h-16 bottom-0"></div>
        <FiChevronLeft
        onClick={()=>{navigate("/")}}
          size={64}
          color="#fff"
          className=" absolute left-0 top-0 p-3 bg-customorange cursor-pointer"
        />
        <form
          action=""
          method="post"
          className="flex flex-col items-center justify-center w-1/2 gap-10"
        >
            {/* <h2 className="text-4xl font-semibold flex self-start ml-[8.2rem]">Login</h2> */}
          <TextField
            color="error"
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
          <TextField color="error" id="outlined-basic" label="Password" variant="outlined" />
          <motion.button whileHover={{backgroundColor:"#f76707",color:"#fff"}} className="text-customorange border-[2px] font-medium border-customorange px-8 py-2" type="submit">Login</motion.button>
          <Link className="text-xs tracking-wider hover:text-customorange" to="#">
            New User ? Register.
          </Link>
        </form>
        <div className="w-1/2 flex justify-center items-center overflow-hidden">
          <img src="images/cupcake.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

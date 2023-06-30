import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "store/slices/user";

const Login = () => {
    const { name } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <div>
            <p>NAME: {name}</p>
            <button onClick={() => dispatch(changeName('hola'))}>CLICK ME</button>
        </div>
    );
};

export default Login;

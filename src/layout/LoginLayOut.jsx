import React from 'react';
import NavigationVar from '../Pages/Shared/NavigationVar/NavigationVar';
import { Outlet } from 'react-router-dom';

const LoginLayOut = () => {
    return (
        <div>
            <NavigationVar></NavigationVar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayOut;
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>terms and conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minima praesentium alias repellendus repellat neque explicabo voluptates recusandae illum quos eveniet ex quidem adipisci impedit, fugit illo, non quia placeat?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));      
    }, []);
    return (
        <div>
            <h4>All category</h4>
            <div className='ps-3'>
                {
                    categories.map(categorory => <p key={categorory.id}>
                        <Link to={`/category/${categorory.id}` } className='text-black text-decoration-none'>{categorory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
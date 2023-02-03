import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
return (
    <section className='error-page section'>
    <div className='error-cointainer'>
    <h1>oh! its a dead end</h1>
    <Link to='/' className='btn btn-primary'>Back Home</Link>
    </div>
    </section>
)
}

export default Error;
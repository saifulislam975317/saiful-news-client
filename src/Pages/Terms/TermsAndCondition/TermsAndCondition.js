import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <p>Our Terms and Condition have given below. Read carefully each condition...</p>
            <p>Go back to  <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;
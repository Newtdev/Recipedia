import React, { useState } from 'react';
import "./Search.css";


const Search = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    return (
        <div>
            <div className="form__container">
                <div className="logo">RECIPEDIA</div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    // call the function to make search here
                    //  form is controlled
                    onSubmit(term);
                }}>
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                    <span className="side__container">
                        {/* mic icon*/}
                        {/* search icon */}
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Search;
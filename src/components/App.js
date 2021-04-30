import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import RecipeDetails from './RecipeDetails';
import RecipeImage from './RecipeImages';


const Api_key = "687e0647476fc3f2cb5596400ff69d97";
const ID = "34115255";
// The app component will do the search 
// when it receive the term from the seach component
// const response = await axios.get(`https://api.edamam.com/search?q=chicken&app_id=${ID}&app_key=${Api_key}&from=0&to=3`);
const App = () => {
    const [data, setData] = useState([]);

    const requestRecipe = async (term) => {
        const response = await axios.get(`https://api.edamam.com/search?q=${term}&app_id=${ID}&app_key=${Api_key}&from=0&to=5`);

        setData(response.data.hits);
    };
    return (
        <div>
            <Search onSubmit={requestRecipe} />
            <div>
                <RecipeDetails dataList={data} />
                <RecipeImage dataList={data} />
            </div>
        </div >
    );

};


export default App;
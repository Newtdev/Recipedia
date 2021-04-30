import React from 'react';
import DetailsList from './DetailsList';
import './RecipeDetails.css';





const RecipeDetails = ({ dataList }) => {
    return (
        <div className="recipeDetails__container">
            <DetailsList recipeList={dataList} />
        </div>
    );
};



export default RecipeDetails;
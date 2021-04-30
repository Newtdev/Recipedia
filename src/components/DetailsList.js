import React from 'react';
import "./DataList.css";

const DetailsList = ({ recipeList }) => {
    console.log(recipeList);
    // const { cuisineType, dietLabel, image, label, source, url } = recipeList;
    // console.log(source);
    const list = recipeList.map(({ recipe }) => {
        console.log(recipe.calories);
        return (
            <div key={recipe.calories}>
                <div className="small__container">
                    <small>{`https://${recipe.url}`}</small>
                </div>
                <div className="label__container">
                    <a href={`${recipe.url}`}>{`${recipe.label}`}</a>
                </div>

                <div className="short__note">
                    <span>{"Since we understand the recipe – ingredients, diets, allergies, nutrition, taste, techniques & more. We can connect your users with the best recipes available for ..."}</span>
                </div>
                <div className="diet__label">
                    <h6>{`Diet Label: ${recipe.dietLabels} `}</h6>
                </div>
            </div>
        );
    });
    return (
        <div className="dataList__container">
            {list}

        </div>
    );
};





export default DetailsList;
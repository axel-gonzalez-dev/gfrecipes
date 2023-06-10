"use client";

import { useEffect, useState } from "react";

const Recipe = () => {

    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {

        const response = await fetch("http://localhost:1337/api/recipes")
        .then(response => response.json())
        .catch(error => {
          throw error;
        });
    
        console.log(response);

        setRecipes(response?.data);
    
        try{
    
        }catch(error){
          console.error(error);
        }
    
      }
    
      useEffect( () => {
        getRecipes();
      },[])

    return (
        <>
            <main className="p-4">

                <div>
                    {
                        recipes.map( (recipe,index) => (
                            <div className="grid grid-cols-3">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{recipe?.attributes?.title}</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>

                </div>
                        ))
                    }
                </div>
                
                
            </main>

        </>
    )

}

export default Recipe;
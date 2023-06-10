"use client";

import { useEffect, useState } from "react";

interface Recipe {
    attributes: {
        createdAt: string;
        description: string;
        publishedAt: string;
        title: string;
        updatedAt: string;
    }
}

const Recipe = () => {

    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const getRecipes = async () => {
        try {

            const response = await fetch("http://localhost:1337/api/recipes")
                .then(response => response.json())
                .catch(error => {
                    throw error;
                });

            setRecipes(response?.data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getRecipes();
    }, [])

    return (
        <>
            <main className="p-4 grid grid-cols-2 gap-4">
                    {
                        recipes.map((recipe, index) => (
                            <div key={index}>
                                <div className="max-w-sm rounded overflow-hidden shadow-xl border border-gray-100">
                                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{recipe?.attributes?.title}</div>
                                        <p className="text-gray-700 text-base">
                                            {recipe?.attributes?.description}
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
            </main>

        </>
    )

}

export default Recipe;
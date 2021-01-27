import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import GiftGallery from './components/GiftGallery';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />

            <ol>               
                {
                    categories.map(category =>  (
                        <GiftGallery 
                            category = { category }
                            key = { category }    
                        />
                     ))
                }
            </ol>

            {/* si quiero retornar un objeto puedo ponerlo entre () *ver el map* */}
        </>
    )
}

export default GiftExpertApp;
import React from 'react'
import { useFetchData } from '../hooks/useFetchData';
import GridItem from './GridItem';

const GiftGallery = ({ category }) => {

    const { data:images , loading } = useFetchData( category ); //con los : puedo renombrar la propiedad

    return (
        <div className="container">

            <h3 className="animate__animated animate__zoomIn">{ category }</h3>

            { loading && <p>Loading...</p> }

            {
                images.map(imagen => (
                    <GridItem 
                        key = { imagen.id }
                        { ...imagen } 
                    />
                ))
            }
        </div>
    )
}

export default GiftGallery

import React, { useEffect } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import {useDispatch, useSelector} from 'react-redux'
import {fetchProperties} from '../../store/properties/propertiesSlice'

// const DUMMY_PROPERTY = {
//     id: 73864112,
//     bedrooms: 3,
//     summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
//     displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
//     propertyType: 'Flat',
//     price: 1950000,
//     branchName: 'M2 Property, London',
//     propertyUrl: '/property-for-sale/property-73864112.html',
//     contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
//     propertyTitle: '3 bedroom flat for sale',
//     mainImage: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg'
// };

const PropertyListing = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.properties);
    const { properties } = data 
    useEffect(()=>{
        dispatch(fetchProperties())
    },[dispatch])

    if (!properties) {
        return <>Loading...</>
    }

    return (
        <>
            <div className="PropertyListing">
                {
                    properties.map((property, index) => <PropertyCard key={index} {...property} />)
                }
            </div>
        </>
    )
};

export default PropertyListing;

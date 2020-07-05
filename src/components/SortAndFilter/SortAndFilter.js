import React from 'react';
import './SortAndFilter.scss';
import Dropdown from './Dropdown'
import MultiSelect from './MultiSelect'
import {priceOptions, bedOptions, propertyTypes, sortOptions, orderOptions} from '../../constants'
import {useDispatch} from 'react-redux'
import { updateFilters, fetchProperties} from '../../store/properties/propertiesSlice'


const SortAndFilter = () => {
    const dispatch = useDispatch()

    const onChangeMinPrice = (value) => {
        
        dispatch(updateFilters({key:"minPrice", value:value}))
        dispatch(fetchProperties())
    }

    const onChangeMaxPrice = (value) => {
        
        dispatch(updateFilters({key:"maxPrice", value:value}))
        dispatch(fetchProperties())
    }

    const onChangeMinBedrooms= (value) => {
        
        dispatch(updateFilters({key:"minBeds", value:value}))
        dispatch(fetchProperties())
    }

    const onChangeMaxBedrooms= (value) => {
        
        dispatch(updateFilters({key:"maxBeds", value:value}))
        dispatch(fetchProperties())
    }

    const onChangePropertyTypes= (value) => {
        
        if(value.length === 0) {
            dispatch(updateFilters({key:"propertyTypes", value:""}))
        }
        else {
            dispatch(updateFilters({key:"propertyTypes", value:value}))
        }
        dispatch(fetchProperties())
    }

    const onChangeSortBy= (value) => {
        
        dispatch(updateFilters({key:"sortBy", value:value}))
        dispatch(fetchProperties())
    }

    const onChangeOrderBy= (value) => {
        
        dispatch(updateFilters({key:"orderBy", value:value}))
        dispatch(fetchProperties())
    }



    return (
        <div className="SortAndFilter">
            {/*
                TODO: add filters here...
            */}
            <MultiSelect label="Property Type" options={propertyTypes} onChange={onChangePropertyTypes} />
            <Dropdown label="Min. Bedrooms" options={bedOptions} onChange={onChangeMinBedrooms} />
            <Dropdown label="Max. Bedrooms" options={bedOptions} onChange={onChangeMaxBedrooms} />
            <Dropdown label="Min. Price" options={priceOptions} onChange={onChangeMinPrice} />
            <Dropdown label="Max. Price" options={priceOptions} onChange={onChangeMaxPrice} />
            <Dropdown label="Sort by" options={sortOptions} onChange={onChangeSortBy} />
            <Dropdown label="Order by" options={orderOptions} onChange={onChangeOrderBy} />
        </div>
    );
};

export default SortAndFilter;

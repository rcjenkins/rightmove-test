import React from 'react';
import './SortAndFilter.scss';
import Dropdown from './Dropdown'
import MultiSelect from './MultiSelect'
import {priceOptions, bedOptions, propertyTypes, sortOptions, orderOptions} from '../../constants'
import {useDispatch} from 'react-redux'
import { updateFilters, fetchProperties} from '../../store/properties/propertiesSlice'


const SortAndFilter = () => {
    const dispatch = useDispatch()

    const onChangeDropdown = (value, ddType) => {
        
        dispatch(updateFilters({key:ddType, value:value}))
        dispatch(fetchProperties())
    }


    const onChangeMultiSelect= (value, msType) => {
        const filter = {key:msType, value:""}
        if(value.length !== 0) { filter.value = value }
        dispatch(updateFilters(filter))
        dispatch(fetchProperties())
    }


    return (
        <div className="SortAndFilter">
            {/*
                TODO: add filters here...
            */}
            <MultiSelect label="Property Type" options={propertyTypes} msType="propertyTypes" onChange={onChangeMultiSelect} />
            <Dropdown label="Min. Bedrooms" options={bedOptions} ddType="minBeds" onChange={onChangeDropdown} />
            <Dropdown label="Max. Bedrooms" options={bedOptions} ddType="maxBeds" onChange={onChangeDropdown} />
            <Dropdown label="Min. Price" options={priceOptions} ddType="minPrice" onChange={onChangeDropdown} />
            <Dropdown label="Max. Price" options={priceOptions} ddType="maxPrice" onChange={onChangeDropdown} />
            <Dropdown label="Sort by" options={sortOptions} ddType="sortBy" onChange={onChangeDropdown} />
            <Dropdown label="Order by" options={orderOptions} ddType="orderBy" onChange={onChangeDropdown} />
        </div>
    );
};

export default SortAndFilter;

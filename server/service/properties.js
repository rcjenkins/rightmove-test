const propertiesData = require('../data/properties');

const filterOperators = {
    propertyTypes: (property, value) => value.toLowerCase().split(',').indexOf(property.propertyType.toLowerCase()) !== -1,
    minPrice: (property, value) => property.price >= parseInt(value),
    maxPrice: (property, value) => property.price <= parseInt(value),
    minBeds: (property, value) => property.bedrooms >= parseInt(value),
    maxBeds: (property, value) => property.bedrooms <= parseInt(value),
};

const sortComparators = {
    price: (orderBy = 'asc') => (property1, property2) => orderBy === 'asc' ? (property1.price > property2.price ? 1 : -1) : (property1.price < property2.price ? 1 : -1),
    bedrooms: (orderBy = 'asc') => (property1, property2) => orderBy === 'asc' ? (property1.bedrooms > property2.bedrooms ? 1 : -1) : (property1.bedrooms < property2.bedrooms? 1 : -1),
};

const getAllProperties = async () => {
    return await propertiesData;
};

const getProperties = async (query = {}) => {
    const totalFilters = Object.keys(query).reduce((result, key) => filterOperators.hasOwnProperty(key) ? result + 1 : result, 0);

    let result = await propertiesData.filter((property) => {
        let matchedFilters = 0;
        Object.keys(query).forEach((key) => {
            const filterOp = filterOperators[key];
            filterOp && filterOp(property, query[key]) && matchedFilters++;
        });
        return matchedFilters === totalFilters;
    });

    if (query.hasOwnProperty('sortBy')) {
        const sortComp = sortComparators[query.sortBy];
        if (sortComp) {
            console.log("sorting")
            result = await result.sort(sortComp(query.orderBy));
            console.log(result)
        }
    }

    return result;
};

module.exports = {
    getAllProperties,
    getProperties
};

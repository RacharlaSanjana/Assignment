const fetchPricing = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ price: 100 }), 1000);
    });
};

const fetchReviews = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Rejected')), 1000);
    });
};

const fetchAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ stock: 'In stock' }), 1000);
    });
};


const safeFetch = (promise) =>
    promise.catch((error) => ({ error: error.message })); 

const fetchAllProductData = async () => {
    const results = await Promise.all([
        safeFetch(fetchPricing()),
        safeFetch(fetchReviews()),
        safeFetch(fetchAvailability()),
    ]);

    console.log('Results:', results);
     //Separating the valid and invalid results
    const validResults = results.filter((result) => !result.error); 
    const failedResults = results.filter((result) => result.error);

    console.log('Valid results:', validResults);
    console.log('Failed results:', failedResults);

    return { validResults, failedResults };
};
// Scenario when promise.all is used and if one promise is rejected it shouldn't reject the promise.all Instead it should execute successfully.
fetchAllProductData();

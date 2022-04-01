const fetchApi = async (endpoint) => {

    const baseUrl = process.env.REACT_APP_API_URL
    try {
        const response = await fetch(base + endpoint);
        return await response.json();
    } catch (error) {
        console.error(error)
        throw new Error("Error haciendo fetch")
    }

};

export default fetchApi
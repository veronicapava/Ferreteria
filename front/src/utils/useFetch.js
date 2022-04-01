const fetchApi = async (endpoint, method = undefined, body = undefined) => {
    const baseUrl = process.env.REACT_APP_API_URL

    try {
        let initRequest = method ?
            {
                method, // *GET, POST, PUT, DELETE, etc.
                headers: { "Content-Type": "application/json" },
                referrerPolicy: "origin-when-cross-origin",
                body: body ? JSON.stringify(body) : {},
            }
            : undefined
        const response = await fetch(baseUrl + endpoint, initRequest);
        return await response.json();
    } catch (error) {
        console.error(error)
        throw new Error("Error haciendo fetch")
    }

};

export default fetchApi
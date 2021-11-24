const fetchResults = async (searchEndpoint) => {
    try {
        const results = await fetch(searchEndpoint);
        const resJSON = await results.json();
        return resJSON;
    }
    catch(error) {
      console.log("parsing failed", error);
    }
};

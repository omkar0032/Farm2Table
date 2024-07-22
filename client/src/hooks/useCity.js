//naming convention should be followed for creating hooks i.e->>
//name of file should begin with use.... eg->useCategory.js

import { useState, useEffect } from "react";
import axios from "axios";

export default function useCity() {
    const [cities, setCities] = useState([]);

    //get cat
    const getCities = async () => {
        try {
            const { data } = await axios.get("/api/v1/city/get-city");
            setCities(data?.city);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCities();
    }, []);

    return cities;
}
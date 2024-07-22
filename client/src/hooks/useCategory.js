//naming convention should be followed for creating hooks i.e->>
//name of file should begin with use.... eg->useCategory.js

import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
    const [categories, setCategories] = useState([]);

    //get cat
    const getCategories = async () => {
        try {
            const { data } = await axios.get("/api/v1/category/get-category");
            setCategories(data?.category);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return categories;
}
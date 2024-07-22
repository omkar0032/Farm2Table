import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCity from "../hooks/useCity";
import Layout from "../components/Layout/layout";
const Cities = () => {
    const cities = useCity();
    return (
        <Layout title={"All Categories"}>
            <div className="container">
                <div className="row">
                    {cities.map((c) => (
                        <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                            <Link to={`/city/${c.slug}`} className="btn btn-primary">
                                {c.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Cities;
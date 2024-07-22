import cityModel from "../models/cityModel.js";
import slugify from "slugify";
export const createCityController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ message: "Name is required" });
        }
        const existingCity = await cityModel.findOne({ name });
        if (existingCity) {
            return res.status(200).send({
                success: false,
                message: "City Already Exisits",
            });
        }
        const city = await new cityModel({
            name,
            slug: slugify(name),
        }).save();
        res.status(201).send({
            success: true,
            message: "new city created",
            city,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Errro in City",
        });
    }
};

// //update category
export const updateCityController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const city = await cityModel.findByIdAndUpdate(
            id,
            { name, slug: slugify(name) },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "City Updated Successfully",
            city,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating city",
        });
    }
};

// get all cat
export const cityControlller = async (req, res) => {
    try {
        const city = await cityModel.find({});
        res.status(200).send({
            success: true,
            message: "All Cities List",
            city,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting all cities",
        });
    }
};

// single category
export const singleCityController = async (req, res) => {
    try {
        const city = await cityModel.findOne({ slug: req.params.slug });
        res.status(200).send({
            success: true,
            message: "Get Single City Successfully",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error While getting Single City",
        });
    }
};

//delete category
export const deleteCityController = async (req, res) => {
    try {
        const { id } = req.params;
        await cityModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "City Deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while deleting city",
            error,
        });
    }
};
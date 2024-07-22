import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { createCityController,updateCityController,deleteCityController,cityControlller,singleCityController } from "../controllers/cityController.js";

const router = express.Router();

//routes
// create category
router.post(
    "/create-city",
    requireSignIn,
    isAdmin,
    createCityController
);

// //update category
router.put(
    "/update-city/:id",
    requireSignIn,
    isAdmin,
    updateCityController
);

//getALl category
router.get("/get-city", cityControlller);

//single category
router.get("/single-city/:slug", singleCityController);

//delete category
router.delete(
    "/delete-city/:id",
    requireSignIn,
    isAdmin,
    deleteCityController
);

export default router;
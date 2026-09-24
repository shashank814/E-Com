import { body, validationResult } from "express-validator";

export const productValidator = [
  body("title")
    .exists().withMessage("Title is required")
    .bail()
    .isString().withMessage("Title must be a string")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Title length must be between 2 to 100 characters"),

  body("description")
    .notEmpty().withMessage("Description is required")
    .bail()
    .isString().withMessage("Description must be a string")
    .trim()
    .isLength({ min: 20, max: 500 })
    .withMessage("Description length must be between 20 to 500 characters"),

  body("price")
    .notEmpty().withMessage("Price is required")
    .bail()
    .isString().withMessage("Price must be a string"), 

  body("category")
    .notEmpty().withMessage("Category is required")
    .bail()
    .isString().withMessage("Category must be a string"),

  // body("image")
  //   .notEmpty().withMessage("Image is required")
  //   .bail()
  //   .isString().withMessage("Image must be a string"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid Request",
        errors: errors.array(),
      });
    }

    next();
  },
];
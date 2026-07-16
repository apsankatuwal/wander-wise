import { validationResult } from "express-validator";
import { ValidationError } from "../errors/validation.js";
/**
 * Validates the given data against the provided validation rules.
 * This middleware checks validation results after validators have run
 */
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ValidationError(errors.array()));
  }
    next();
};
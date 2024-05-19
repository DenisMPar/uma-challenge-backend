import { NextFunction, Request, Response } from "express";
import { object, Schema, string } from "yup";

export class ImageValidate {
  static async getImageComments(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const createAuthSchema: Schema = object({
      params: object({
        imageDate: string().required(),
      }),
    })
      .noUnknown()
      .strict(true);
    try {
      const validate = await createAuthSchema.validate({
        params: req.params,
      });
      if (validate) return next();
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({
        field: "params",
        message: "BAD_REQUEST",
        error: error.errors,
      });
    }
  }
}

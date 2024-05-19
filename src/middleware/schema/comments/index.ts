import { NextFunction, Request, Response } from "express";
import { object, Schema, string } from "yup";

export class CommentValidate {
  static async createComment(req: Request, res: Response, next: NextFunction) {
    const createAuthSchema: Schema = object({
      body: object({
        text: string().required(),
      }),
      params: object({
        imageDate: string().required(),
      }),
    })
      .noUnknown()
      .strict(true);
    try {
      const validate = await createAuthSchema.validate({
        params: req.params,
        body: req.body,
      });
      if (validate) return next();
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({
        field: "params or body",
        message: "BAD_REQUEST",
        error: error.errors,
      });
    }
  }
}

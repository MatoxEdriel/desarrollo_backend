import { NextFunction, Request, Response, Router } from "express";
import { loginController, registerController } from "./controller";

const routes = Router();

routes.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await registerController(req)
        res.status(201).json(response);
    } catch (error) {
        throw error
    }
  }
);
routes.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await loginController(req)
        res.status(200).json(response);
    } catch (error) {
        throw error
    }
  }
);

export default routes;

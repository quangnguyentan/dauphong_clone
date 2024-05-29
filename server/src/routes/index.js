import authRouter from "./auth";
import userRouter from "./user";
import postRouter from "./post";


const initRoutes = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);
  app.use("/api/post", postRouter);
};
export default initRoutes;

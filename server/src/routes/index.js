import authRouter from "./auth";
import userRouter from "./user";
import postRouter from "./post";
import matchesRouter from "./matches";


const initRoutes = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);
  app.use("/api/post", postRouter);
  app.use("/api/matches", matchesRouter);

};
export default initRoutes;

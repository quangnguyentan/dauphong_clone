
import postRouter from "./post";
import matchesRouter from "./matches";
import accountRouter from "./account";
import streamRouter from "./stream";



const initRoutes = (app) => {

  app.use("/api/post", postRouter);
  app.use("/api/matches", matchesRouter);
  app.use("/api/account", accountRouter);
  app.use("/api/stream", streamRouter);



};
export default initRoutes;

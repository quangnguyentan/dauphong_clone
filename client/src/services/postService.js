import axiosConfig from "../axios";
export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/api/post/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
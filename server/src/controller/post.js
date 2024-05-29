import db from "../config/connectDB";

export const getAllPost =  (req, res) => {
  try {
    var sql = 'SELECT * FROM posts;'
     db.query(sql, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).json({
        success: results ? true : false,
        post : results,
    });
    });
    
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "Failed at auth controller" + error,
    });
  }
};
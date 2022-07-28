import connectMongo from "../../../utils/connectMongo";
import Hechizo from "../../../models/hechizos.model";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

const findHechizo = async (req, res) => {
  try {
    await connectMongo();
    if (req.method === "GET") {
      const hechizo = await Hechizo.findById(req.query.id).lean();
      res.json(hechizo);
    } else if (req.method === "POST") {
      const hechizo = await Hechizo.findByIdAndUpdate(req.query.id, req.body);
      res.redirect(301, "/");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default findHechizo;

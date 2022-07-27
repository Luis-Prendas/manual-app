import connectMongo from "../../../utils/connectMongo";
import Hechizo from "../../../models/hechizos.model";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

const addHechizo = async (req, res) => {
  try {
    await connectMongo();
    if (req.method === "POST") {
      const hechizo = await Hechizo.create(req.body);
      res.redirect(301, process.env.NEXT_PUBLIC_URL);
    } else if (req.method === "GET") {
      const hechizo = await Hechizo.find();
      res.json(hechizo);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default addHechizo;

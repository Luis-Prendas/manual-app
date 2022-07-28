import connectMongo from "../../../utils/connectMongo";
import Merito from "../../../models/meritos.model";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

const findMerito = async (req, res) => {
  try {
    await connectMongo();
    if (req.method === "GET") {
      const merito = await Merito.findById(req.query.id).lean();
      res.json(merito);
    } else if (req.method === "POST") {
      const merito = await Merito.findByIdAndUpdate(req.query.id, req.body);
      res.redirect(301, "/");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default findMerito;

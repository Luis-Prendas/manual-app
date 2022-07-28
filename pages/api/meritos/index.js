import connectMongo from "../../../utils/connectMongo";
import Merito from "../../../models/meritos.model";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

const addMerito = async (req, res) => {
  try {
    await connectMongo();
    if (req.method === "POST") {
      const merito = await Merito.create(req.body);
      res.redirect(301, '/');
    } else if (req.method === "GET") {
      const merito = await Merito.find();
      res.json(merito);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default addMerito;

import connectDB from "../../../utils/connectDB";
import Products from "../../../models/productModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProductById(req, res);
      break;
  }
};
// get product from db
const getProductById = async (req, res) => {
  try {
    const { id } = req.query;
    const product = await Products.findById(id);
    if(product==null) {
      return res.status(300).json({ err: "This product does not exist" });
    }
    res.json({
      product
    });
  } catch (error) {
    return res.status(500).json({ err: err.message });
  }
};

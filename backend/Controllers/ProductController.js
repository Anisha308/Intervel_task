import Product from "../Models/MysqlModal.js";
import ProfitRecord from "../Models/ProfiteRecord.js";

const addProduct = async (req, res) => {
  console.log("Hiii anishaaaa");
  const { name, purchase_price, sales_price, profit } = req.body;

  console.log(name, purchase_price, sales_price, profit);

  // Basic validation for presence of required fields
  if (!name || !purchase_price || !sales_price) {
    return res.status(400).json({ message: "All fields are required" });
  }
 if (name.length < 2) {
   return res
     .status(400)
     .json({ message: "Product name must be at least 2 characters long" });
 }

  // Validate that purchase_price and sales_price are numbers
  const purchasePrice = parseFloat(purchase_price);
  const salesPrice = parseFloat(sales_price);

  if (isNaN(purchasePrice) || purchasePrice <= 0) {
    return res
      .status(400)
      .json({ message: "Purchase price must be a positive number" });
  }

  if (isNaN(salesPrice) || salesPrice <= 0) {
    return res
      .status(400)
      .json({ message: "Sales price must be a positive number" });
  }

  // Ensure sales_price is greater than purchase_price
  if (salesPrice <= purchasePrice) {
    return res
      .status(400)
      .json({ message: "Sales price must be greater than purchase price" });
  }

  try {
    const profit = parseFloat(sales_price) - parseFloat(purchase_price);

    const product = await Product.create({
      name,
      purchase_price,
      sales_price,
      profit,
    });
    await ProfitRecord.create({ product_id: product.product_id, profit });

    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error Adding Product", error);
    return res.status(500).json({ message: "Server error" });
  }
}


const getProducts = async (req, res) => {
    console.log('got your productas');
    const { id } = req.params
    console.log(id,'iddd');
    
    try {
        const product = await Product.findByPk(id)
        if (!product) {
            return res.status(404).json({message:'product not found'})
        }
        res.status(200).json(product)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'server error'})
        
    }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { addProduct, getProducts, getAllProducts };
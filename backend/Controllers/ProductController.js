import Product from "../Models/MysqlModal.js";
import ProfitRecord from "../Models/ProfiteRecord.js";

const addProduct = async (req, res) => {
    console.log('Hiii anishaaaa');
    const { name, purchase_price, sales_price } = req.body
    
    console.log(name,purchase_price,sales_price);
    
    if (!name || !purchase_price || !sales_price) {
        return res.status(400).json({ message: "All fields are required" })
        
    }

    try {
        
        const profit = parseFloat(sales_price) - parseFloat(purchase_price);

        const product = await Product.create({
            name,
            purchase_price,
            sales_price,
            profit
        })
    await ProfitRecord.create({ product_id: product.product_id, profit });

    res.status(201).json({ message: "Product added successfully", product });

    } catch (error) {
        console.error('Error Adding Product',error);
                return res.status(500).json({ message: "Server error" });

    }

}


const getProducts = async (req, res) => {
    console.log('got your productas');
    const { id } = req.params
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
export {
    addProduct,
    getProducts
}
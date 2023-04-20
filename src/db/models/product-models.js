import { model } from "mongoose";
import { ProductSchema } from "../schemas/product-schema.js";

const Product = model("Product", ProductSchema);

export class ProductModel {
  async findAll() {
    const products = await Product.find();
    return products;
  }

  //와인 이름으로 상세 정보 조회
  async findByName(search_name) {
    const product = await Product.findOne({ name: search_name });
    return product;
  }

  //와인 타입별로 조회(ex. 레드, 화이트, 스파클링, etc..)
  async findByType(type) {
    const products = await Product.find({ type: type });
    return products;
  }

  //와인 나라별로 조회
  async findByCountry(country) {
    const products = await Product.findAll({country: country});
    return products;
  }
  //와인 추가하기
  async productCreate(productInfo) {
    const newProduct = await Product.create(productInfo);
    return newProduct;
  }

  //와인 정보 수정
  async productUpdate(name, productInfo) {
    const filter = { name: name };
    const option = { returnOriginal: false };
    
    const updateProduct = await Product.findOneAndUpdate(filter, productInfo, option);
    return updateProduct;
  }

  //와인 삭제
  async productDelete(name) {
    const deleteProduct = await Product.deleteOne({ name: name });
    return deleteProduct;
  }
}

const productModel = new ProductModel();

export { productModel };

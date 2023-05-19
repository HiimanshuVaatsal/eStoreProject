import Breadcrumb from "@/components/layout/Breadcrumb";
import React from "react";
import Image from "next/image";
import { BiRupee } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
import { AiFillMinusSquare } from "react-icons/ai";
import Head from "next/head";
import { useState } from "react";
import { addToCart } from "@/utils/cartItems";
import { toast } from "react-hot-toast";
function SingleProduct({ product }) {
  const [quantity, setquantity] = useState(1);

  return (
    <>
      <Head>
        <title>product name</title>
      </Head>
      <main>
        <Breadcrumb title={"Product"} />
        <dir className="row">
          <div className="col-lg-6">
            {/* Image */}
            <div className="p-2">
              <Image
                src={product?.thumbnail}
                className="border"
                alt={product?.title}
                width={350}
                height={300}
              />
            </div>
          </div>
          <div className="col-lg-6">
            {/* product description */}
            <h2>{product?.title}</h2>
            <h4 className="card-title d-flex align-items-center">
              <BiRupee size={21} />
              {product?.price}
            </h4>
            <h5 className="mt-2">Description</h5>
            <p>{product?.description}</p>
            <h5> rating:{product?.rating}</h5>
            <div className="d-flex gap-3">
              <b>Qty:</b>
              <div class="input-group input-group-sm w-25 mb-3 border">
                <button
                  onClick={()=>setquantity((quantity>1)? quantity-1:1)}
                  className="input-group-text btn btn-sm btn-outline-dark"
                >
                  <AiFillMinusSquare />
                </button>
                <input type="text" className="form-control" value={quantity} />
                <button
                  onClick={()=>setquantity(quantity+1)}
                  className="input-group-text btn btn-sm btn-outline-dark"
                >
                  <MdAddBox />
                </button>
              </div>
            </div>
            <div className="d-flex gap-3 mt-4">
              <button
                type="button"
                className="btn btn-sm btn-warning"
                onClick={(e) => {
                  addToCart(product, quantity), toast.success("Add in cart");
                }}
              >
                Add to card
              </button>
              <button type="button" className="btn btn-sm btn-success">
                Buy Now
              </button>
            </div>
          </div>
        </dir>
      </main>
    </>
  );
}

export default SingleProduct;

// Server Side api fecting;

export async function getServerSideProps(context) {
  const productId = context.params.slug;
  let product = [];
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    product = await response.json();
  } catch (error) {
    alert.error(error);
    return { notFound: true };
  }

  return {
    props: {
      product,
    },
  };
}

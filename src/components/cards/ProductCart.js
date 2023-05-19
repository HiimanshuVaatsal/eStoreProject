import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiRupee } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { addToCart } from "@/utils/cartItems";
import { toast } from "react-hot-toast";

function ProductCart({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product?.id}`}>
        <div className="object-fit-cover">
          <Image
            src={product?.thumbnail}
            width={200}
            height={200}
            className="card-img-top"
            alt="{product?.title}"
          />
        </div>
      </Link>
      <div className="card-body">
        <Link href={`/product/${product?.id}`} className="text-decoration-none">
          <h5 class="card-title text-black">{product?.title}</h5>
        </Link>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="card-title d-flex align-items-center">
            <BiRupee size={21} />
            {product?.price}
          </h6>
          <div className="d-flex">
            <button
              className="btn btn-warning btn-sm mx-2"
              onClick={(e) => {
                addToCart(product, 1), toast.success("Added in cart");
              }}
            >
              <BsFillCartPlusFill size={22} />
            </button>
            <button className="btn btn-success btn-sm">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;

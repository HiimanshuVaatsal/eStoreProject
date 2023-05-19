import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Link from "next/link";
import useSwr from 'swr';
import { fetcher } from "@/utils/swrFetcher";
function SideBar() {
  //  const categories = [1, 2, 3, 4, 5, 6, 7];

  const {  data, error, isloading } = useSwr(
    'https://dummyjson.com/products/categories'
    , fetcher)

  if (error) return <div>Failed to load</div>;
  if (isloading) return <div>Loading...</div>;

  return (
    <div className="w-100">
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center navbar-top-bg">
          <h5 className="text-white nt-2 text-uppercase">
            <BiCategoryAlt />
            Categories
          </h5>
        </li>
          {
            data?.map((category)=>{
              return(
                <div>
                  <Link href={`/category/${category}`} className='text-decoration-none'>
                  <li className='list-group-item list-group-item-action d-flex align-items-center text-capitalize'>
                    < BsFillArrowRightSquareFill size={24} className="m-2" />
                    <b>{category}</b>
                  </li>
                </Link>
                </div>
              )
            })
          }
      </ul>
    </div>
  );
}

export default SideBar;

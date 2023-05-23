import React from "react";
import Link from "next/link";
const ProductItem = () => {
  return (

    <div className="flex flex-col px-2 justify-between space-y-2 mb-5 bg-slate-50 p-2 shadow-sm rounded-2xl   scroll-smooth snap-y snap-mandatory  ">
      <span className="text-orange-700 tracking-wider">May 2. 2019</span>
      <Link href="/"><h3 className="text-2xl md:text-3xl font-bold w-5xl md:max-w-md uppercase hover:text-orange-500 transition duration-200 ">queen spotting:How to find your queen bee</h3></Link>
      <p className="text-gray-500 text-2xs leading-7 tracking-tight w-5xl md:max-w-sm">
        Sit magna officia aliquip ullamco ullamco anim culpa ea est nulla esse
        elit laborum consectetur.Commodo dolor sunt qui aute cupidatat nulla
        labore consequat et laboris qui fugiat id.Ad esse dolor quis voluptate
        proident.
      </p>
    </div>
  );
};

export default ProductItem;

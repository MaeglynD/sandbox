"use client";

import { ProductSearchProvider } from "@/providers/product-search";

import { ProductSearchResults } from "@/components/product/product-search-results";

function Content() {
  return (
    <div className="bg-black w-full h-full mx-auto p-[20px] flex flex-col justify-center items-center">
      <div className=" h-full w-full max-w-[600px] bg-[rgba(255,255,255,0.05)] flex  rounded-[10px] flex-col">
        <div className="text-[24px] h-[100px] font-semibold p-[40px] flex items-center border-b border-b-[rgba(255,255,255,0.05)] shadow-m shrink-0">
          Top K Best Selling Products
        </div>

        <div className="max-w-[600px] p-[20px] pb-0 overflow-y-scroll">
          <ProductSearchResults />
        </div>
      </div>
    </div>
  );
}

export function ProductsByBestseller() {
  return (
    <ProductSearchProvider>
      <Content />
    </ProductSearchProvider>
  );
}

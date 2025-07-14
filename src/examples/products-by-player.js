"use client";

import { ProductSearchProvider } from "@/providers/product-search";

import { ProductSearchResults } from "@/components/product/product-search-results";
import { PlayerSelector } from "@/components/selectors/player-selector";

import { players } from "@/data";

// import s from "./page.module.css";

function Content() {
  return (
    <div className="bg-black w-full h-full mx-auto p-[20px] flex flex-col justify-center items-center">
      <div className=" h-full w-full max-w-[700px] bg-[rgba(255,255,255,0.05)] flex rounded-[10px] flex-col">
        <div className="text-[24px] min-h-[100px] font-semibold p-[20px] flex items-center border-b border-b-[rgba(255,255,255,0.05)] shadow-m shrink-0">
          <PlayerSelector players={players} />
        </div>

        <div className="pb-0 max-w-[700px] mx-auto overflow-y-scroll">
          <ProductSearchResults />
        </div>
      </div>
    </div>
  );
}

export function ProductsByPlayer() {
  return (
    <ProductSearchProvider>
      <Content />
    </ProductSearchProvider>
  );
}

"use client";

import { useEffect } from "react";

import { CartProvider } from "@/providers/cart";
import { ProductOptionsProvider, useProductOptions } from "@/providers/product-options";

import { Cart } from "@/components/cart";
import { ProductOptionsCard } from "@/components/product/product-options-card";

import { productsExample } from "@/data";

function Content() {
  const setProduct = useProductOptions((s) => s.setProduct);

  useEffect(() => {
    setProduct(productsExample[0]);
  }, []);

  return (
    <div className="bg-black w-full h-full mx-auto p-[20px] flex gap-[30px] justify-center items-center">
      <div className="max-w-[600px] w-full h-full bg-[rgba(255,255,255,0.01)] rounded-[16px] overflow-hidden">
        <ProductOptionsCard />
      </div>

      <div className="max-w-[600px] flex flex-col w-full h-full bg-[rgba(255,255,255,0.01)] rounded-[16px] overflow-hidden">
        <div className="text-[24px] h-[100px] font-semibold p-[40px] flex items-center border-b border-b-[rgba(255,255,255,0.05)] shadow-m shrink-0">
          Cart
        </div>

        <div className="h-full overflow-y-scroll">
          <Cart showCheckoutBtn={false} />
        </div>
      </div>
    </div>
  );
}

export function AddUpdateDeleteCart() {
  return (
    <CartProvider>
      <ProductOptionsProvider>
        <Content />
      </ProductOptionsProvider>
    </CartProvider>
  );
}

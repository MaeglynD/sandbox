"use client";

import { useEffect } from "react";
import { AnimatePresence } from "motion/react";

import { CartProvider, useCart } from "@/providers/cart";
import { ProductOptionsProvider, useProductOptions } from "@/providers/product-options";

import { Cart } from "@/components/cart";
import { ProductOptionsCard } from "@/components/product/product-options-card";
import { Checkout } from "@/components/checkout";

import { productsExample } from "@/data";

function Content() {
  const setProduct = useProductOptions((s) => s.setProduct);
  const cart = useCart((s) => s.cart);

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

      <div className="max-w-[600px] flex flex-col w-full h-full bg-[rgba(255,255,255,0.01)] rounded-[16px] overflow-hidden">
        <div className="text-[24px] h-[100px] font-semibold p-[40px] flex items-center border-b border-b-[rgba(255,255,255,0.05)] shadow-m shrink-0">
          Set Customer Info
        </div>

        <AnimatePresence>
          {!!cart?.length ? (
            <>
              <div className="h-full flex flex-col">
                <Checkout checkoutBtnText="Set Customer info" />
              </div>
            </>
          ) : (
            <div className="h-full  text-center font-[500] w-full font-[20px] flex justify-center items-center text-[rgba(255,255,255,0.4)]">
              Try adding some products to the cart, then you can set customer info.
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function SetCartCustomerInfo() {
  return (
    <CartProvider>
      <ProductOptionsProvider>
        <Content />
      </ProductOptionsProvider>
    </CartProvider>
  );
}

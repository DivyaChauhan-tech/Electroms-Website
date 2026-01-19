import React from 'react';
import ProductCarousel from "./ProductCarousel";

export default function Products() {
  return (
    <section id="products" className="w-full py-8 sm:py-8 md:py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 lg:mb-8">
        Our Products
      </h2>

      <div className="max-w-[1000px] mx-auto">
        <ProductCarousel />
      </div>
    </section>
  );
}

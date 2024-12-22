import { ProductTypes } from "@/sanity.types";
import Link from "next/link";

function ProductThumb({product}: {product: ProductTypes}) {
    const IsOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <Link 
         href={`/products/${product.slug?.current}`}
         className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden ${IsOutOfStock ? "opacity-50" : ""}`}
        >
            Product
        </Link>
    )
}

export default ProductThumb;
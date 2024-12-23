import { ProductTypes } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import imageUrl from "@/lib/imageUrl"; // Adjust the import path as necessary


function ProductThumb({product}: {product: ProductTypes}) {
    const IsOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <Link 
         href={`/products/${product.slug?.current}`}
         className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden ${IsOutOfStock ? "opacity-50" : ""}`}
        >
            <div className="relative aspect-square w-full h-full overflow-hidden">
                <Image
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                src={imageUrl(product.Image).url()}
                alt={product.name || "Product Image"}
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {IsOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <span className="text-white font-bold text-lg">Out Of Stock</span>
                    </div>
                )}
            </div>
        </Link>
    )
}

export default ProductThumb;
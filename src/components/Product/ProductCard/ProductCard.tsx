import Product from "@/models/Product/Product"


interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product } : ProductCardProps) {
    
    return (
        <>
            <div className="bg-white border-[1px] rounded-[10px] border-black shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] w-[242px] h-[234px] px-[20px] pt-[17px] pb-[12px]
            font-normal">
                <img 
                src={product.image} 
                alt="product image custom alt" 
                className="h-[123px] w-full"
                />
                <h2 className="text-[15px]  leading-[18px] mt-[8px]">{product.name}</h2>
                <p className="text-[14px] leading-[17px]">{product.brand}</p>
                <p className="text-[26px] font-bold leading-[31.5px] mt-[12px]">R$ {(+product.price).toFixed(2)}</p>
            </div>
        </>
    )
}
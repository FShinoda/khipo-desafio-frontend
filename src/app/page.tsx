import Header from "@/components/Header/Header";
import ProductCard from "@/components/Product/ProductCard/ProductCard";
import Product from "@/models/Product/Product";

export default async function Home() {

    let products : Product[] | null = [];
    try {
        const data = await fetch('http://localhost:3000/api/v1/products/', { cache: 'no-store'});
        products = await data.json();
        
    } catch (err){
        console.log(err)
    }
    
    return (
        <>
            <Header />
            <div className="sm:mx-[130px] mt-[85px]">
                <ul className="flex flex-wrap gap-x-[65px] gap-y-[85px] justify-center">

                    {Array.isArray(products)? 
                        (<>
                            {products.length === 0? (
                                <p>Não há produtos disponíveis</p>
                            ) : (
                                <>
                                    {products.map((product : Product) => (
                                        <ProductCard key={product.id} product={product}/>
                                    ))}
                                </>
                            )}
                        </>) : (
                            <p>Algum erro ocorreu... Tente novamente</p>
                        )}
                </ul>
            </div>
        </>
    )

}
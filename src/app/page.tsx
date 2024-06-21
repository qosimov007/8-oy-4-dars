import Link from "next/link";
import Image from "next/image";
const getData = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data;
}

interface Product {
  id: number;
  title: string;
  price: number;
  images:string[];
  
}

async function Home() {
  const data = await getData();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 lg:mx-36">
      {data.products.map((product: Product) => (
<div key={product.id}  className="card h-[400px] mb-5 w-80 bg-base-100 shadow-xl">

<figure>
            {product.images && product.images.length > 0 ? (
              <Image
                className="md:h-auto w-full object-cover"
                src={product.images[0]}  // Use the first image of the product
                alt={product.title}
                width={400}
                height={300}
              />
            ) : (
              <div className="w-full h-[300px] flex items-center justify-center bg-gray-200">
                No Image Available
              </div>
            )}
          </figure>
<div className="card-body">
  <h2 className="card-title">{product.title}</h2>
  <p>{product.price}$</p>

  <div className="card-actions justify-end">
    <button className="btn btn-primary">
     <Link  href={`/product/${product.id}`}>read more</Link>

    </button>
  </div>
</div>
</div>
      ))}
    </div>
  );
}

export default Home;

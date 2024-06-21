import Link from "next/link";
import Image from "next/image";
const getData = async (id: string) => {
  const res = await fetch('https://dummyjson.com/products/' + id);
  const data = await res.json();
  return data;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description:string;
  brand:string;
  category:string;
  rating:number;
  warrantyInformation:string;
  images:string;
  thumbnail:string
}

async function Product({ params: { id } }: { params: { id: string } }) {
  const data: Product = await getData(id);

  return (
    <div>
  
      <div className="card  mt-10 lg:mx-36">
        <Link className="bg-blue-500 p-2  text-white text-center  w-20 rounded px-4" href="/">Back</Link>
       <div className="card-body objext-cover border sm:w-[100px] lg:w-[700px] rounded-lg  mb-5 mx-auto">
       {/* <img src={data.thumbnail} alt="" className="h-96 object-cover rounded mb-5" />
        */}
           <Image 
            src={data.thumbnail} 
            alt={data.title} 
            width={700} 
            height={700} 
            className="h-96 object-cover rounded mb-5" 
          />
       <h2 className="font-semibold text-xl">Title: {data.title}</h2>
        <h3>Brand: {data.brand}</h3>
        <h3>Category: {data.category}</h3>
        <h4>Rating: {data.rating}</h4>
        <p>Description: <span className="text-sm">{data.description}</span></p>
        <p>Warranty: {data.warrantyInformation}</p>
        <p>Price: {data.price}$</p>
       </div>
      </div>
    </div>
  );
}

export default Product;

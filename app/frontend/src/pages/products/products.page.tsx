import Header from "./components/Header";
import ProductTable from "./components/product.table";

function ProductsPage() {
	return (
		<div className='h-screen'> 
			<Header></Header>
			
			<div className=" w-full h-full bg-slate-100  top-0 left-0 right-0 bottom-0 items-center ">
				<ProductTable></ProductTable>
			</div>
		</div>
	);
}

export default ProductsPage;

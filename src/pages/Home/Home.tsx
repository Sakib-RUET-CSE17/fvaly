import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import useAsync from 'hooks/useAsync';
import ProductService from 'services/ProductService';
// import ProductService from 'services/ProductService';

const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   ProductService.getProducts()
  //     .then(res => setProducts(res))
  // }, [])

  const { data, isLoading } = useAsync(ProductService.getProducts)

  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={data} />
    </div>
  );
};

export default Home;

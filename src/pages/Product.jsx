
import { PlantCard } from "../components/PlantCard";
import "./product.css"; 
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {actionCreators} from '../state/index';

export default function ProductListPage() {


  
  const cart = useSelector((state) => state.items);

  const dispatch = useDispatch();


  const dummyProducts = [
    { id: 1, name: "Snake Plant", category: "Indoor", price: 15, image: "./snakeplant.jpg" },
    { id: 2, name: "Spider Plant", category: "Indoor", price: 12, image: "./spiderplant.jpg" },
    { id: 3, name: "Peace Lily", category: "Flowering", price: 20, image: "./peaceLilly.jpg" },
    { id: 4, name: "Anthurium", category: "Flowering", price: 22, image: "./anthurium.jpg" },
    { id: 5, name: "ZZ Plant", category: "Low Light", price: 18, image: "./zzplant.jpg" },
    { id: 6, name: "Pothos", category: "Low Light", price: 10, image: "./pothos.jpg" },
  ];

  
  const handleAdd = (plant) => {

  
    dispatch(actionCreators.addtocart(plant));
    
    
  };




  const categories = ["Indoor", "Flowering", "Low Light"];

  return (
    <div className="product-list-page">
      <h2>All Plants</h2>
      <p>Cart: {cart.length} items</p>

      {categories.map((category) => (
        <div key={category}>
          <h3>{category} Plants</h3>
          <div className="plant-list">
            {dummyProducts
              .filter((p) => p.category === category)
              .map((plant) => (

                <PlantCard
                  key={plant.id}
                  plant={plant}
                  cart={cart}
                  handleAdd={handleAdd}
                  
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import "./Card.css";

export default function Card(props) {
  const { resData } = props;
  
  // Check if resData is available
  if (!resData || !resData.length) {
    return <div>No data available</div>;
  }

  const { data } = resData[0];
  const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${data.cloudinaryImageId}`;

  return (
    <div className="card-container">
      <div className="card">
        <img className="card-img" src={imageUrl} alt={data.name} />
        <h3>{data.name}</h3>
        <h4>{data.cuisines.join(', ')}</h4>
        <h4>{data.avgRating}</h4>
        <h5>₹{data.costForTwo / 100}</h5>
      </div>
    </div>
  );
}





// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=195429&catalog_qa=undefined&submitAction=ENTER





import './DeliveryService.css'
const DeliveryService = (props)=>{
    return(
        <div className="delivery-service-container">
            <h1>Delivery Details</h1>
            <div>
                <h2>Delivery Items {props.item} sending to {props.destination}</h2>
            </div>
            <div>
                <img src={props.img} alt="delivery"/>
            </div>
        </div>
    )
};
export default DeliveryService 


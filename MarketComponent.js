import DeliveryService from './DeliveryService.js'
const MarketComponent = ()=>{
    return(
        <div>
            <DeliveryService
             item="Groceries" 
             destination="Red House" 
             img="https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/busyconsumers_0.jpg?itok=7RPdmM_R"
             />
             <DeliveryService
             item="FoodPackages"
             destination="Blue House"
             img="https://everyaustraliancounts.com.au/wp-content/uploads/groceries-970x970.jpg"
             />
             <DeliveryService
             item="Mail"
             destination="Green House"
             img="https://i.pinimg.com/736x/16/13/8a/16138aed4bf80087559e7125282ee6bf--rural-mailbox-mailbox-post.jpg"
             />

        </div>
    )
}
export default MarketComponent 
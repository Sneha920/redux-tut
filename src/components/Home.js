import React from "react";
function Home(){
    return(
        <div> 
            <h1> Home Component</h1>
            <div className="add-to-cart">
                <img src ="https://www.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-600nw-1690453492.jpg"></img>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src = "https://img.etimg.com/thumb/width-640,height-480,imgsize-35708,resizemode-75,msid-98897778/top-trending-products/mobile-phones/6-latest-mobile-phones-with-12gb-ram-in-india-in-2023-starting-at-rs-29999/6-latest-mobile-phones-with-12gb-ram-in-india.jpg"></img>
                </div>
                <div className="text-wrapper item">
                    <span>Iphone</span><br/>
                    <span>Price : $10000</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
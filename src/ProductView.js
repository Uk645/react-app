import React from 'react';
import './ProductView.css';

function ProductView(props){
	var date = new Date();
        var hour = date.getHours()>9?date.getHours():'0'+date.getHours();
        var minutes = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
        var time = hour+':'+minutes;
	return(
                <div className="ProductView">                                  
		<img src={props.ProductData.colorOptions[props.CurrentProductPos].imageUrl } alt="" />
		<div className="Features">
		{props.showHeartBeat?
		<div className="Heart">
		  <i className="fa fa-heartbeat"></i>
	 	  <p>78</p>
		</div>
		:
			<div>
		{time}
			</div>
		}
		</div>
	
                </div>

	)
}

export default ProductView;
       

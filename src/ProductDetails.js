import React from 'react';
import './ProductDetails.css';

function ProductDetails(props){
	const colorOption =()=>
               props.ProductData.colorOptions.map((item,pos)=>{
        return(<img src={item.imageUrl} alt="" onClick={()=>props.handleColorClick(pos)} />)

                })
	const featureOption=()=>
		props.ProductData.featureList.map((feature,pos)=>{
                   return(<button onClick={()=>props.handleFeatures(pos)} key={pos}>{feature}</button>)
		})
	return(
                <div className="ProductDetails">
                  <h3>{props.ProductData.title }</h3>
                  <p>{props.ProductData.description}</p>              
                  <div className="ColorOptions">
                    {colorOption()}
                  </div>                                                          <div className="FeatureList">                                     <h3>Features</h3>
                     {featureOption()}
		    
                  </div>
		</div>)
}
export default ProductDetails;

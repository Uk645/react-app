import React, {Component} from 'react';
import ProductView from './ProductView'; 
import ProductDetails from './ProductDetails';  
import Topbar from './Topbar';
import ProductData from './ProductData';
import './Topbar.css';                         
import './ProductView.css';
import './ProductDetails.css'; 
import './Products.css';

class App extends Component{
	constructor(){
		super();
		this.state={
			ProductData:ProductData,
			CurrentProductPos:0,
			showHeartBeat:false,
			currentFeature:"none"
		};
	}
        handleColorClick =(pos)=>{
          if(pos===this.state.CurrentProductPos){
	     alert("same color selected");
	  }else{
	     this.setState({CurrentProductPos:pos});
	  }
	}
        handleFeatures=(pos)=>{
          if(pos===0){
		  this.setState({showHeartBeat:false});
	  }else if(pos===1){
                this.setState({showHeartBeat:true});
	  }

	}

	render(){
             return(
                     <div className="App">
                        <Topbar />
                        <ProductView showHeartBeat={this.state.showHeartBeat}  ProductData={this.state.ProductData} CurrentProductPos={this.state.CurrentProductPos}/>
                        <ProductDetails ProductData={this.state.ProductData} handleColorClick={this.handleColorClick} showHeartBeat={this.state.showHeartBeat} handleFeatures={this.handleFeatures}/>
                     </div>)
	}
}
export default App;

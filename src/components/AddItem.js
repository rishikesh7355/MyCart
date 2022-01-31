import React from "react";
class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName:"",
            productPrice:0
        }
    }
    render() {
        return (
            <div className="container">
                <form className='row my-5'
                 onSubmit={(e)=>{e.preventDefault();this.props.addItem(this.state.productName,Number(this.state.productPrice))}}>
                    <div className="form-group col-4">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="inputName" aria-describedby="name" placeholder=" Item Name" name="productName"
                         onChange={ (e)=>{
                            this.setState({ productName:(e.currentTarget.value)})
                        }}
                        value={this.state.productName}
                        />
    
                    </div>
                    <div className="form-group  col-4">
                        <label htmlFor="inputPrice">Price</label>
                        <input type="text" className="form-control" id="price" placeholder="Item Price" name='productPrice'
                        onChange={ (e)=>{
                            this.setState({ productPrice:Number(e.currentTarget.value)})
                        }}
                        value={this.state.productPrice}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary col-4 mt-4">Add</button>
                </form>
            </div>
        )
    }
}

export default AddItem
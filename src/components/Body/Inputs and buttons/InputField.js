import React,{useState} from "react";


const InputField= ({onItemSubmit})=>{

    const[ID, setID] = useState('')
    const idHandler = (event)=>{
        setID(event.target.value)
    }

    const [price , setPrice] = useState('')
    const priceHandler = (event)=>{
        setPrice(event.target.value)
    }

    const [dish , setDish] = useState('')  
    const dishHandler = (event)=>{
        setDish(event.target.value)
    }

    const [table , setTable] = useState('Table 1')
    const tableHandler = (event)=>{     
        setTable(event.target.value)
    }
 

    const handleSubmit = () => {
        // Create a new item object
        const newItem = {
          ID : ID,  
          price: price,
          dish: dish,
          table: table,
        }    

        onItemSubmit(newItem)

        // Clear the input fields
        setPrice("");
        setDish("");
        setID("")
      };



      
    return(

        <div className="d-flex justify-content-around fonts">
            <div className="Form">
                <label>Product ID</label>
                <input className="m-2" type="Number" value={ID} onChange={idHandler} placeholder="Enter ID" />
                <label>Selling Price</label>
                <input className="m-2" type="Number" value={price} onChange={priceHandler} placeholder="Enter Price" />
                <label>Product name</label>
                <input className="m-2" type="text" value={dish} onChange={dishHandler} placeholder="Enter Product"/>
                <label className="m-2">Choose a Category</label>
                <select name="Category" id="Category" value={table} onChange={tableHandler}>
                    <option value="Table 1">Electronic items</option>
                    <option value="Table 2">Food items</option>
                    <option value="Table 3">Skin care items</option>
                </select>
                <button className="btn btn-primary ms-3" onClick={handleSubmit}>Add Bill</button>
            </div>
        </div>
    )
}

export default InputField;
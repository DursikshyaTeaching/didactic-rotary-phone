import React from "react";
import { axiosClient } from "../clients";


export default class AddItem extends React.Component{
    input = {
        name:"",
        description:"",
        price:0,
        image:null
    };

    handleSubmit(e){
        e.preventDefault();
        let formData = new FormData();
        formData.append("name",this.input.name);
        formData.append("description",this.input.description);
        formData.append("image",this.input.image);



        console.log(formData,"formdata")
        console.log(this.input,"input")

        let formImage = new FormData();
        formImage.append("file",this.input.image)
        console.log(formImage,"iiiiiiiiii")

        // axiosClient.post("/items",formData)
        axiosClient.post("/items/addImage",formData)

    }
    handleChange(e){
        console.log("changed")
        this.input = {
            ...this.input,
            [e.currentTarget.name]:e.currentTarget.value
        }
    }
    render(){
        return (
            <>
                <form onSubmit={(e) =>this.handleSubmit(e)} method="POST">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Enter Item Name" name="name" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" placeholder="Enter Description" name="description" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" placeholder="Enter Price" name="price" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="file" class="form-control" name="image" onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
}
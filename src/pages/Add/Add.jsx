import React, { useState } from "react";
import "./Add.css";
import Placeholder from "../../assests/placeholder.png";
import axios from "axios";
import { toast } from "react-toastify";
const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);

    // If the request is successful, reset the form and image state
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <p>Upload Image</p>
          <label
            htmlFor="image"
            className="form-label"
            style={{ cursor: "pointer" }}
          >
            <img
              src={image ? URL.createObjectURL(image) : Placeholder}
              alt=""
              width={120}
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control"
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Product Name
          </label>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="form-control"
            type="text"
            placeholder="Type here"
            aria-label="default input example"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Product Description
          </label>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            placeholder="Write Content Here"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            name="description"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className=" add-category flex-col">
            <label htmlFor="category" className="form-label label">
              Product Name
            </label>
            <select name="category" onChange={onChangeHandler}>
              <option value="Salad">Salad</option>
              <option value="Rools">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className=" add-price flex-col">
            <label htmlFor="number" className="form-label label">
              Product Name
            </label>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              placeholder="$10"
              name="price"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark px-5 mt-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;

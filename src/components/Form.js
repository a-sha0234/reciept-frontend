import { react, useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({
    // stores user input
    name: "",
    location: "",
    price: "",
  });

  function handleChange(e) {
    // changes formData with every keystroke
    const { name, value } = e.target;
    return setFormData((prev) => {
      return {
        ...prev, // return previous data
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    // executes submit button is clicked
    props.setUserFormData(formData);
  }

  return (
    <form>
      <label>Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        type="text"
        required
      ></input>
      {/*  */}
      <label>Location</label>
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        type="text"
        required
      ></input>
      {/*  */}
      <label>Price</label>
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        type="number"
        required
      ></input>
      {/*  */}
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

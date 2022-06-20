import { useState } from "react";
import { updateReceipt } from "../api/receipts";

export default function EditTableRow(props) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    cost: "",
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
    updateReceipt(props.storeUpdateId, formData);
  }

  console.log(formData.name, formData.location);
  return (
    <form className="editForm">
      <label>Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      ></input>

      {/*  */}
      <label>Location</label>
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      ></input>
      {/*  */}
      <label>Price</label>
      <input
        name="cost"
        value={formData.cost}
        onChange={handleChange}
        required
      ></input>
      <button onClick={handleSubmit} id="applyChanges">
        Apply Changes{" "}
      </button>
    </form>
  );
}

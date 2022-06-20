import EditTableRow from "./EditTableRow";
import { useState } from "react";
import { deleteReceipt } from "../api/receipts";

export default function Table(props) {
  const [isEdit, setIsEdit] = useState(false); // track if edit button is clicked

  const [editFormData, setEditFormData] = useState(); // stores the new data the user enters

  const [storeUpdateId, setStoreUpdataId] = useState(); // stores the id of item the user wants to update

  function deleteRow(e) {
    // function to delete
    const { className } = e.target;
    deleteReceipt(className);

    window.location.reload(false); // cause refresh
  }

  function editRow(e) {
    // retrive if of which edit button was clicked
    setIsEdit((prev) => !prev);
    const { className } = e.target;
    setStoreUpdataId(className);
  }

  function formatDate(date) {
    // format createdAt to retrive the date only
    let dateArr = date.split("T");
    return dateArr[0];
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Cost</th>
            <th>Date of Creation</th>
          </tr>
        </thead>
        <tbody>
          {props.storeReceipts.map((data) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td> {data.location}</td>
                {/* convert to two decimal places  */}
                <td>£{Number(data.cost).toFixed(2)} </td>
                <td>{formatDate(data.createdAt)} </td>
                <td>
                  <button onClick={editRow} className={data._id} id="edit">
                    Edit
                  </button>
                </td>

                <td>
                  <button onClick={deleteRow} className={data._id} id="delete">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* render edit form */}
      {isEdit == true && storeUpdateId != null && (
        <EditTableRow
          storeUpdateId={storeUpdateId}
          setEditFormData={setEditFormData}
        />
      )}
    </div>
  );
}

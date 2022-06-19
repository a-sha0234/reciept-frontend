import axios from "axios";
import instance from "../axios";

async function fetchAllReceipts(setter) {
  // function to retrive all receipts
  try {
    const getReceipts = await instance.get("/");
    setter(getReceipts.data);
  } catch (err) {
    console.log(err);
  }
}

async function addReceipt(data) {
  // add receipts to database
  try {
    const addReceipt = await instance.post("/createReceipt", data);
  } catch (err) {
    console.log(err);
  }
}

async function deleteReceipt(data) {
  // delete receipt in database
  try {
    const deleteReceipt = await instance.delete(`/delete/${data}`);
  } catch (err) {
    console.log(err);
  }
}

async function updateReceipt(id, data) {
  //update receipt in database
  try {
    const updateReceipt = await instance.put(`/update/${id}`, data);
    console.log(updateReceipt);
  } catch (err) {
    console.log(err);
  }
}

export { fetchAllReceipts, addReceipt, deleteReceipt, updateReceipt };

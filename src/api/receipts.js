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
    console.log(addReceipt);
  } catch (err) {
    console.log(err);
  }
}

export { fetchAllReceipts, addReceipt };

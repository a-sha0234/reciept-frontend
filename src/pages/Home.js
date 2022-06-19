import { useEffect, useState } from "react";
import Form from "../components/Form";
import { fetchAllReceipts, addReceipt } from "../api/receipts";
import Table from "../components/Table";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [userFormData, setUserFormData] = useState({}); // stores users form data

  const [storeReceipts, setStoreReceipts] = useState([]); // stores all receipts data

  useEffect(() => {
    // api call to fetch all receipts
    fetchAllReceipts(setStoreReceipts);
  }, []);

  function convertPrice() {
    // converts price to two decimal places
    let formObject = userFormData;
    let newNum = Number(formObject.price).toFixed(2);
    formObject.price = newNum;
    return formObject;
  }

  function addUuid() {
    // add uuid to each receipt
    let formObject = convertPrice();
    formObject.id = uuidv4();
    return formObject;
  }

  console.log(userFormData);
  useEffect(() => {
    // api call to add receipt to database
    if (Object.keys(userFormData).length !== 0) {
      addReceipt(addUuid());
    }
  }, [userFormData]);

  return (
    <div>
      <Form setUserFormData={setUserFormData} />
      {/* only render Table.js component once all receipts have been retrived from database  */}
      <Table storeReceipts={storeReceipts} />
    </div>
  );
}

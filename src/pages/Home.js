import { useEffect, useState } from "react";
import Form from "../components/Form";
import { fetchAllReceipts, addReceipt } from "../api/receipts";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [userFormData, setUserFormData] = useState({}); // stores users form data

  const [storeReceipts, setStoreReceipts] = useState(); // stores all receipts data

  useEffect(() => {
    // api call to fetch all receipts
    fetchAllReceipts(setStoreReceipts);
  }, []);

  useEffect(() => {
    // api call to add receipt to database
    if (Object.keys(userFormData).length !== 0) {
      let formObject = userFormData;
      formObject.id = uuidv4();
      console.log(formObject);
      addReceipt(formObject);
    }
  }, [userFormData]);

  console.log(storeReceipts);

  return (
    <div>
      <Form setUserFormData={setUserFormData} />
    </div>
  );
}

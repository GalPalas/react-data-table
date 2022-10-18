import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data/data.json";

interface Contact {
  id: string;
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
}

const App = () => {
  const [contacts, setContact] = useState(data);
  const [addFormContact, setAddFormContact] = useState<Contact>({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (e: any) => {
    e.preventDefault();

    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    const newFormData: any = { ...addFormContact };
    newFormData[fieldName] = fieldValue;
    setAddFormContact(newFormData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormContact.fullName,
      address: addFormContact.address,
      phoneNumber: addFormContact.phoneNumber,
      email: addFormContact.email,
    };

    const newContacts = [...contacts, newContact];
    setContact(newContacts);
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="table-primary">
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add a Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-around">
          <input
            required
            type="text"
            name="fullName"
            placeholder="Enter FullName"
            className="form-control mx-2"
            onChange={(e) => handleAddFormChange(e)}
          />
          <input
            required
            type="text"
            name="address"
            placeholder="Enter Address"
            className="form-control mx-2"
            onChange={(e) => handleAddFormChange(e)}
          />
          <input
            required
            type="text"
            name="phoneNumber"
            className="form-control mx-2"
            placeholder="Enter Phone Number"
            onChange={(e) => handleAddFormChange(e)}
          />
          <input
            required
            type="text"
            name="email"
            placeholder="Enter Email"
            className="form-control mx-2"
            onChange={(e) => handleAddFormChange(e)}
          />
          <button type="submit" className="btn btn-primary btn-sm">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;

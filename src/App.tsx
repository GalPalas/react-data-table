import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data/data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

interface Contact {
  id: string;
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
}

const App = () => {
  const [editContactId, setEditContactId] = useState("");
  const [contacts, setContact] = useState(data);
  const [addFormContact, setAddFormContact] = useState<Contact>({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
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

  const handleEditFormSubmit = (event: any) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContact(newContacts);
    setEditContactId("");
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

  const handleCancelClick = () => {
    setEditContactId("");
  };

  const handleEditFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData: any = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditClick = (e: any, contact: Contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleDeleteClick = (contactId: string) => {
    let newContacts = [...contacts];
    newContacts = newContacts.filter((contact) => contact.id !== contactId);
    setContact(newContacts);
  };

  return (
    <div className="container">
      <form onSubmit={handleEditFormSubmit}>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                {editContactId === contact.id ? (
                  <EditableRow
                    key={contact.id}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    key={contact.id}
                    contact={contact}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>

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
          <button type="submit" className="btn btn-success btn-sm">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;

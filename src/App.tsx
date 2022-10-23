import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data/data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import Input from "./common/input";
import Button from "./common/button";
import TableHeader from "./common/tableHeader";

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

  const handleEditClick = (contact: Contact) => {
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
          <TableHeader />
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
          <Input
            name="fullName"
            placeholder="Enter Full Name"
            onChange={(e: Event) => handleAddFormChange(e)}
          />
          <Input
            name="address"
            placeholder="Enter Address"
            onChange={(e: Event) => handleAddFormChange(e)}
          />
          <Input
            name="phoneNumber"
            placeholder="Enter Phone Number"
            onChange={(e: Event) => handleAddFormChange(e)}
          />
          <Input
            name="email"
            placeholder="Enter Email"
            onChange={(e: Event) => handleAddFormChange(e)}
          />
          <Button
            type="submit"
            className="btn btn-success btn-sm"
            lable="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default App;

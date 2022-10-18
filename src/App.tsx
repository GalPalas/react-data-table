import { useState } from "react";
import data from "./data/data.json";

const App = () => {
  const [contacts, setContact] = useState(data);

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
    </div>
  );
};

export default App;

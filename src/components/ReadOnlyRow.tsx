import Button from "../common/button";

const ReadOnlyRow = ({ contact, onEdit, onDelete }: any) => {
  const { id, fullName, address, phoneNumber, email } = contact;
  return (
    <tr key={id} className="table-primary">
      <td>{fullName}</td>
      <td>{address}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>
        <Button
          className="btn btn-primary btn-sm"
          onClick={() => onEdit(contact)}
          lable="Edit"
        />

        <Button
          className="btn btn-danger btn-sm mx-2"
          onClick={() => onDelete(contact.id)}
          lable="Delete"
        />
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

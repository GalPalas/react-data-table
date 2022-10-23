const ReadOnlyRow = ({ contact, onEdit, onDelete }: any) => {
  const { id, fullName, address, phoneNumber, email } = contact;
  return (
    <tr key={id} className="table-primary">
      <td>{fullName}</td>
      <td>{address}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>
        <button
          className="btn btn-primary btn-sm"
          onClick={(e) => onEdit(e, contact)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm mx-2"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

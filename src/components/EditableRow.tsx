const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}: any) => {
  return (
    <tr className="table-primary">
      <td>
        <input
          required
          type="text"
          name="fullName"
          placeholder="Enter FullName"
          className="form-control mx-2"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>

      <td>
        <input
          required
          type="text"
          name="address"
          placeholder="Enter Address"
          className="form-control mx-2"
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          required
          type="text"
          name="phoneNumber"
          className="form-control mx-2"
          placeholder="Enter Phone Number"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          required
          type="text"
          name="email"
          placeholder="Enter Email"
          className="form-control mx-2"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit" className="btn btn-success btn-sm">
          Save
        </button>
        <button
          type="button"
          className="btn btn-warning btn-sm mx-2"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;

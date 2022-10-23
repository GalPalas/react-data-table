import Button from "../common/button";
import Input from "../common/input";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}: any) => {
  const { fullName, address, phoneNumber, email } = editFormData;
  return (
    <tr className="table-primary">
      <td>
        <Input
          name="fullName"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <Input
          name="address"
          placeholder="Enter Address"
          value={address}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <Input
          name="phoneNumber"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <Input
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <Button type="submit" className="btn btn-success btn-sm" lable="Save" />
        <Button
          type="button"
          className="btn btn-warning btn-sm mx-2"
          onClick={handleCancelClick}
          lable="Cancel"
        />
      </td>
    </tr>
  );
};

export default EditableRow;

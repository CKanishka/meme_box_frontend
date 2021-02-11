import React, { useEffect } from "react";
import { Modal, Button } from "antd";
import { AppstoreAddOutlined,EditOutlined } from "@ant-design/icons";
import InputForm from "./InputForm";

const FormDialog = ({ visible, form, setIsEdit, isEdit, hideModal }) => {
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");

    form
      .validateFields() // If all fields validated then try submitting the form
      .then((res) => {
        console.log(res);
        setConfirmLoading(true);
        setTimeout(() => {
          setIsEdit(false);   // Reset edit mode
          form.resetFields(); // If form submit was successful, then reset the fields and close the dialog
          setConfirmLoading(false);
          hideModal();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    setIsEdit(false);   // Reset edit mode 
    form.resetFields(); // clear the form on cancel
    hideModal();
  };

  return (
    <Modal
      title="Meme Details"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          icon={ isEdit? <EditOutlined />: <AppstoreAddOutlined />}
          onClick={handleOk}
        >
          {isEdit ? "Update Meme" : "Add to Meme Box"}
        </Button>,
      ]}
    >
      <InputForm form={form} />
    </Modal>
  );
};

export default FormDialog;

import React from "react";
import { Modal, Form, Button } from "antd";
import {AppstoreAddOutlined } from '@ant-design/icons';
import InputForm from "./InputForm";

const FormDialog = ({ visible, hideModal }) => {
  const [form] = Form.useForm();
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
          form.resetFields(); // If form submit was successful, then reset the fields and close the dialog
          setConfirmLoading(false);
          hideModal();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
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
        <Button key="submit" type="primary" icon={<AppstoreAddOutlined />} onClick={handleOk}>
            Add to Meme Box
        </Button>
      ]}
    >
      <InputForm form={form} />
    </Modal>
  );
};

export default FormDialog;

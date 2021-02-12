import React from "react";
import { Modal, Button} from "antd";
import { AppstoreAddOutlined, EditOutlined } from "@ant-design/icons";
import InputForm from "./InputForm";

const FormDialog = ({
  visible,
  form,
  setIsEdit,
  isEdit,
  hideModal,
  addMeme,
  updateMeme
}) => {
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const handleOk = async () => {
    await form.validateFields(); // If all fields validated then try submitting the form
    setConfirmLoading(true);
    isEdit?await updateMeme():await addMeme();
    setConfirmLoading(false);
    setIsEdit(false); // Reset edit mode
    form.resetFields(); // If form submit was successful, then reset the fields and close the dialog
    hideModal();
  };

  const handleCancel = () => {
    setIsEdit(false); // Reset edit mode
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
          loading={confirmLoading}
          icon={isEdit ? <EditOutlined /> : <AppstoreAddOutlined />}
          onClick={handleOk}
        >
          {isEdit ? "Update Meme" : "Add to Meme Box"}
        </Button>,
      ]}
    >
      <InputForm form={form} isEdit={isEdit}/>
    </Modal>
  );
};

export default FormDialog;

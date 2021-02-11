import React from 'react';
import { Modal } from 'antd';
import InputForm from './InputForm';

const FormDialog = ({visible,hideModal}) => {
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
    hideModal()
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    hideModal()
  };

  return (
    
    <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
    >
        <InputForm />
    </Modal>
    
  );
};

export default FormDialog;
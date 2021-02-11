import { Form, Input, Button } from 'antd';
import {AppstoreAddOutlined,UserOutlined,PictureOutlined,HighlightOutlined} from '@ant-design/icons';


const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const InputForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="inputForm"
      initialValues={{
        name:'',
        caption:'',
        url:''
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Meme Owner"
        name="name"
        rules={[
          {
            required: true,
            message: "Feeling shy 😊 to share your name? No worries I will keep it safe",
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="What do friends call you?"/>
      </Form.Item>

      <Form.Item
        label="Caption"
        name="caption"
        rules={[
          {
            required: true,
            message: 'AHH!!! Cannot think of any creative caption?',
          },
        ]}
      >
        <Input prefix={<HighlightOutlined className="site-form-item-icon" />} placeholder="Give a caption. Feel free to shoot your creativity👨‍🎨"/>
      </Form.Item>

      <Form.Item
        label="URL"
        name="url"
        rules={[
          {
            required: true,
            message: "Genius! A meme without an image 🧐",
          },
        ]}
      >
        <Input prefix={<PictureOutlined className="site-form-item-icon" />} placeholder="Enter the cloud url of the image, and make sure there's no rain 🌧 "/>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" icon={<AppstoreAddOutlined />}>
          Add to Meme Box
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
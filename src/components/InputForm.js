import { Form, Input } from 'antd';
import {UserOutlined,PictureOutlined,HighlightOutlined} from '@ant-design/icons';


const InputForm = ({form}) => {
  return (
    <Form
      layout="vertical"
      name="inputForm"
      form={form}
      initialValues={{
        name:'',
        caption:'',
        url:''
      }}
    >
      <Form.Item
        label="Meme Owner"
        name="name"
        rules={[
          {
            required: true,
            message: "Insecure 🤔 to share your name? No worries I will keep it safe",
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
            message: 'Trying to be too creative, KISS 😎',
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
            message: "A meme without an image or an invisible meme 🧐",
          },
        ]}
      >
        <Input prefix={<PictureOutlined className="site-form-item-icon" />} placeholder="Enter the cloud url of the image, and make sure there's no rain 🌧 "/>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
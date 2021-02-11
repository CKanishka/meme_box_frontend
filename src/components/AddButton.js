import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const AddButton = ({ text,onClick }) => (
  <Button
    type="primary"
    shape="round"
    icon={<PlusCircleOutlined />}
    onClick={onClick}
    
  >
    {text && text.trim() ? text : "Add New Meme"}
  </Button>
);

export default AddButton;

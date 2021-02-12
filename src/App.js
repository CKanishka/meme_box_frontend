import React from "react";
import Layout, { Content } from "antd/lib/layout/layout";
import "./App.css";
import CardsList from "./components/CardsList";
import EmptyListCard from "./components/EmptyListCard";
import logo from "./static/images/logo.png";
import FormDialog from "./components/FormDialog";
import AddButton from "./components/AddButton";
import { Form } from "antd";

const data = [
  { 
    id:1,
    url: "https://cdn.memes.com/up/60455891599502993/i/1612992766278.jpg",
    caption: "Title 1",
    name:'User 1'
  },
  { 
    id:1,
    url: "https://cdn.memes.com/up/60455891599502993/i/1612992766278.jpg",
    caption: "Title 2",
    name:'User 1'
  },
  { id:1,
    url: "https://cdn.memes.com/up/60455891599502993/i/1612992766278.jpg",
    caption: "Title 3",
    name:'User 1'
  },
  { id:1,
    url: "https://cdn.memes.com/up/60455891599502993/i/1612992766278.jpg",
    caption: "Title 4",
    name:'User 1'
  },
  { id:1,
    url: "https://cdn.memes.com/up/60455891599502993/i/1612992766278.jpg",
    caption: "Title 5",
    name:'User 1'
  },
  { id:1, 
    url: "https://cdn.memes.com/up/60455891599502993/i/1612992766278.jpg",
    caption: "Title 6",
    name:'User 1'
  },
];

function App() {
  const [visible, setVisible] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [form] = Form.useForm();
  const showFormDialog = () => {
    setVisible(true);
  };
  const hideFormDialog = () => {
    setVisible(false);
  };
  return (
    <Layout>
      <Content>
        <div className="container">
          <div className="text-center">
            <img src={logo} width="300" height="200" alt="Meme Box Logo" />
            {data.length && <AddButton onClick={showFormDialog} />}
          </div>
          {!data.length && <EmptyListCard showFormDialog={showFormDialog} />}
          <CardsList data={data} form={form} showFormDialog={showFormDialog} setIsEdit={setIsEdit}/>
          <FormDialog visible={visible} form={form} isEdit={isEdit} setIsEdit={setIsEdit} hideModal={hideFormDialog} />
        </div>
      </Content>
    </Layout>
  );
}

export default App;

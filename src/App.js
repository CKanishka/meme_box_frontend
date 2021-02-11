import React from "react";
import Layout, { Content } from "antd/lib/layout/layout";
import "./App.css";
import CardsList from "./components/CardsList";
import EmptyListCard from "./components/EmptyListCard";
import logo from "./static/images/logo.png";
import FormDialog from "./components/FormDialog";
import AddButton from "./components/AddButton";
const data = [
  {
    title: "Title 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis",
  },
  {
    title: "Title 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis",
  },
  {
    img: "https:google.com",
    title: "Title 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis",
  },
  {
    img: "https:google.com",
    title: "Title 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis",
  },
  {
    img: "https:google.com",
    title: "Title 5",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis",
  },
  {
    img: "https:google.com",
    title: "Title 6",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est molestias, distinctio delectus quia similique qui corporis",
  },
];
function App() {
  const [visible, setVisible] = React.useState(false);
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
          <CardsList data={data} showFormDialog={showFormDialog} />
          <FormDialog visible={visible} hideModal={hideFormDialog} />
        </div>
      </Content>
    </Layout>
  );
}

export default App;

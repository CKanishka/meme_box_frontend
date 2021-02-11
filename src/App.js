import React from 'react';
import Layout, { Content } from "antd/lib/layout/layout";
import "./App.css";
import CardsList from "./components/CardsList";
import EmptyList from "./components/EmptyList";
import logo from "./static/images/logo.png";
import FormDialog from './components/FormDialog';

function App() {
  const [visible, setVisible] = React.useState(false);
  const showFormDialog = () => {
    setVisible(true);
  };
  const hideFormDialog = () => {
    setVisible(false);
  }
  return (
    <Layout>
      <Content>
        <div className="container">
          <div className="text-center">
            <img src={logo} width="300" height="200" alt="Meme Box Logo" />
          </div>
          <EmptyList showFormDialog={showFormDialog}/> 
          <CardsList showFormDialog={showFormDialog}/>
          <FormDialog visible={visible} hideModal={hideFormDialog}/>
        </div>
      </Content>
    </Layout>
  );
}

export default App;

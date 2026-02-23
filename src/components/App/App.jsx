import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import QuestionsPage from "../../pages/QuestionsPage/QuestionsPage";

import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <QuestionsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Header from "@widgets/Header/index";
import Footer from "@widgets/Footer/index";
import QuestionsPage from "@pages/index";

import "@app/App/App.scss";

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

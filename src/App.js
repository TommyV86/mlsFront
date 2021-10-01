import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Password } from "./components/Password";
import { NewPassword } from './components/NewPassword';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ForumPage } from "./components/Forum";
import { CreerTopic } from './components/CreerTopic';
import { Reponse } from './components/Reponse';
import { ModifierTopic } from './components/ModifierTopic';
import { ModifierReponse } from './components/reponseModif'

export function App() {
  return (
    <body className="Site">
      <BrowserRouter>
          <header>
            <Header />
          </header>
          <main className="Site-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/forum" exact component={ForumPage} />
              <Route path="/inscription" exact component={Signup} />
              <Route path="/connexion" exact component={Login} />
              <Route path="/password" exact component={Password}/>
              <Route path="/Reponse" exact component={Reponse}/>
              <Route path="/ModifierReponse" exact component={ModifierReponse}/>
              <Route path="/CreerTopic" exact component={CreerTopic}/>
              <Route path="/newPassword" exact component={NewPassword}/>
              <Route path="/modifierTopic" exact component={ModifierTopic}/>
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>

      </BrowserRouter>
    </body>
  );
}
export default App;
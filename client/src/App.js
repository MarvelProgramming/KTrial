import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import BrowsePage from './routes/BrowsePage';
import AboutPage from './routes/AboutPage';
import QuizPage from './routes/QuizPage';
import QuizCreationPage from './routes/QuizCreationPage';
import UserLoginPage from './routes/UserLoginPage';
import UserAccountSettingsPage from './routes/UserAccountSettingsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/browse" component={BrowsePage} />
        <Route path="/quiz/creation" component={QuizCreationPage} />
        <Route path="/quiz/:id" component={QuizPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={UserLoginPage} />
        <Route
          path="/user/account-settings"
          component={UserAccountSettingsPage}
        />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;

import './styles/App.css';
import { Route } from 'react-router-dom';
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
      <Route exact path="/" component={LandingPage} />
      <Route path="/browse" component={BrowsePage} />
      <Route path="/quiz/creation" component={QuizCreationPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/login" component={UserLoginPage} />
      <Route
        path="/user/account-settings"
        component={UserAccountSettingsPage}
      />
    </div>
  );
}

export default App;

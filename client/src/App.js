import './styles/App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import BrowsePage from './routes/BrowsePage';
import AboutPage from './routes/AboutPage';
import QuizPage from './routes/QuizPage';
import QuizCreationPage from './routes/QuizCreationPage';
import UserLoginPage from './routes/UserLoginPage';
import UserAccountSettingsPage from './routes/UserAccountSettingsPage';

function App() {
  const [userLogin, setUserLogin] = useState({
    loggedIn: false,
    username: ''
  });

  const updateLastLogin = () => {
    localStorage.setItem('lastLogin', Date.now());
  };

  const handleUserLogin = (loginInfo) => {
    setUserLogin(loginInfo);
    if (loginInfo.loggedIn) {
      localStorage.setItem('username', loginInfo.username);
      updateLastLogin();
    } else {
      localStorage.removeItem('username');
    }
  };

  const getTimeSinceLastLogin = () => {
    return Math.round(
      (Date.now() -
        (parseInt(localStorage.getItem('lastLogin')) || Date.now())) /
        1000 /
        60
    );
  };

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (getTimeSinceLastLogin() < 30 && username) {
      updateLastLogin();
      handleUserLogin({
        loggedIn: true,
        username
      });
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          path="/browse"
          component={(props) => <BrowsePage {...props} {...userLogin} />}
        />
        <Route
          path="/quiz/creation"
          component={(props) => <QuizCreationPage {...props} {...userLogin} />}
        />
        <Route
          path="/quiz/:id"
          component={(props) => <QuizPage {...props} {...userLogin} />}
        />
        <Route
          path="/about"
          component={(props) => <AboutPage {...props} {...userLogin} />}
        />
        <Route
          path="/login"
          component={(props) => (
            <UserLoginPage
              {...props}
              {...userLogin}
              handleUserLogin={handleUserLogin}
            />
          )}
        />
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

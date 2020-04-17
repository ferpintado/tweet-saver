import React from 'react';
import TweetSaver from './components/TweetSaver';
import GlobalStyle from './components/common/GlobalStyle.styled';
import Header from './components/common/Header.styled';

function App() {
  return (
    <div className="container-fluid">
      <GlobalStyle />
      <Header color="#009fff">Tweet Saver</Header>
      <TweetSaver />
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Budget from './components/Budget';
import AddBadget from './components/AddBadget';
import MyInfos from './components/MyInfos';
import * as S from './App.styles'

function App() {
  return (
    <S.GlobalContainer>
      <Header />

      <Routes>
        <Route path='/' element={<Budget />}/>
        <Route path='/add-badget' element={<AddBadget />}/>
        <Route path='/my-infos' element={<MyInfos />}/>
      </Routes>
    </S.GlobalContainer>
  );
}

export default App;

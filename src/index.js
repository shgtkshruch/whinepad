import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Logo from './Logo/Logo';
import Excel from './Excel/Excel';
import Discovery from './Discovery/Discovery';
import './index.css';

let headers = localStorage.getItem('headers');
let data = localStorage.getItem('data');

if (!headers) {
  headers = ['タイトル', '年', '評価', 'コメント'];
  data = [['テスト', '2015', '3', 'あああ']];
}

const Home = () => (
  <div>
    <h1>
      <Logo /> Whinepadにようこそ！
    </h1>
    <Excel headers={headers} initialData={data} />
  </div>
)

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/discovery" component={Discovery} />
    </div>
  </Router>,
  document.getElementById('root')
);

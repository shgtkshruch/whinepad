import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo/Logo';
import Excel from './Excel/Excel';

let headers = localStorage.getItem('headers');
let data = localStorage.getItem('data');

if (!headers) {
  headers = ['タイトル', '年', '評価', 'コメント'];
  data = [['テスト', '2015', '3', 'あああ']];
}

ReactDOM.render(
  <div>
    <h1>
      <Logo /> Whinepadにようこそ！
    </h1>
    <Excel headers={headers} initialData={data} />
  </div>,
  document.getElementById('root')
);

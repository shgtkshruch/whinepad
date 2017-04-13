import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Suggest from '../Suggest/Suggest';
import Rating from '../Rating/Rating';

class Discovery extends Component {
  render() {
    return (
      <div style={ {padding: '20px'} }>
        <h1>コンポーネント一覧</h1>

        <h2>Logo</h2>
        <div style={ {display: 'inline-block', background: 'purple'} }>
          <Logo />
        </div>

        <h2>Button</h2>
        <div>onClickが指定されたButton: <Button onClick={() => alert('クリックされました')}>クリック</Button></div>
        <div>hrefが指定されたButton: <Button href="http://reactjs.com">フォローする</Button></div>
        <div>クラス名が指定されたButton: <Button className="custom">何もしません</Button></div>

        <h2>Suggest</h2>
        <div><Suggest options={['eenie', 'meenie', 'miney', 'mo']} /></div>

        <h2>Rating</h2>
        <div>初期値なし： <Rating /></div>
        <div>初期値4： <Rating defaultValue={4} /></div>
        <div>最大値11： <Rating max={11} /></div>
        <div>読み取り専用： <Rating readonly={true} defaultValue={3} /></div>
      </div>
    )
  }
}

export default Discovery

import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

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

      </div>
    )
  }
}

export default Discovery

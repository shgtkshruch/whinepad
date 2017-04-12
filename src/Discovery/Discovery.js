import React, { Component } from 'react';
import Logo from '../Logo/Logo';

class Discovery extends Component {
  render() {
    return (
      <div style={ {padding: '20px'} }>
        <h1>コンポーネント一覧</h1>
        <h2>Logo</h2>
        <div style={ {display: 'inline-block', background: 'purple'} }>
          <Logo />
        </div>
      </div>
    )
  }
}

export default Discovery

import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Suggest from '../Suggest/Suggest';
import Rating from '../Rating/Rating';
import FormInput from '../FormInput/FormInput';
import Form from '../Form/Form';

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


        <h2>Form inputs</h2>
        <table><tbody>
            <tr>
              <td>単純な入力フィールド</td>
              <td><FormInput /></td>
            </tr>
            <tr>
              <td>デフォルト値</td>
              <td><FormInput defaultValue="it's like a default" /></td>
            </tr>
            <tr>
              <td>年の入力</td>
              <td><FormInput type="year" /></td>
            </tr>
            <tr>
              <td>評価</td>
              <td><FormInput type="rating" defaultValue={4} /></td>
            </tr>
            <tr>
              <td>入力候補</td>
              <td>
                <FormInput
                  type="suggest"
                  options={['red', 'green', 'blue']}
                  defaultValue="green"
                />
              </td>
            </tr>
            <tr>
              <td>単純なテキストエリア</td>
              <td><FormInput type="text" /></td>
            </tr>
        </tbody></table>


        <h2>Form</h2>

        <Form
          fields={[
            {label: '評価', type: 'rating', id: 'rateme'},
            {label: 'あいさつ', type: 'input', id: 'freetext'},
          ]}
          initialData={{rateme: 4, freetext: 'こんにちは'}} />

        <h2>Form readonly</h2>

        <Form
          fields={[
            {label: '評価', type: 'rating', id: 'rateme'},
            {label: 'あいさつ', type: 'input', id: 'freetext'},
          ]}
          initialData={{rateme: 4, freetext: 'こんにちは'}}
          readonly={true} />
      </div>
    )
  }
}

export default Discovery

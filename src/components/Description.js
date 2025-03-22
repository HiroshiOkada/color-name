import React from 'react';
import './Description.css';
import packageJson from '../../package.json';

function getLanguage() {
  return navigator.languages ? navigator.languages[0] : navigator.language;
}

function Description() {
  const githubURL = packageJson.repository.replace(/^git@github.com:/, 'https://github.com/');
  if (getLanguage().match(/ja/i)) {
    return (
      <div className="Description">
        <p>16進RGBから近い色を求めます。</p>
        <p>
          下の入力欄に16進数のRGBコードを入力してください。(例: #FF0000 #F00)<br />近い色の名前とそのコードを表示します。
        </p>
        <p>色の名前は CSS で定義されているものと、JIS慣用色名 を表示しています。</p>
        <p>逆引きもできます。</p>
        <p className="Description-LinktoGithub"><a href={githubURL}>ソースコード(GitHub)</a></p>
      </div>
    );
  }
  return (
    <div className="Description">
      <p>It will find some colors close to a hexadecimal RGB.</p>
      <p>
        Please enter the hexadecimal RGB code in the input field below. (Ex:
        #FF0000 #F00)<br />
        Then show the names of near colors and their codes.
      </p>
      <p>
        The name of colors in this page are came from CSS or JIS Z 8102:2001.
      </p>
      <p>Reverse lookup OK.</p>
      <p className="Description-LinktoGithub"><a href={githubURL}>srccode(GitHub)</a></p>
    </div>
  );
}

export default Description;

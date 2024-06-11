**A:ディレクトリの作成**
## ディレクトリを作成するとき
・デザインデータのURLなどを管理できるウrlディレクトリを作成
URL.txtというファイルを作成しURL管理すると開発効率が良い！

**B:bodyまでのテンプレートの利用**
## body>div>

body
トップページ：class も id も home

**C:レイアウト構成/mainの中身の構成/headerの中身の構成**
## 1 大きな構成：　 5 つ class/id

header,main,footer,スマホメニュー,ハンバーガーボタン

1 header l-hd header
2 main l-main main_area
3 footer l-ft footer
4 div l-sp-menu sp_menu
5 div l-sp-menu-btn sp_menu_btn

## 2 main の構成：　 5 つ class/id

first ビュー、メッセージ、オーナーや人、店舗情報、予約情報

1 header l-hd header
2 main l-main main_area
///2-1 l-home-firstview firstview
///2-2 l-section message
///2-3 l-section owner-person
///2-4 l-section shop-info
///2-5 l-section reserve-info  
3 footer l-ft footer
4 div l-sp-menu sp_menu
5 div l-sp-menu-btn sp_menu_btn

**D:headerの作り込み/スタイル**
## 3 header の構成　：2 つ　

ロゴ、ナビゲーション
( \_ \_ は続けると md ではエラーが出るので半角スペースで処理している)

1 header l-hd header
///1-1 p-hd
/// 1-1-1 p-hd\_ _logo
/// 1-1-2 p-hd_ \_nav header_nav
2 main l-main main_area
///2-1 l-home-firstview firstview
///2-2 l-section message
///2-3 l-section owner-person
///2-4 l-section shop-info
///2-5 l-section reserve-info  
3 footer l-ft footer
4 div l-sp-menu sp_menu
5 div l-sp-menu-btn sp_menu_btn

## 3-a 画像 firstview の設定は picture タグで

767 以下スマホの時、768 以上パソコンの時、どちらにも合わない時などが設定できる

## 3-b ページ内リンク設定　　 home へ

ジャンプ：ページ内の異なる箇所へ移動
遷移：異なるページへ移動



## 3-c スタイル設置　

これはうまくいかなかったので next で処理した
・sass フォルダをルート直下に作成
・その中に\_common_first_view.scss ファイルを作成
・root/sass/\_common_first_view.scss を作成しコードを記述
・sass ファイルに css を記述したら,watch sass をクリックして watching にしてコンパイルする
next
・css フォルダの中に\_common_first_view.scss ファイルを作成、コードを書いてコンパイル
・Generated:
/Users/lumi/Desktop/u_pra01_ummeccha/css/home_first_view.css.map
/Users/lumi/Desktop/u_pra01_ummeccha/css/home_first_view.css 出来上がった

## nav作成
・li>aでリンクさせる
・main内のidを利用してnavlistにahrefでジャンプさせる
・_setting.scssで作っている$siteColorを利用する
　_common_first_view.scssファイルの中で_setting.scssの設定を使用する方法は、_common_first_view.scssファイル先頭に、@use "setting" as *;を記述することで利用できるようになる。カラーを変数で利用しているNext.jsのコンポーネントのような使い方

## 4ナビ作成
aタグのメニューテキストをhoverしたら下線が引かれるようにする
・下線はaタグには指定せず、aタグの中にspanを入れてそこに下線を指定すると、テキストピッタリに下線がひかれ余白もきちんと開く設定が可能

## letter-spacingの割り出し方XD
XDで横AVが1.5pxという表示になっていたら文字間1.5ということ
文字のサイズ15pxとなっていたらサイズ15pxということ
letter-spacingのemは、文字間÷サイズになるので
1.5÷15として=0.1emとなる

##　５背景とロゴ
背景とロゴを合わせた全体枠
・100vw、100vhと指定する
・のなかのコンテンツsourceはw100%,h100%
・ロゴは大きさが大体アートボード1600に対して600pxぐらいなので
レスポンシブを実現させるには、600/1600として37％ぐらいと率でサイズを指定しておく

## 使いまわせる要素はc-
各セクションのタイトルは同じ文字サイズで色も同じなので使いまわせると判断し、c-を使用する
・c-widthは、セクションの幅
・c-section-titleは、セクションのタイトル

## 7レスポンシブ対応可能にするc-width 
中のコンテンツがデザインデータでは中央に横幅840pxで存在しているけれど
そのまま840pxにするとデバイスサイズ840pxに時に左右の余白がなくなってしまい、キチキチのサイズになってしまうので、
margin 0 auto,
padding 0 50px,
max-width 940pxを指定するとよい
かつ、
・p-sectionをpadding 0 50px／c-widthをmax-width940pxとmargin0autoに分けると良い
・コンテンツサイズをmax-width940とmargin0 autoにして
・余白指定を0 50pxのように別で指定すると、
レイアウトが横幅いっぱいに指定されるセクションと
余白３０％とか50pxとかのように余白サイズが違うセクションを簡単に存在させることができる
セクションごとに余白サイズが違う時の指定の仕方
１：Paddingだけのクラスを設定する
２：marignと横幅を指定したクラスを設定する
で、セクションごとに2と1のサイズを決めて組み合わせて1つのセクションと余白をセットでニコイチで完成させるとレイアウト組がしやすい
<section class="l-section" id="message">
                <!-- 7　レスポンシブ対応できるc-width -->
                <div class="p-section c-width">
                    <h2 class="c-section-title">日本海の恵み<br> 佐渡の海鮮料理でおもてなし</h2>
                    <div class="p-message-text">
                        <p class="c-section-text">
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>
                </div>
            </section>
            <section class="l-section" id="message">
                <!-- 7　レスポンシブ対応できるc-width -->
                <div class="p-section c-width2">
                    <h2 class="c-section-title">日本海の恵み<br> 佐渡の海鮮料理でおもてなし</h2>
                    <div class="p-message-text">
                        <p class="c-section-text">
                           テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>
                </div>
            </section>
scss設計
.c-width {
  max-width: 940px;
  margin: 0 auto;
}
.c-width2 {
  max-width: 600px;
  margin: 0 auto;
}

## 行間と文字間
行間line-height
XDの行サイズ60でテキストサイズが40pxであれば
60÷40で1.5なので、line-height1.5となる

文字間letter-spacing
XDの文字間AVが4pxでテキストサイズが40pxであれば
4÷40で0.1なので、letter-spacing0.1emとなる

## 8 grid 
横に何枚並べるかの指定
１列目が１枚、２列目が２枚、３列目が１枚の場合
一番多い数字に合わせて、１枚の部分は結合するイメージで。

## icon

FontAwasome
https://fontawesome.com/search?q=calender&o=r
circle-user https://fontawesome.com/search?q=user%20circle&o=r

## svg ファイル処理

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">⭐️<!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->⭐️<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>

となっているので、⭐️ から ⭐️ の間を削除し<path>を入れ子にする
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
</svg>
path d の手前に fill
svg の中に width,height, aria-hidden, focusable, data-prefix(fontawasome の時だけ)を入れ込んで OK、参考 ↓
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="35" height="26" class="icon" aria-hidden="true" focusable="false" data-prefix="fas" ><path fill="#fff" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-

## sass のカラー登録や、svgfill での指定方法

カラーを変数にする
$color-primary: #3498db;
// svgでfillで使用したいときは変数にクラスを再設定する必要あり
.color-primary {
    fill:$color-primary;
}のように指定する
html では-- path の fill にカラー指定をせず、svg に sass コンパイルの color-primary を指定する方法 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="26" height="26" class="icon color-primary" aria-hidden="true" focusable="false" data-prefix="fas"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"></svg>

## 合体処理 1

<svg xmlns="http://www.w3.org/2000/svg" width="43.238" height="26.635" viewBox="0 0 43.238 26.635" class="icon"><g fill="#fff" clip-path="url(#a)"><path d="M13.318 6.417a6.9 6.9 0 0 0-5.173 11.46 4.814 4.814 0 0 1 4.367-2.787h1.612a4.814 4.814 0 0 1 4.367 2.787 6.9 6.9 0 0 0-5.173-11.46m0 7.4a2.569 2.569 0 1 1 2.569-2.569 2.569 2.569 0 0 1-2.569 2.569"/><path d="M39.779-.001H3.459A3.463 3.463 0 0 0 0 3.459v19.716a3.463 3.463 0 0 0 3.459 3.459h36.32a3.463 3.463 0 0 0 3.459-3.459V3.459a3.463 3.463 0 0 0-3.459-3.46M13.317 21.731a8.414 8.414 0 1 1 8.414-8.414 8.423 8.423 0 0 1-8.414 8.414m18.733-1.458h-6.189a.757.757 0 0 1 0-1.513h6.189a.757.757 0 1 1 0 1.513m5.508-4.133h-11.7a.757.757 0 0 1 0-1.513h11.7a.757.757 0 0 1 0 1.513m0-4.133h-11.7a.757.757 0 0 1 0-1.513h11.7a.757.757 0 0 1 0 1.513m0-4.133H32.05a.757.757 0 1 1 0-1.513h5.508a.757.757 0 0 1 0 1.513"/></g></svg>

## 合体処理２

<svg xmlns="http://www.w3.org/2000/svg" width="24.6" height="18.6" viewBox="0 0 24.68 18.65"><g style="fill:#2c73c6; stroke-width:0"><path d="M4.44 0c.59.01 1.83.25 5.33.88 3.85.7 5.01.93 5.18 1.02.36.22.65.54.82.93.15.42.15.87 0 1.28-.06.16-.68 1.32-1.39 2.59S13.1 9.02 13.1 9.03s2.16 1.21 4.79 2.66c.76.42 1.46.81 2.1 1.16a9.24 9.24 0 0 0-2.22-.27c-.85-.05-1.7.06-2.51.33-2.41.72-4.77 2-7.24 2.71-2.49.72-2.45-1.18-2.18-2.03.24-.47.29-.61 2.08-3.77 1.53-2.7 2.73-4.94 2.72-4.94s-1.45-.27-3.2-.59-3.3-.62-3.43-.66c-.52-.17-.95-.54-1.18-1.03-.11-.24-.16-.5-.13-.76-.03-.26.01-.52.13-.76.19-.4.51-.72.9-.92.23-.11.47-.17.71-.16Zm-.76 5.78c1.89 0 3.42 1.53 3.42 3.42s-1.53 3.42-3.42 3.42S.25 11.09.25 9.2s1.53-3.42 3.42-3.42m14.06 7.54c1.75-.03 3.46.49 4.9 1.48.71.54 1.35 1.17 1.89 1.88.3.49.14 1.13-.35 1.42-.19.11-.41.17-.62.15-.66 0-.9-.51-1.12-.74a6.387 6.387 0 0 0-4.75-2.07c-3.18.09-6.46 2.78-10.1 3.19-2.28.25-5.89-.68-7.27-3.03-.91-1.49.34-2.57 1.46-1.43a6.533 6.533 0 0 0 5.37 2.36c2.84-.21 5.4-2.06 8.07-2.86.81-.27 1.66-.38 2.51-.32Z"/></g></svg>

## スクロール可能の可視化

スクロールヒントサイトページ　https://appleple.github.io/scroll-hint/
・header に　<link rel="stylesheet" href="https://unpkg.com/scroll-hint@latest/css/scroll-hint.css">

<script src="https://unpkg.com/scroll-hint@latest/js/scroll-hint.min.js"></script>を入力して
<div class="js-scrollable">
        <table>
            <thead>
                <tr>
                    <th>title1</th>
                    <th>title2</th>
                    <th>title3i</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eaque recusandae corrupti, ex modi ceat recusandae minus, aut est assumenda.</td>
                    <td>id reprehenderit dolores molestium perferendis enim, minus cumque itaque aliquam.
                    </td>
                    <td>as voluptates dolor officia ipsam. Quisquam accusanti
                    </td>
                </tr>
            </tbody>
        </table>
    </div>で囲んで <script>
        new ScrollHint('.js-scrollable', {
            scrollHintIconAppendClass: 'scroll-hint-icon-white',
            applyToParents: true,
            i18n: {
                scrollable: 'スクロールできます'
            }
    });
    </script>で処理する

## サンプル画像の用意

グレー背景とサイズ
<img src="https://via.placeholder.com/300x200" alt="">
背景色フリーとサイズとテキスト
<img src="https://via.placeholder.com/300x200/0cf/fff/?text=textsample" alt="">

<!-- memo3 -->

電話アプリ起動をスマホのみ設定する
@media (min-width: 768px) {
    a[href^="tel:"] {
      pointer-events: none;
    }
}

テキストサイズの、最小、推奨、最大
 font-size: clamp(16px, 2.5vw, 23px);

ゆっくり表示される
transition: right 0.3s ease-in-out;

背景透過
background-color: rgba(128, 128, 128, 0.5);

影付きボタン、hover動き
.aside-shadow {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px 0px 0px 8px;
  transition: box-shadow 0.5s ease;
}
.aside-shadow:hover {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7);
  transform: translate(3px);
}


背景画像処理
.sectionHero {
  background-image: url("../image/bgimg_hero_pc.jpg");
  width: 100%;
  height: 964px;
  background-size: cover;
  background-position: right bottom;
  overflow: hidden;
}

画像のサイズ600pxかまたは80%のどちらかで
しい裁縫に設定する
  width: min(600px, 80%);


プラン表のコツ
/*================================= 
  plan
================================= */
.sectionPlanTitle::after {
  content: "";
  display: block;
  width: 10%;
  height: 2px;
  background: #00a99d;
  position: absolute;
  left: calc(50% - (10% / 2));
  margin-top: 10px;
}
.attention-plan {
  list-style-type: "※";
  list-style-position: inside;
  text-indent: -16px !important;
  padding-left: 20px !important;
  line-height: 1.8rem;
}
section[class*="section-py"] {
  padding-top: 80px;
  padding-bottom: 80px;
}
.section-content {
  width: 100%;
  padding: 0px 12%;
}
.sectionPlan {
  width: 100%;
  height: auto;
  align-items: center;
}
li[class^="planbox"] {
  width: 100%;
  height: 100px;
  background: white;
  padding: 8px 30px;
  border-radius: 15px;
  border: 4px solid;
  box-sizing: border-box;
  align-items: center;
}
li[class^="planbox"] h1 {
  font-size: 30px;
  letter-spacing: 8px;
  font-weight: 500;
  min-width: 225px;
}
li[class^="planbox"] .color3 {
  padding: 0px 30px;
}
li[class^="planbox"] .amount {
  font-size: 50px;
  font-weight: 700;
  align-self: center;
}
li[class^="planbox"] .yen {
  font-weight: 700;
  text-align: center;
  font-size: 23px;
  letter-spacing: 0.2rem;
  align-self: center;
  line-height: 25px;
  padding-top: 10px;
}
li[class^="planbox"] .tax {
  font-weight: 500;
  font-size: 16px;
}
li[class*="color1"] {
  color: #59b5d2;
}
li[class*="color2"] {
  color: #9cbc3c;
}
p[class*="color3"] {
  color: #000000;
}


途中挿入する横幅ワイドのdecoration 100vwライン
.decoline1 {
  position: relative;
  height: auto;
}
.decoline1::after {
  content: "";
  width: 100%;
  position: absolute;
  z-index: 10;
  background: url("../image/deco_vcutline3.svg") no-repeat center top / 100%
    auto;
  aspect-ratio: 1 / 0.1;
  bottom: 0;
}

画像を中に入れて同じ高さなどに制御するbox


レスポンシブ画像の設定
pictureタグ
<!-- 3-a 画像設定sp767以下、pc768以上、他 -->
                        <div class="p-hd__logo-img">
                            <picture>
                                <source media="(min-width:768px)" srcset="./images/common/hd_logo.png.webp 1x, 
                                images/common/hd_logo@2x.png.webp 2x">
                                <source media="(max-width:767px)" srcset="./images/common/hd_logo-sp.png.webp 1x, 
                                images/common/hd_logo-sp@2x.png.webp 2x">
                                <img src="./images/common/hd_logo.png.webp" width=145 height="42" alt="ロゴ画像：佐渡の海鮮居酒屋 | うめえっちゃ" class="-img">
                            </picture>
                        </div>
media属性：メディアクエリを使用して、どの条件でその画像を使用するかを指定します。
srcset属性：条件に合致したときに表示する画像を指定します。複数の解像度の画像を提供する場合は、1xや2xといったスケールを指定します。
<picture>タグ内の<img>要素は、フォールバック（バックアップ）として機能します。ブラウザが<picture>タグや<source>要素をサポートしていない場合や、指定した条件に一致する画像が見つからない場合に表示されます。
ページのパフォーマンスを向上

セクションごと余白が違う時
１：Paddingだけのクラスを設定する
２：marignと横幅を指定したクラスを設定する
で、セクションごとに2と1のサイズを決めて組み合わせて1つのセクションと余白をセットでニコイチで完成させるとレイアウト組がしやすい
<section class="l-section" id="message">
                <!-- 7　レスポンシブ対応できるc-width -->
                <div class="p-section c-width">
                    <h2 class="c-section-title">日本海の恵み<br> 佐渡の海鮮料理でおもてなし</h2>
                    <div class="p-message-text">
                        <p class="c-section-text">
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>
                </div>
            </section>
            <section class="l-section" id="message">
                <!-- 7　レスポンシブ対応できるc-width -->
                <div class="p-section c-width2">
                    <h2 class="c-section-title">日本海の恵み<br> 佐渡の海鮮料理でおもてなし</h2>
                    <div class="p-message-text">
                        <p class="c-section-text">
                          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>
                </div>
            </section>
scss設計
.c-width {
  max-width: 940px;
  margin: 0 auto;
}
.c-width2 {
  max-width: 600px;
  margin: 0 auto;
}

行間line-height
XDの行サイズ60でテキストサイズが40pxであれば
60÷40で1.5なので、line-height1.5となる

文字間letter-spacing
XDの文字間AVが4pxでテキストサイズが40pxであれば
4÷40で0.1なので、letter-spacing0.1emとなる
<!-- BEM -->
https://zenn.dev/nagan/articles/dac6fa662f4dab
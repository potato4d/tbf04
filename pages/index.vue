<template>
  <section id="wrapper">
    <TheCover class="the-cover" />
    <header class="header">
      <SlideInText :fontSize="18" :offset="3.6" :time="0.6">
        <img src="~/assets/images/aaa.svg">
      </SlideInText>
      <SlideInText :fontSize="50" :offset="3.6" :time="0.8">
        <img src="~/assets/images/nuxt_tech_book.svg">
      </SlideInText>
      <div class="flex">
        <a href="https://techbookfest.org/event/tbf04/circle/17580004" target="_blank" class="button"
          @click="$ga.event('move_to_official')"
          >
          技術書典公式ページへ
        </a>
        <a
          href="#"
          class="button is-disabled"
          @click="$ga.event('move_to_digital')">
          電子版へ(Coming soon)
        </a>
      </div>
      <TheGirl />
    </header>
    <div class="container description">
      <h1>Nuxt tech bookについて</h1>
      <p>
        Nuxt.js は日本でトップクラスに人気あるフロントエンドフレームワーク Vue.js をベースとした、フロントエンドのフルスタック開発フレームワークです。
      </p>
      <p>
        Vue.js における SPA 開発でのベストプラクティスを規約ベースで提供し、更に独自のエコシステムのもと、 SSR, PWA といった、現代のフロントエンドにおけるポピュラーなトピックを網羅している、フロントエンド開発のこれからを変えうるポテンシャルを秘めています。
      </p>
      <p>
        Nuxt tech book そんな Nuxt.js を、筆者が知り、学び、そして現場で利用することで培ってきたノウハウを凝縮して一冊にしたものとなります。
        数十の Nuxt.js のプロジェクトに関わってきた経験を活かし、基本的な Nuxt.js の知識は勿論、 Realworld においての開発に役立つエッセンスが詰まっている本書との出会いは、きっとあなたのこれからのフロントエンド開発を変えることになるでしょう。
      </p>
      <p>
        4/22(日) 技術書典4(か27) 秋葉原UDX アキバ・スクエア でお待ちしております。
      </p>
      <p class="text-right">
        花谷拓磨(@potato4d)
      </p>
    </div>
    <div class="container is-fluid is-green">
      <div class="container">
        <h1>目次ちら見</h1>
        <div class="index-list">
          <img src="~/assets/images/index.png" alt="目次">
          <img src="~/assets/images/index_2.png" alt="目次">
        </div>
      </div>
    </div>
    <div class="container">
      <h1>頒布情報</h1>
      <dl>
        <div>
          <dt>タイトル</dt>
          <dd>Nuxt tech book</dd>
        </div>
        <div>
          <dt>サークル</dt>
          <dd>帝都研究所 Produced by ElevenBack</dd>
        </div>
        <div>
          <dt>著者</dt>
          <dd>HANATANI Takuma(<a href="https://github.com/potato4d" target="_blank">@potato4d</a>)</dd>
        </div>
        <div>
          <dt>頒布価格</dt>
          <dd>2,000円</dd>
        </div>
        <div>
          <dt>ダウンロード版URL</dt>
          <dd>Coming soon...</dd>
        </div>
      </dl>
      <div class="tweet-area">
        <a href="https://twitter.com/intent/tweet?text=%E6%8A%80%E8%A1%93%E6%9B%B8%E5%85%B804%E6%96%B0%E5%88%8A%E3%80%8CNuxt%20tech%20book%E3%80%8D%202018/04/22%20(%E3%81%8B27)%20%E3%81%AB%E3%81%A6%E9%A0%92%E5%B8%83%EF%BC%81&url=https://potato4d.github.io/tbf04" class="button is-tweet">
          つぶやく
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import TheCover from '~/components/TheCover.vue'
import TheGirl from '~/components/TheGirl.vue'
import SlideInText from '~/components/SlideInText.vue'

export default {
  components: {
    TheCover,
    TheGirl,
    SlideInText
  }
}
</script>

<style scoped>
#wrapper {
  width: 100%;
  height: 100vh;
  min-height: 800px;
  position: relative;
}

#wrapper .container,
#wrapper .header {
  max-width: 1250px;
  margin: 0 auto;
  position: relative;
  z-index: 10000000000;
}

.the-cover {
  position: absolute;
}

.header {
  height: calc(100% - 200px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 50px;
  padding-top: 100px;
}

#wrapper .container.is-fluid {
  max-width: initial;
}

#wrapper .container {
  padding: 32px;
  animation: wait 7.0s forwards;
}

#wrapper .container .container {
  padding: 0;
}

.container.is-green {
  color: #fff;
  background: #4FC08D;
}

h1 {
  text-align: center;
  line-height: 2.0;
  margin: 0 auto 32px;
  font-weight: normal;
}

.index-list {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

.index-list img {
  width: 500px;
  height: auto;
}

dl {
  width: 800px;
  margin: 0 auto ;
  font-size: 18px;
}

dl > div {
  display: flex;
}

dl > div * {
  width: 50%;
  padding: 0 16px;
  line-height: 2.0;
}

dl > div + div {
  margin-top: 16px;
}

dl > div dt {
  font-weight: bold;
}

.description p {
  font-size: 18px;
  line-height: 2.0;
  color: #333;
}

.description p + p {
  margin-top: 24px;
}

.text-right {
  text-align: right;
}

.flex {
  display: flex;
  margin-left: 16px;
  margin-top: 40px;
  animation: wait 7.0s forwards;
}

.flex * + * {
  margin-left: 16px;
}

.button {
  color: #333;
  font-weight: 300px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 16px;
  text-decoration: none;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16);
  font-weight: bold;
}

.tweet-area {
  text-align: center;
  padding-top: 32px;
}

.button.is-tweet {
  color: #fff;
  background: #1CA1F2;
  padding: 16px 24px;
  margin: 0 auto;
  font-weight: bold;
  transition: all 0.15s ease-out;
}

.button.is-tweet:hover {
  color: #fff;
  background: #1688D4;
}

.button.is-disabled {
  color: #eee;
  background: #bbb;
}
.button.is-disabled:hover {
  color: #eee;
  background: #bbb;
}

.button:hover {
  background: #f9f9f9;
}

@keyframes wait {
  0% { opacity: 0.0000001; }
  90% { opacity: 0.0000001; }
  96% { opacity: 1.0; }
  100% { opacity: 1.0; }
}
</style>

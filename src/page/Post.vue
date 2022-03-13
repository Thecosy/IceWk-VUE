<template>
  <div class="post">
    <div id="__nuxt" data-server-rendered="true">
      <!---->
      <div id="__layout">
        <div data-fetch-key="0" class="app light macwk-animation">
       <top :message3="acticve" />
          <div class="overflow-hidden">
            <div class="article-details white bg layout-min-full-height">
              <div class="py-6">
                <div class="article-details-fg">
                  <div class="article-banner">
                    <div class="imgBox">
                      <img alt="" />
                    </div>
                  </div>
                  <div class="article-content py-7 px-10">
                    <h1 id="article-top" class="b-0 mt-0 pb-0 mb-15">
                      {{ this.title }}
                    </h1>
                    <div class="d-flex mb-6 align-items-center">
                      <img
                        src="https://inews.gtimg.com/newsapp_bt/0/13392595208/1000"
                        class="w-50 mw-50 h-50 b-0 circle m-0 mr-4"
                      />
                      <div class="flex">
                        <h4 class="mb-0 mt-0">{{ this.author }}</h4>
                        <p class="mb-0 py-0 fs-14">{{ this.addTime }}</p>
                      </div>
                    </div>
                    <blockquote class="blockquote">
                      <div class="text-muted">
                        {{ this.intro }}
                      </div>
                    </blockquote>
                    <div class=".image-header-side"><div class="imgBox"><img class="image-header" alt="" data-src="https://static.konlonair.com/public/uploads/_/originals/article-jetbrains-crack-mainphoto.jpg" src="https://static.konlonair.com/public/uploads/_/originals/article-jetbrains-crack-mainphoto.jpg" lazy="loaded"></div></div>
                    <div class="content-markdown">
                      <!-- 内容区域 -->
                    
                      <div id="sidelist" v-html="this.content"></div>
                      <side-catalog class="catalog" v-bind="catalogProps">
                        <template #default="{  isActive }">
                          <i :class="['line-style', isActive ? 'line-style--active' : '']"></i>
                        </template>
                      </side-catalog>
                    </div>
                  </div>
                </div>
              </div>
              <!---->
              <!---->
                              <!-- v-on:click="show = !show"
                v-if="!show" -->
              <section
                v-if="mycomment"
                @click="sendMsg"
                class="
                  fiexd-comments-bar
                  d-flex
                  align-items-center
                  is-scroll
                  macwk-animation
                  slow
                  pc-model
                  tinRightIn
                "
              >
                <div
                  class="
                    d-flex
                    align-items-center
                    fs-20
                    fw-700
                    cursor-pointer
                    w-full
                    pl-3
                  "
                >
                  <div class="flex">
                    共
                    <span class="fs-36 mx-1">14</span> 条评论
                  </div>
                  <svg
                    color="inherit"
                    viewbox="0 0 32 32"
                    class="w-32"
                    style="
                      width: 1.5em;
                      height: 1.5em;
                      font-size: 2rem;
                      vertical-align: -6px;
                    "
                  >
                    <path
                      fill="#FFFFFF"
                      d="M12.63,26.46H8.83a6.61,6.61,0,0,1-6.65-6.07,89.05,89.05,0,0,1,0-11.2A6.5,6.5,0,0,1,8.23,3.25a121.62,121.62,0,0,1,15.51,0A6.51,6.51,0,0,1,29.8,9.19a77.53,77.53,0,0,1,0,11.2,6.61,6.61,0,0,1-6.66,6.07H19.48L12.63,31V26.46"
                    ></path>
                    <path
                      d="M19.57,21.68h3.67a2.08,2.08,0,0,0,2.11-1.81,89.86,89.86,0,0,0,0-10.38,1.9,1.9,0,0,0-1.84-1.74,113.15,113.15,0,0,0-15,0A1.9,1.9,0,0,0,6.71,9.49a74.92,74.92,0,0,0-.06,10.38,2,2,0,0,0,2.1,1.81h3.81V26.5Z"
                      class="comment-icon-path"
                    ></path>
                  </svg>
                </div>
              </section>
             <comment  ref="child" @closethecpmmentName="updateDate()"/>
            </div>
          </div>
          <div
            class="macwk-footer white border-top pc-model"
            data-v-ea53b530=""
          >
            <div class="container" data-v-ea53b530="">
              <a href="index1.html" class="logo" data-v-ea53b530="">
                <svg
                  id="macwk-svg-logo"
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-6dd0b122=""
                  data-v-ea53b530=""
                >
                  <title data-v-6dd0b122="">MacWK</title>
                  <defs data-v-6dd0b122="">
                    <lineargradient
                      id="a"
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      data-v-6dd0b122=""
                    >
                      <stop
                        offset="0%"
                        class="stop-color-circle"
                        data-v-6dd0b122=""
                      />
                      <stop
                        offset="100%"
                        class="stop-color-circle"
                        data-v-6dd0b122=""
                      />
                    </lineargradient>
                    <lineargradient
                      id="b"
                      x1="100%"
                      y1="86.198%"
                      x2="-14.813%"
                      y2="-4.357%"
                      data-v-6dd0b122=""
                    >
                      <stop
                        offset="0%"
                        class="stop-color-default"
                        data-v-6dd0b122=""
                      />
                      <stop
                        offset="40.927%"
                        class="stop-color-default"
                        data-v-6dd0b122=""
                      />
                      <stop
                        offset="100%"
                        class="stop-color-default"
                        data-v-6dd0b122=""
                      />
                    </lineargradient>
                    <lineargradient
                      id="c"
                      x1="86.515%"
                      y1="24.533%"
                      x2="0%"
                      y2="24.533%"
                      data-v-6dd0b122=""
                    >
                      <stop
                        stop-opacity="0"
                        offset="0%"
                        class="stop-color-default"
                        data-v-6dd0b122=""
                      />
                      <stop
                        offset="100%"
                        class="stop-color-default-linearGradient"
                        data-v-6dd0b122=""
                      />
                    </lineargradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd" data-v-6dd0b122="">
                    <path
                      d="M29.952 16c0-1.933-1.562-3.5-3.488-3.5a3.494 3.494 0 0 0-3.488 3.5c0 1.933 1.561 3.5 3.488 3.5a3.494 3.494 0 0 0 3.488-3.5"
                      fill="url(#a)"
                      data-v-6dd0b122=""
                    />
                    <path
                      d="M25.865 25.9a13.932 13.932 0 0 1-6.377 3.66c-1.115.286-2.284.44-3.488.44a13.893 13.893 0 0 1-10.512-4.797A13.968 13.968 0 0 1 2.048 16c0-3.523 1.298-6.742 3.44-9.203A13.893 13.893 0 0 1 16 2c1.204 0 2.373.154 3.488.44a13.932 13.932 0 0 1 6.377 3.66l-4.933 4.95A6.942 6.942 0 0 0 16 9c-3.852 0-6.976 3.134-6.976 7l.002.18C9.122 19.964 12.208 23 16 23c1.926 0 3.67-.784 4.932-2.05l4.933 4.95z"
                      fill="url(#b)"
                      data-v-6dd0b122=""
                    />
                    <path
                      d="M20.932 11.05A6.942 6.942 0 0 0 16 9c-3.852 0-6.976 3.134-6.976 7a13.98 13.98 0 0 1 4.087-9.9 13.932 13.932 0 0 1 6.377-3.66l1.444 8.61z"
                      fill="url(#c)"
                      data-v-6dd0b122=""
                    />
                  </g>
                </svg>
                <span class="ml-4" data-v-ea53b530="">MacWk</span></a
              >
              <div class="nav" data-v-ea53b530="">
                <a href="/" class="nav-link" data-v-ea53b530="">首页</a>
                <a href="about" class="nav-link" data-v-ea53b530="">关于 </a>
                <a href="contact.html" class="nav-link" data-v-ea53b530=""
                  >联系
                </a>
                <a href="privacy.html" class="nav-link" data-v-ea53b530=""
                  >隐私
                </a>
                <a href="version.html" class="nav-link" data-v-ea53b530=""
                  >版本检测
                </a>
                <a href="changelogs.html" class="nav-link" data-v-ea53b530=""
                  >更新日志
                </a>
              </div>
              <div class="copyright" data-v-ea53b530="">
                <p class="mb-0" data-v-ea53b530="">
                  <span class="mr-3" data-v-ea53b530=""
                    ><a href="javascript:;" target="_blank" data-v-ea53b530=""
                      >鲁ICP备19036164号</a
                    ></span
                  >
                  <span data-v-ea53b530=""
                    >Macwk.com &copy; 2019. All rights reserved.</span
                  >
                </p>
              </div>
            </div>
          </div>

          <div infos="0">
            <div
              class="
                adBanner
                pub_300x250 pub_300x250m pub_728x90
                text-ad
                textAd
                text_ad text_ads text-ads text-ad-links
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Prismjs from 'prismjs'; //引入插件
import { getArticleById } from '@/api/webarticle'

import "vue-side-catalog/lib/vue-side-catalog.css";
import SideCatalog from "vue-side-catalog";

import top from './components/Top.vue'
import foot from './components/Foots.vue'
import comment from './components/Comment.vue'

export default {


  name: 'Post',
  components: {
    SideCatalog,top, foot,comment
  },
  created() {
    //数据回填
    this.fetchData(this.$route.params.id)
  },
  mounted() {
    setTimeout(() => {
      prismjs.highlightAll()
    }
      , 20000)
    //下面这行代码解决prismjs不能异步加载必须刷新一下才显示的问题
    process.browser && document.querySelectorAll("pre code").forEach(block => Prism.highlightElement(block));
  },

  methods: {
    sendMsg(){
      this.$refs.child.getMsg('true');
      this.mycomment = false;
            },
    updateDate() {
      // console.log(data.show)
      this.mycomment = true;
      console.log("调用了父组件的方法")
      // this.show1 = data.show;
      //改变了父组件的值
        // console.log('toCity:'+this.show1)
    },
    fetchData(id) {
      getArticleById(id).then(resp => {
        //目录加载需要延时
            setTimeout(() => {
        this.content = resp.data.content
        //代码高亮
                this.$nextTick(() => {
          Prism.highlightAll()
        })
        }, 500);
        //Prism.highlightAll()需要写在this.$nextTick()中，

        this.title = resp.data.title
        this.author = resp.data.author

        if (resp.data.createTime != null) { this.addTime = resp.data.createTime } else { this.addTime = resp.data.addTime }
        this.intro = resp.data.intro

      })
    },
  },
  data() {
    return {
      mycomment:true,
      show1: "",
      acticve:'nav-link active',
      catalogProps: {
        // 内容容器selector(必需)
        container: "#sidelist",
        height: "calc(100% - 100px)",
        iconLeft: true,
        lineLeft: 0,
        watch: true,
      },
      intro: "",
      addTime: "",
      author: "",
      content: "",
      title: "",
      show: false
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../static/mycss/comment.css";
@import "../static/mycss/post_body.css";

.chat-container {
  z-index: 10000;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(620px);
  opacity: 0;
}
</style>


<style scoped>
#sidelist {
  width: 700px;
  overflow: auto;
  padding: 20px;
  line-height: 1.5;
  margin-right: 50px;
}
p {
  text-indent: 2em;
}
.catalog {
  position: fixed;
  top: 70px;
  right: 10%;
  cursor: not-allowed
  /* height: calc(100% - 100px); */
}
.line-style {
  display: inline-block;
  height: 20px;
  width: 3px;
  background: transparent;
}
.line-style--active {
  background: currentColor;
}
.fs-14 {
  transform: translateX(-30px)
}
.image-header {
       -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(23,23,23,0);
    --blue: #50a1ff;
    --indigo: #6610f2;
    --purple: #926dde;
    --pink: #e83e8c;
    --red: #ff4954;
    --orange: #ffbe00;
    --yellow: #ffba00;
    --green: #3cd458;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #868e96;
    --gray-dark: #343a40;
    --primary: #50a1ff;
    --secondary: #e9ecf0;
    --success: #3cd458;
    --info: #926dde;
    --warning: #ffba00;
    --danger: #ff4954;
    --light: #f8fafc;
    --dark: #16202f;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1260px;
    --breakpoint-xxl: 1500px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    font-family: Dosis,Open Sans,pingfang SC,helvetica neue,arial,hiragino sans gb,microsoft yahei ui,microsoft yahei,simsun,sans-serif;
    font-size: .9375rem;
    line-height: 1.9;
    font-weight: 400;
    color: #757575;
    text-align: center;
    box-sizing: border-box;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    border-style: none;
    border-radius: 10px;
}
.image-header-side {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(23,23,23,0);
    --blue: #50a1ff;
    --indigo: #6610f2;
    --purple: #926dde;
    --pink: #e83e8c;
    --red: #ff4954;
    --orange: #ffbe00;
    --yellow: #ffba00;
    --green: #3cd458;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #868e96;
    --gray-dark: #343a40;
    --primary: #50a1ff;
    --secondary: #e9ecf0;
    --success: #3cd458;
    --info: #926dde;
    --warning: #ffba00;
    --danger: #ff4954;
    --light: #f8fafc;
    --dark: #16202f;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1260px;
    --breakpoint-xxl: 1500px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    font-family: Dosis,Open Sans,pingfang SC,helvetica neue,arial,hiragino sans gb,microsoft yahei ui,microsoft yahei,simsun,sans-serif;
    font-size: .9375rem;
    line-height: 1.9;
    font-weight: 400;
    color: #757575;
    box-sizing: border-box;
    margin: auto;
    padding-top: 4rem;
    text-align: center;
    max-width: 1000px;
}
</style>

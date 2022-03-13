<template>
  <header class="app-header" data-v-7cf0e7dc="">
    <div
      class="app-header-navbar white shadow-4 border-bottom pc-model"
      data-v-122eae44=""
      data-v-7cf0e7dc=""
    >
      <div class="app-header-main" data-v-122eae44="">
        <router-link
          target="_self"
          data-v-122eae44=""
          aria-current="page"
          to="/"
        >
          <a
            href="https://macwk.com/"
            class="app-header-logo active"
            data-v-122eae44=""
            aria-current="page"
          >
            <svg
              id="macwk-svg-logo"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              data-v-6dd0b122=""
              data-v-122eae44=""
            >
              <title data-v-6dd0b122="">MacWK</title>
              <defs data-v-6dd0b122="">
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="a"
                  data-v-6dd0b122=""
                >
                  <stop
                    offset="0%"
                    class="stop-color-circle"
                    data-v-6dd0b122=""
                  ></stop>
                  <stop
                    offset="100%"
                    class="stop-color-circle"
                    data-v-6dd0b122=""
                  ></stop>
                </linearGradient>
                <linearGradient
                  x1="100%"
                  y1="86.198%"
                  x2="-14.813%"
                  y2="-4.357%"
                  id="b"
                  data-v-6dd0b122=""
                >
                  <stop
                    offset="0%"
                    class="stop-color-default"
                    data-v-6dd0b122=""
                  ></stop>
                  <stop
                    offset="40.927%"
                    class="stop-color-default"
                    data-v-6dd0b122=""
                  ></stop>
                  <stop
                    offset="100%"
                    class="stop-color-default"
                    data-v-6dd0b122=""
                  ></stop>
                </linearGradient>
                <linearGradient
                  x1="86.515%"
                  y1="24.533%"
                  x2="0%"
                  y2="24.533%"
                  id="c"
                  data-v-6dd0b122=""
                >
                  <stop
                    stop-opacity="0"
                    offset="0%"
                    class="stop-color-default"
                    data-v-6dd0b122=""
                  ></stop>
                  <stop
                    offset="100%"
                    class="stop-color-default-linearGradient"
                    data-v-6dd0b122=""
                  ></stop>
                </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd" data-v-6dd0b122="">
                <path
                  d="M29.952 16c0-1.933-1.562-3.5-3.488-3.5a3.494 3.494 0 0 0-3.488 3.5c0 1.933 1.561 3.5 3.488 3.5a3.494 3.494 0 0 0 3.488-3.5"
                  fill="url(#a)"
                  data-v-6dd0b122=""
                ></path>
                <path
                  d="M25.865 25.9a13.932 13.932 0 0 1-6.377 3.66c-1.115.286-2.284.44-3.488.44a13.893 13.893 0 0 1-10.512-4.797A13.968 13.968 0 0 1 2.048 16c0-3.523 1.298-6.742 3.44-9.203A13.893 13.893 0 0 1 16 2c1.204 0 2.373.154 3.488.44a13.932 13.932 0 0 1 6.377 3.66l-4.933 4.95A6.942 6.942 0 0 0 16 9c-3.852 0-6.976 3.134-6.976 7l.002.18C9.122 19.964 12.208 23 16 23c1.926 0 3.67-.784 4.932-2.05l4.933 4.95z"
                  fill="url(#b)"
                  data-v-6dd0b122=""
                ></path>
                <path
                  d="M20.932 11.05A6.942 6.942 0 0 0 16 9c-3.852 0-6.976 3.134-6.976 7a13.98 13.98 0 0 1 4.087-9.9 13.932 13.932 0 0 1 6.377-3.66l1.444 8.61z"
                  fill="url(#c)"
                  data-v-6dd0b122=""
                ></path>
              </g>
            </svg>
            <span data-v-122eae44="">MacWk</span></a
          >
        </router-link>
        <div class="app-header-nav nav" data-v-122eae44="">
          <router-link
            target="_self"
            class="nav-link"
            :class="message1"
            data-v-122eae44=""
            aria-current="page"
            to="/"
            >首页</router-link
          >
          <router-link
            target="_self"
            class="nav-link"
            :class="message2"
            data-v-1f33282a=""
            to="/list"
            >软件</router-link
          >
          <router-link
            target="_self"
            class="nav-link"
            :class="message3"
            data-v-122eae44=""
            to="/post/all"
            >文章</router-link
          >
          <router-link
            target="_self"
            class="nav-link"
            :class="message4"
            data-v-1f33282a=""
            to="/class"
            >分类</router-link
          >
          <router-link
            target="_self"
            class="nav-link"
            :class="message5"
            data-v-1f33282a=""
            to="/planet"
            >星球</router-link
          >
        </div>
        <div
          class="app-header-search grid-list lazy-transition"
          data-v-122eae44=""
        >
          <div id="autosuggest" data-v-122eae44="">
            <div
              role="combobox"
              aria-expanded="false"
              aria-haspopup="listbox"
              aria-owns="autosuggest-autosuggest__results"
            >
              <el-input
              @keyup.native="keyup()"
                @focus="focus()"
                @blur="blur()"
                v-model="seachcontent"
                type="text"
                autocomplete="off"
                aria-autocomplete="list"
                aria-activedescendant=""
                aria-controls="autosuggest-autosuggest__results"
                id="autosuggest__input"
                placeholder="输入关键词搜索软件或文章…"
                value=""
                class=""
              />
            </div>
            <div
              class="popUp"
              v-show="searchshow"
              @mouseenter="enter"
              @mouseleave="leave"
            >
              <div aria-labelledby="autosuggest" class="autosuggest__results">
                <div data-v-6d6103b4="" class="overflow-hidden">
                  <div
                    data-v-6d6103b4=""
                    class="d-flex align-items-center px-5"
                  >
                    <a
                      @click="codeshows()"
                      data-v-6d6103b4=""
                      :class="{ 'active search-active': codeshow }"
                      class="flex flex-grow-1 text-center py-3 fs-16"
                      ><span data-v-6d6103b4="" class="fw-400">资源</span>
                      <span data-v-6d6103b4="" class="fs-12">(1174)</span></a
                    >
                    <a
                      @click="articleshows()"
                      data-v-6d6103b4=""
                      :class="{ 'active search-active': articleshow }"
                      class="flex flex-grow-1 text-center py-3 fs-16"
                      ><span data-v-6d6103b4="" class="">文章</span>
                      <span data-v-6d6103b4="" class="fs-12">(59)</span></a
                    >
                  </div>
                </div>
                <ul role="listbox">
                   <div v-for="(item, id) in this.tempdata" :key="id">
                        <div v-if="item.status.includes('published')" >
                        <router-link  :to="'/post/' + item.id">
                  <li
                    role="option"
                    data-suggestion-index="0"
                    data-section-name="default"
                    id="autosuggest__results-item--0"
                    class="autosuggest__results-item"
                  >
                    <a data-v-6d6103b4="" class="macwk-app white border-top"
                      ><span data-v-6d6103b4="" class="snow-dot"></span>
                      <span data-v-6d6103b4="" class="snow-dot"></span>
                      <span data-v-6d6103b4="" class="snow-dot"></span>
                      <span data-v-6d6103b4="" class="snow-dot"></span>
                      <span data-v-6d6103b4="" class="snow-dot"></span>
                      <span data-v-6d6103b4="" class="snow-dot"></span>
                      <span data-v-6d6103b4="" class="snow-dot"></span>
                      <div
                        data-v-6d6103b4=""
                        class="macwk-app__hover--content"
                      ></div>
                      <div data-v-6d6103b4="" class="macwk-app__header--icon">
                        <div
                          data-v-6d6103b4=""
                          class="macwk-app__header--icon--content"
                        ></div>
                        <img
                          data-v-6d6103b4=""
                         
                          :src="item.thumb"
                          lazy="loaded"
                        />
                      </div>
                      <div data-v-6d6103b4="" class="macwk-app__body py-1">
                        <h5
                          data-v-6d6103b4=""
                          class="macwk-app__body--title fs-14"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <span data-v-6d6103b4="">{{item.title}}</span>
                          <!-- <span
                            data-v-6d6103b4=""
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span data-v-6d6103b4="" class="mx-1">-</span
                            >1.0.1</span
                          > -->
                        </h5>
                        <p
                          data-v-6d6103b4=""
                          class="macwk-app__body--info"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <span data-v-6d6103b4="">{{item.intro}}</span>
                        </p>
                      </div>
                      <!---->
                      <div data-v-6d6103b4="" class="macwk-box__more fs-24">
                        <i
                          data-v-6d6103b4=""
                          class="light-icon-more icon-next-arrow"
                        ></i></div
                    ></a>
                  </li>
                        </router-link>
                        </div>
                  </div>
                </ul>
                <div data-v-6d6103b4="">
                  <button
                    data-v-6d6103b4=""
                    class="
                      btn btn-block
                      border-top
                      no-radius
                      py-3
                      hover-primary
                      cursor-pointer
                      fs-14
                    "
                  >
                    查看更多
                    <span data-v-6d6103b4="" class="fw-400">(1174条)</span>
                    <!---->
                  </button>
                </div>
              </div>
            </div>

            <!---->
            <button class="btn search-to" @click="queryarticle()" data-v-122eae44="">
              <i class="icon-search" data-v-122eae44=""></i>
            </button>
            <div
              id="autosuggest-autosuggest__results"
              class="autosuggest__results-container"
            >
              <!---->
            </div>
          </div>
        </div>
        <router-link to="/">
        <div class="actions" href="/" >
          <div class="app-header-user" data-v-122eae44="">
            <div class="login-button">
              <span class="logintext">登录/注册</span>
              <!-- <span class="diamond">
				    <ul>
              </ul> 
				    <i class="imgs"> <img src="/wp-content/themes/ripro/assets/images/allvip.jpg"></i>
          <ul>
            <li><i></i>会员免费下载</li>
            <li><i></i>尊贵会员铭牌</li>
            <li><i></i>每日海量更新</li>
            <li><i></i>享有专属搭建</li>
          </ul> 
				    <i class="kt">立即开通<em>开通会员抄底价</em></i>
				</span> -->
            </div>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { FindarticlesByNum } from '@/api/webarticle'

export default ({
  name: 'Top',
  props: ['message1', 'message2', 'message3', 'message4', 'message5'],
  setup() {

  },
  created() {

  },

  methods: {
     keyup() {
       console.log(this.seachcontent)
       this.search(this.seachcontent)
      },
    //临时查询
    search(seachcontents) {
    //限制查询五个数据
    if (!this.judgeNull(this.seachcontent)) {
       FindarticlesByNum(seachcontents,5).then(resp => {
         this.tempdata = resp.data
        console.log(resp.data)
        console.log(this.tempcontent)
       })
    }
    },
    //判空
    judgeNull(str) {
            if (str == "") return true;
            var regu = "^[ ]+$";
            var re = new RegExp(regu);
            return re.test(str);
    },
        
    queryarticle() {
      //   直接调用$router.push 实现携带参数的跳转
        this.$router.push({
         path: `/post/${this.seachcontent}/all`,
        })
      //提交
      if (this.judgeNull(this.seachcontent)) {
         this.$notify({
          title: '提示',
          message: '输入的数据不能为空',
          type: 'warning'
        });
    }
    
      
    },
    articleshows() {
      // setTimeout(() => { this.focus() }, 219)
      // this.searchshow = true
      this.codeshow = false
      this.articleshow = true
    },
    codeshows() {
      // setTimeout(() => { this.focus() }, 219)
      // this.searchshow = true
      this.codeshow = true
      this.articleshow = false
    },
    focus() {
      this.searchshow = true
    },
    blur() {
      // setTimeout(() => { this.searchshow = false }, 300)
      //设置300ms后让下拉框消失
    },
    enter() {
      this.searchshow = true
    },
    leave() {
      setTimeout(() => { this.searchshow = false }, 300)
    }

  },
  data() {
    return {
      tempdata: "",
      tempcontent: {
        title: "",
        icon: "",
        intro:""
      },
      seen: false,
      codeshow: true,
      articleshow: false,
      searchshow: false,
      navlinks: "nav-link active",
      seachcontent: ''
    }
  },
})
</script>

<style scoped>
.navbar .navbar-button,
.off-canvas .canvas-close {
  background: linear-gradient(125deg, #18cef2 0%, #448aff 100%);
  transition: transform 0.1s;
  box-shadow: 4px 3px 10px #2f6bd024;
  color: #fff;
}
.actions .login-btn {
  position: relative;
}
.navbar .login-btn {
  border-radius: 25px;
  width: 90px;
}
.login-button {
  height: 30px;
  width: 80px;
  color: #fff;
  background: linear-gradient(125deg, #18cef2 0%, #448aff 100%);
  line-height: 50px;
  transition: transform 0.1s;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 4px 3px 10px #2f6bd024;
  align-items: center;
  display:flex;
  justify-content:center;
  border-radius: 50px 50px 50px 50px;
}
.logintext {
  font-size: 15px;
  text-align: center;
  line-height: 90px;
  /* transform:translateY(-50%);
  transform:translateX(30px);  */
}

</style>
<style scoped>

</style>
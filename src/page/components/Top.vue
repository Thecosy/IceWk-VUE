<template>
  <header class="app-header" data-v-7cf0e7dc="">

<!-- 登陆 -->
<el-dialog class="dialogdeep" width="30%" top="30px" center title="" :visible.sync="dialogFormVisible">
  <div class="box">
  <div class="login-logo"><img height="40" width="40" src="https://zy.prmath.com/wp-content/uploads/2021/09/2021090309505148.svg"></div>
  <div class="login-title"><span><b>快速登录</b></span></div>
  <label class="login-form-item" style="display: none;"><input type="text" name="nickname" tabindex="1" spellcheck="false" autocomplete="off" class=""> <span><b>可爱的昵称</b></span></label>
     <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <!-- <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span> -->
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
        >登陆</el-button
      >
      <div data-v-11bb2e85="" class="ss-login_statement"><span data-v-11bb2e85="">登陆注册即代表同意</span><a data-v-11bb2e85="" href="https://sspai.com/post/37739" target="_blank">用户协议</a><span data-v-11bb2e85="">及</span><a data-v-11bb2e85="" href="https://sspai.com/page/privacy_policy" target="_blank">隐私条款</a></div>
      <div data-v-11bb2e85="" class="line"></div>
      <div data-v-11bb2e85="" class="footer">
        <p data-v-11bb2e85="" class="text-align-center">其他登录方式</p>
        <!-- <div data-v-11bb2e85="" class="other-login">
          <button data-v-11bb2e85="" class="btn-login circle weixin">
             <i class="iconfont icon-icon_qq"></i> 
            </button>
            <button data-v-11bb2e85="" class="btn-login circle weibo">
              <i data-v-11bb2e85="" class="iconfont iconfont-weibo-simple"></i>
            </button></div> -->
        </div>

        <div class="tips">
        <span style="margin-right: 20px"></span>
        <span> </span>
      </div>
    </el-form>
  </div>
  <el-form :model="form">

  </el-form>
</el-dialog>
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
            >资源</router-link
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
       
        <a class="actions" style="cursor: pointer;" >
          <div @click="showlogin()" class="app-header-user" data-v-122eae44="">
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
        </a>
       
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
    handleLogin() {
      console.log( "denglu")
      // var that = this
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     login(that.loginForm).then(resp => {
      //       console.log(resp)
      //       if (resp.data.code == 402 || resp.data.code == 400) {
      //         that.$message({
      //           message: '登陆失败',
      //           type: 'warning'
      //         })
      //       } else if (resp.data.code == 200) {
      //         localStorage.setItem('access-admin', JSON.stringify(resp.data))
      //         that.$router.push({ path: '/admin' }) // 跳到账号管理
      //         that.$message({
      //           message: '登陆成功',
      //           type: 'success'
      //         })
      //       }
      //     }).catch((e) => { })
      //     this.loading = false
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    showlogin() {
      this.dialogFormVisible = true;
    },
        showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
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
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请您输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请您输入密码', trigger: 'blur' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '60px',
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
  width: 100px;
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
.login-title{
      image-rendering: -webkit-optimize-contrast;
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --web-color: #0a36fa;
    --web-light-color: rgba(10, 54, 250, 0.2);
    --border-radius: 4px;
    --wp--preset--font-size--normal: 16px;
    --wp--preset--font-size--huge: 42px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga" on;
    -webkit-font-smoothing: subpixel-antialiased;
    --wp--preset--color--black: #000000;
    --wp--preset--color--cyan-bluish-gray: #abb8c3;
    --wp--preset--color--white: #ffffff;
    --wp--preset--color--pale-pink: #f78da7;
    --wp--preset--color--vivid-red: #cf2e2e;
    --wp--preset--color--luminous-vivid-orange: #ff6900;
    --wp--preset--color--luminous-vivid-amber: #fcb900;
    --wp--preset--color--light-green-cyan: #7bdcb5;
    --wp--preset--color--vivid-green-cyan: #00d084;
    --wp--preset--color--pale-cyan-blue: #8ed1fc;
    --wp--preset--color--vivid-cyan-blue: #0693e3;
    --wp--preset--color--vivid-purple: #9b51e0;
    --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
    --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
    --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
    --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
    --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
    --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
    --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
    --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
    --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
    --wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
    --wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
    --wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
    --wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');
    --wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');
    --wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');
    --wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');
    --wp--preset--duotone--midnight: url('#wp-duotone-midnight');
    --wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');
    --wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');
    --wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');
    --wp--preset--font-size--small: 13px;
    --wp--preset--font-size--medium: 20px;
    --wp--preset--font-size--large: 36px;
    --wp--preset--font-size--x-large: 42px;
    visibility: visible;
    pointer-events: auto;
    -webkit-user-select: text!important;
    border: 0;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
    word-wrap: break-word;
    box-sizing: border-box;
    color: #b2bac2;
    font-size: 13px;
    margin-bottom: 20px;
    text-align: center;
}
.login-logo{
      image-rendering: -webkit-optimize-contrast;
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --web-color: #0a36fa;
    --web-light-color: rgba(10, 54, 250, 0.2);
    --border-radius: 4px;
    --wp--preset--font-size--normal: 16px;
    --wp--preset--font-size--huge: 42px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    color: #121212;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga" on;
    -webkit-font-smoothing: subpixel-antialiased;
    --wp--preset--color--black: #000000;
    --wp--preset--color--cyan-bluish-gray: #abb8c3;
    --wp--preset--color--white: #ffffff;
    --wp--preset--color--pale-pink: #f78da7;
    --wp--preset--color--vivid-red: #cf2e2e;
    --wp--preset--color--luminous-vivid-orange: #ff6900;
    --wp--preset--color--luminous-vivid-amber: #fcb900;
    --wp--preset--color--light-green-cyan: #7bdcb5;
    --wp--preset--color--vivid-green-cyan: #00d084;
    --wp--preset--color--pale-cyan-blue: #8ed1fc;
    --wp--preset--color--vivid-cyan-blue: #0693e3;
    --wp--preset--color--vivid-purple: #9b51e0;
    --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
    --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
    --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
    --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
    --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
    --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
    --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
    --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
    --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
    --wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
    --wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
    --wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
    --wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');
    --wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');
    --wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');
    --wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');
    --wp--preset--duotone--midnight: url('#wp-duotone-midnight');
    --wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');
    --wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');
    --wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');
    --wp--preset--font-size--small: 13px;
    --wp--preset--font-size--medium: 20px;
    --wp--preset--font-size--large: 36px;
    --wp--preset--font-size--x-large: 42px;
    visibility: visible;
    pointer-events: auto;
    -webkit-user-select: text!important;
    border: 0;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
    word-wrap: break-word;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 27px;
}
.box {
      image-rendering: -webkit-optimize-contrast;
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --web-color: #0a36fa;
    --web-light-color: rgba(10, 54, 250, 0.2);
    --border-radius: 4px;
    --wp--preset--font-size--normal: 16px;
    --wp--preset--font-size--huge: 42px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    color: #121212;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga" on;
    -webkit-font-smoothing: subpixel-antialiased;
    --wp--preset--color--black: #000000;
    --wp--preset--color--cyan-bluish-gray: #abb8c3;
    --wp--preset--color--white: #ffffff;
    --wp--preset--color--pale-pink: #f78da7;
    --wp--preset--color--vivid-red: #cf2e2e;
    --wp--preset--color--luminous-vivid-orange: #ff6900;
    --wp--preset--color--luminous-vivid-amber: #fcb900;
    --wp--preset--color--light-green-cyan: #7bdcb5;
    --wp--preset--color--vivid-green-cyan: #00d084;
    --wp--preset--color--pale-cyan-blue: #8ed1fc;
    --wp--preset--color--vivid-cyan-blue: #0693e3;
    --wp--preset--color--vivid-purple: #9b51e0;
    --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
    --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
    --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
    --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
    --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
    --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
    --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
    --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
    --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
    --wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
    --wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
    --wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
    --wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');
    --wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');
    --wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');
    --wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');
    --wp--preset--duotone--midnight: url('#wp-duotone-midnight');
    --wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');
    --wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');
    --wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');
    --wp--preset--font-size--small: 13px;
    --wp--preset--font-size--medium: 20px;
    --wp--preset--font-size--large: 36px;
    --wp--preset--font-size--x-large: 42px;
    visibility: visible;
    pointer-events: auto;
    -webkit-user-select: text!important;
    border: 0;
    font-family: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    vertical-align: baseline;
    word-wrap: break-word;
    box-sizing: border-box;
    box-shadow: 0px 0px 2px rgb(98 124 153 / 10%);
    position: relative;
    padding: 30px 24px 24px;
    background-repeat: no-repeat;
    background: none;
}
.footer{
  display:flex;
  justify-content: center;
      font-family: -apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,Microsoft YaHei,"\5FAE\8F6F\96C5\9ED1",helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    --sspaiRed: #d71a1b;
    --yellow: #ffbe16;
    --B0: #fff;
    --B10: #fbfbfb;
    --B20: #f7f7f8;
    --B30: #efefef;
    --B40: #e5e5e5;
    --B60: #8e8787;
    --B80: #655e5e;
    --B100: #292525;
    --text: #4c4e4d;
    --green: #3fd67e;
    --red: #fd281a;
    --pink: #ff2c78;
    --white: #f4f4f4;
    --sspai-red: #d71a1b;
    --blue: #44b9fb;
    -webkit-text-size-adjust: 100%;
    font-size: 14px;
    word-break: break-all;
    outline: none!important;
    -webkit-user-select: text!important;
    -webkit-tap-highlight-color: transparent;
    color: #8e8787;
}
.line{
      font-family: -apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,Microsoft YaHei,"\5FAE\8F6F\96C5\9ED1",helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    --sspaiRed: #d71a1b;
    --yellow: #ffbe16;
    --B0: #fff;
    --B10: #fbfbfb;
    --B20: #f7f7f8;
    --B30: #efefef;
    --B40: #e5e5e5;
    --B60: #8e8787;
    --B80: #655e5e;
    --B100: #292525;
    --text: #4c4e4d;
    --green: #3fd67e;
    --red: #fd281a;
    --pink: #ff2c78;
    --white: #f4f4f4;
    --sspai-red: #d71a1b;
    --blue: #44b9fb;
    -webkit-text-size-adjust: 100%;
    font-size: 14px;
    word-break: break-all;
    color: #292525;
    outline: none!important;
    -webkit-user-select: text!important;
    -webkit-tap-highlight-color: transparent;
    width: calc(100% - 40px);
    margin: 0 auto;
    height: 1px;
    background: #e5e5e5;
    margin-top: 20px;
    margin-bottom: 20px;
}
.ss-login_statement{
      font-family: -apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,Microsoft YaHei,"\5FAE\8F6F\96C5\9ED1",helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    --sspaiRed: #d71a1b;
    --yellow: #ffbe16;
    --B0: #fff;
    --B10: #fbfbfb;
    --B20: #f7f7f8;
    --B30: #efefef;
    --B40: #e5e5e5;
    --B60: #8e8787;
    --B80: #655e5e;
    --B100: #292525;
    --text: #4c4e4d;
    --green: #3fd67e;
    --red: #fd281a;
    --pink: #ff2c78;
    --white: #f4f4f4;
    --sspai-red: #d71a1b;
    --blue: #44b9fb;
    -webkit-text-size-adjust: 100%;
    word-break: break-all;
    outline: none!important;
    -webkit-user-select: text!important;
    -webkit-tap-highlight-color: transparent;
    margin: 12px auto;
    font-size: 12px;
    padding: 0 20px;
    color: var(--B80);
}
.ss-login_statement a{
padding:0 0.5em;
font-weight:600;
color:var(--red);
}
</style>
<style lang="scss" scoped>
.dialogdeep{
  ::v-deep .el-dialog--center {
    border-radius: 18px;
  }
}
</style>
<style >
.el-dialog--center{
    border-radius:10px;
}
</style>
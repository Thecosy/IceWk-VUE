<template>
  <div class="Resource">
     <!-- 选择支付方式（登陆） -->
    <el-dialog
      :visible.sync="PaymentDialogVisibleLogin"
      :show-close="false"
      @close="closeDialog"
      width="320px"
      center
    >
      <h6 class="outh5">请选择支付方式</h6>
      <div class="swal2-content">
        <div id="swal2-content" style="display: block">
          <div class="pay-button-box">
            <div @click="selectPayTypeLogin('alipay')"  class="pay-item" id="alipay" data-type="1" >
              <img style="margin-right: 14px;" height="40" width="40" src="../static/image/pay/zhifubaorenzheng.svg"/><span>支付宝</span>
            </div>
            <div @click="selectPayTypeLogin('wxpay')" class="pay-item" id="weixinpay" data-type="2">
              <img style="margin: 12px;"  height="40" width="40" src="../static/image/pay/weixinzhifu.svg"/><span>微信支付</span>
            </div>
          </div>
          <p style="font-size: 13px; padding: 0; margin: 0">
            
          </p>
        </div>
        <input class="swal2-input" style="display: none" /><input
          type="file"
          class="swal2-file"
          style="display: none"
        />
        <div class="swal2-range" style="display: none">
          <input type="range" /><output></output>
        </div>
        <select class="swal2-select" style="display: none"></select>
        <div class="swal2-radio" style="display: none"></div>
        <label for="swal2-checkbox" class="swal2-checkbox" style="display: none"
          ><input type="checkbox" /><span class="swal2-label"></span></label
        ><textarea class="swal2-textarea" style="display: none"></textarea>
        <div
          class="swal2-validation-message"
          id="swal2-validation-message"
          style="display: none"
        ></div>
      </div>
    </el-dialog>
    <!-- 选择支付方式（临时） -->
    <el-dialog
      :visible.sync="PaymentDialogVisibleTemp"
      :show-close="false"
      @close="closeDialog"
      width="320px"
      center
    >
      <h6 class="outh5">请选择支付方式</h6>
      <div class="swal2-content">
        <div id="swal2-content" style="display: block">
          <div class="pay-button-box">
            <div @click="selectPayType('alipay')"  class="pay-item" id="alipay" data-type="1" >
              <img style="margin-right: 14px;" height="40" width="40" src="../static/image/pay/zhifubaorenzheng.svg"/><span>支付宝</span>
            </div>
            <div @click="selectPayType('wxpay')" class="pay-item" id="weixinpay" data-type="2">
              <img style="margin: 12px;"  height="40" width="40" src="../static/image/pay/weixinzhifu.svg"/><span>微信支付</span>
            </div>
          </div>
          <p style="font-size: 13px; padding: 0; margin: 0">
            当前为游客购买模式
          </p>
        </div>
        <input class="swal2-input" style="display: none" /><input
          type="file"
          class="swal2-file"
          style="display: none"
        />
        <div class="swal2-range" style="display: none">
          <input type="range" /><output></output>
        </div>
        <select class="swal2-select" style="display: none"></select>
        <div class="swal2-radio" style="display: none"></div>
        <label for="swal2-checkbox" class="swal2-checkbox" style="display: none"
          ><input type="checkbox" /><span class="swal2-label"></span></label
        ><textarea class="swal2-textarea" style="display: none"></textarea>
        <div
          class="swal2-validation-message"
          id="swal2-validation-message"
          style="display: none"
        ></div>
      </div>
    </el-dialog>
    <!-- 微信支付二维码 -->
    <div>
      <el-dialog
        :visible.sync="wxDialogVisible"
        :show-close="false"
        @close="closeDialog"
        width="320px"
        center
      >
        <h5 class="outh5">
          <img src="../static/image/pay/weixinbig.png" class="alipaybig_icon" />
        </h5>
        <h5 class="outh5">
          <div class="bottom alipay">使用扫码支付 {{price/100}}元</div>
        </h5>
        <h5 class="outh5">
          <qriously :value="codeUrl" :size="190" />
        </h5>
        <div style="height: 40px"></div>
        <h5 class="outh7">
          <div style="color: #e0e0e0" class="bottom alipay">
            请使用微信扫一扫<br />扫描二维码支付<br />
          </div>
        </h5>
      </el-dialog>
    </div>
    <!-- 支付宝支付二维码 -->
    <div >
      <el-dialog
        :visible.sync="aliDialogVisible"
        :show-close="false"
        @close="closeDialog"
        width="320px"
        center
      >
        <h5 class="outh5">
          <img src="../static/image/pay/alipaybig.png" class="alipaybig_icon" />
        </h5>
        <h5 class="outh5">
          <div class="bottom alipay">使用扫码支付  {{price/100}}元</div>
        </h5>
        <h5 class="outh5">
          <qriously :value="codeUrl" :size="190" />
        </h5>
        <div style="height: 40px"></div>
        <h5 class="outh6">
          <div style="color: #e0e0e0" class="bottom alipay">
            请使用支付宝扫一扫<br />扫描二维码支付<br />
          </div>
        </h5>
      </el-dialog>
    </div>
    <div data-server-rendered="true" id="__nuxt">
      <!---->
      <div id="__layout">
        <div data-fetch-key="0" class="app light macwk-animation">
          <top :message2="acticve" />
          <div class="overflow-hidden pt-5">
            <section
              class="
                fiexd-download-bar
                white
                d-flex
                align-items-center
                pc-model
              "
            >
              <div class="container d-flex align-items-center">
                <div class="flex-grow d-flex align-items-center">
                  <img class="avatar avatar-sm mr-2 no-rounded" />
                  <span class="h5 mb-0">Beyond Compare 4.4.2</span>
                </div>
                <section class="d-flex align-items-center">
                  <nav class="scrollactive-nav nav mr-6">
                    <a
                      href="#step-read"
                      class="scrollactive-item nav-link px-4 fs-16"
                      >安装必读</a
                    >
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                  </nav>
                  <button
                    type="button"
                    class="btn btn-theme rounded-sm pull-right px-5 py-1 fs-16"
                  >
                    立即下载
                  </button>
                </section>
              </div>
            </section>
            <section
              class="
                fiexd-comments-bar
                d-flex
                align-items-center
                is-scroll
                macwk-animation
                slow
                pc-model
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
                  共 <span class="fs-36 mx-1">121</span> 条评论
                </div>
                <svg
                  color="inherit"
                  viewBox="0 0 32 32"
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
            <div class="layout-header pt-5 pb-5 position-relative pc-model">
              <!-- ../static/image/loding.gif -->
              <div>
                <img
                  src="../static/image/shape-1.svg"
                  class="shape-three"
                /><img
                  src="../static/image/shape-55.svg"
                  class="shape-four"
                /><img
                  src="../static/image/shape-56.svg"
                  class="shape-five"
                /><img
                  src="../static/image/shape-57.svg"
                  class="shape-six"
                /><img
                  src="../static/image/shape-58.svg"
                  class="shape-seven"
                /><img
                  src="../static/image/shape-59.svg"
                  class="shape-eight"
                /><img
                  src="../static/image/shape-60.svg"
                  class="shape-nine"
                /><img
                  src="../static/image/shape-61.svg"
                  class="shape-ten"
                /><img
                  src="../static/image/shape-62.svg"
                  class="shape-eleven"
                /><img
                  src="../static/image/shape-10.svg"
                  class="shape-10"
                /><img src="../static/image/shape-11.svg" class="shape-11" />
              </div>
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-xs-12 col-lg-6 col-xl-6">
                    <div class="header-app">
                      <img class="app-icon mr-3" />
                      <div class="list-body">
                        <h2 class="mb-4">
                          {{ title }}
                          <!---->
                          <!---->
                          <!---->
                          <!---->
                          <!---->
                        </h2>
                        <div class="mb-15">
                          <el-button
                          v-if="payJudej"
                           :disabled="payBtnDisabled"
                            @click="Download()"
                            type="primary"
                            class="btn btn-theme btn-round w-200 cursor mr-4"
                            ><i
                              class="el-icon-download"
                            ></i>
                            支付下载</el-button
                          >
                          <el-button
                          v-else
                           :disabled="payBtnDisabled"
                            @click="Download()"
                            type="primary"
                            class="btn btn-theme btn-round w-200 cursor mr-4"
                            ><i
                              class="el-icon-download"
                            ></i>
                            立即下载(已支付)</el-button
                          >
                          <button
                            class="
                              btn btn-outline-theme btn-round
                              px-5
                              zanUp
                              position-relative
                            "
                          >
                            <i class="icon-thumbs-up fs-20 v-m-1 mr-1"></i>
                            赞 (372)
                            <span class="likeanimation">+1</span>
                          </button>
                        </div>
                        <div class="mt-4 mb-6"></div>
                        <div class="platform-checkbox d-flex">
                          <div class="d-flex align-items-center pr-4">
                            <span class="active text-success cursor-help"
                              ><i class="icon-check-circle fs-14 v-0"></i>
                              <span>支持 BigSur</span></span
                            >
                            <span>
                              <div
                                role="tooltip"
                                id="el-popover-8927"
                                aria-hidden="true"
                                class="el-popover el-popper"
                                style="width: 400px; display: none"
                              >
                                <!---->
                                <div class="px-3">
                                  <h5>说明：</h5>
                                  <p>
                                    macOS 11 Big Sur
                                    是苹果公司研发的桌面端操作系统，于北京时间
                                    2020年6月23日在 2020
                                    苹果全球开发者大会上发布，该操作系统适用于一部分
                                    Mac 电脑。
                                  </p>
                                  <p>
                                    macOS 11 Big Sur
                                    的界面采用了新的设计，Safari
                                    浏览器、地图和消息也得到更新，并专门在隐私保护方面优化升级。
                                  </p>
                                </div>
                              </div>
                              <span
                                class="el-popover__reference-wrapper"
                              ></span>
                            </span>
                          </div>
                          <div class="d-flex align-items-center pr-4">
                            <span class="active text-success cursor-help"
                              ><i class="icon-check-circle fs-14 v-0"></i>
                              <span>支持 Monterey</span></span
                            >
                            <!---->
                            <!---->
                            <span>
                              <div
                                role="tooltip"
                                id="el-popover-3035"
                                aria-hidden="true"
                                class="el-popover el-popper"
                                style="width: 400px; display: none"
                              >
                                <!---->
                                <div class="px-3">
                                  <h5>说明：</h5>
                                  <p>
                                    macOS 12 Monterey
                                    是苹果公司研发的桌面端操作系统，于北京时间
                                    2021年6月8日在 2021
                                    苹果全球开发者大会上发布。
                                  </p>
                                  <p>
                                    该大版本更新带来了许多新功能，如：快捷指令、Mac
                                    /iPad 通用控制、低功耗模式延长电池寿命等。
                                  </p>
                                  <p>
                                    该系统还处于 Beta 测试阶段，<span
                                      class="fw-600"
                                      >如果您用的是 macOS
                                      12，您可以点击下方按钮对应用的兼容性进行投票（为确保准确性，非12系统不要投票，请自觉！）</span
                                    >
                                  </p>
                                  <div class="d-flex mb-4">
                                    <button
                                      class="
                                        btn btn-round btn-xs
                                        flex-grow-1
                                        mr-4
                                        btn-success
                                      "
                                    >
                                      已兼容 (47)
                                    </button>
                                    <button
                                      class="
                                        btn btn-round btn-xs
                                        flex-grow-1
                                        btn-outline-danger
                                      "
                                    >
                                      未兼容
                                      <!---->
                                    </button>
                                  </div>
                                  <p>
                                    <span class="fw-600"
                                      >此投票由网友投票可能会不准确！</span
                                    >在该应用更新时会重置，以便可以准确的标注。
                                  </p>
                                </div>
                              </div>
                              <span
                                class="el-popover__reference-wrapper"
                              ></span>
                            </span>
                          </div>
                          <div class="d-flex align-items-center">
                            <span class="cursor-help"
                              ><span class="text-warning"
                                ><i class="icon-info_outline fs-14 v-0"></i>
                                M1 需安装 Rosetta
                              </span></span
                            >
                            <!---->
                            <!---->
                            <!---->
                            <span>
                              <div
                                role="tooltip"
                                id="el-popover-8281"
                                aria-hidden="true"
                                class="el-popover el-popper"
                                style="width: 400px; display: none"
                              >
                                <!---->
                                <div class="px-3">
                                  <h5>说明：</h5>
                                  <p>
                                    M1 指的是苹果公司于 2020 年发布的基于 ARM
                                    架构自研的 M1 芯片（类似 Intel/AMD CPU）。
                                  </p>
                                  <h5 class="fs-16 fw-600 mb-4">
                                    ARM M1 应用目前分四种情况：
                                  </h5>
                                  <p class="mb-2">
                                    <span class="fw-600 text-muted"
                                      ><i
                                        class="
                                          icon-do_not_disturb_alt
                                          fs-16
                                          v-m-1
                                          mr-1
                                        "
                                      ></i
                                      >未兼容 M1</span
                                    >：这种安装后无法使用！
                                  </p>
                                  <p class="mb-2">
                                    <span class="fw-600 text-success"
                                      ><i
                                        class="icon-check-circle fs-14 v-0 mr-1"
                                      ></i
                                      >原生 M1 运行</span
                                    >：这种安装后即可正常运行。
                                  </p>
                                  <p class="mb-2">
                                    <span class="fw-600 text-warning"
                                      ><i
                                        class="icon-info_outline fs-14 v-0 mr-1"
                                      ></i
                                      >需安装 Rosetta</span
                                    >：这种需要安装 Rosetta 才可正常运行。
                                  </p>
                                  <p class="mb-3">
                                    <span class="fw-600 text-danger"
                                      ><i
                                        class="icon-info_outline fs-14 v-0 mr-1"
                                      ></i
                                      >需 Rosetta 转译</span
                                    >：这种需要安装 Rosetta 并且找到此应用右键
                                    -&gt; 显示简介，勾选使用 Rosetta
                                    打开才可正常运行。
                                  </p>
                                  <p class="text-muted">
                                    此应用当前架构为：intel
                                  </p>
                                  <a
                                    href="/article/apple-silicon-m1-application-crash-repair"
                                    target="_blank"
                                    class="
                                      btn btn-sm btn-outline-theme btn-round
                                    "
                                    style="text-transform: none"
                                    >M1 Rosetta 安装及转译图文教程</a
                                  >
                                </div>
                              </div>
                              <span
                                class="el-popover__reference-wrapper"
                              ></span>
                            </span>
                          </div>
                        </div>
                        <div class="mt-6 fs-13">
                          <!---->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-lg-6 col-xl-6 text-center">
                    <div
                      class="
                        device device-macbook-pro device-silver device-silver
                      "
                    >
                      <div class="device-frame">
                        <div class="el-carousel el-carousel--horizontal">
                          <div
                            class="el-carousel__container"
                            style="height: 360px"
                          >
                            <button
                              type="button"
                              class="
                                el-carousel__arrow el-carousel__arrow--left
                              "
                            >
                              <i class="el-icon-arrow-left"></i></button
                            ><button
                              type="button"
                              class="
                                el-carousel__arrow el-carousel__arrow--right
                              "
                            >
                              <i class="el-icon-arrow-right"></i>
                            </button>
                            <div
                              class="el-carousel__item"
                              style="
                                transform: translateX(0px) scale(1);
                                ms-transform: translateX(0px) scale(1);
                                webkit-transform: translateX(0px) scale(1);
                                display: none;
                              "
                            >
                              <!----><img
                                src="https://static.konlonair.com/public/uploads/_/originals/beyond-compare-screen-01.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,p_60/quality,q_90"
                                class="
                                  device-content
                                  macwk-animation
                                  spaceInLeft
                                  cursor
                                "
                              />
                              <!---->
                              <!---->
                            </div>
                            <div
                              class="el-carousel__item"
                              style="
                                transform: translateX(0px) scale(1);
                                ms-transform: translateX(0px) scale(1);
                                webkit-transform: translateX(0px) scale(1);
                                display: none;
                              "
                            >
                              <!----><img
                                src="https://static.konlonair.com/public/uploads/_/originals/beyond-compare-screen-02.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,p_60/quality,q_90"
                                class="
                                  device-content
                                  macwk-animation
                                  spaceInLeft
                                  cursor
                                "
                              />
                              <!---->
                              <!---->
                            </div>
                            <div
                              class="el-carousel__item"
                              style="
                                transform: translateX(0px) scale(1);
                                ms-transform: translateX(0px) scale(1);
                                webkit-transform: translateX(0px) scale(1);
                                display: none;
                              "
                            >
                              <!----><img
                                src="https://static.konlonair.com/public/uploads/_/originals/beyond-compare-screen-03.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,p_60/quality,q_90"
                                class="
                                  device-content
                                  macwk-animation
                                  spaceInLeft
                                  cursor
                                "
                              />
                              <!---->
                              <!---->
                            </div>
                          </div>
                          <ul
                            class="
                              el-carousel__indicators
                              el-carousel__indicators--horizontal
                              el-carousel__indicators--outside
                            "
                          ></ul>
                        </div>
                      </div>
                      <div class="device-stripe"></div>
                      <div class="device-header"></div>
                      <div class="device-sensors"></div>
                      <div class="device-btns"></div>
                      <div class="device-power"></div>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="soft-layout white bg mb-8 pc-model">
              <section class="layout-info">
                <div class="app-info shadow-2 white bg text-center">
                  <div class="w-r">
                    <div class="w-c w-c-4">
                      <div class="border-right my-4">
                        <p class="text-muted text-uppercase fs-10 ls-2 mb-0">
                          大小
                        </p>
                        <p
                          class="
                            mb-0
                            fs-20
                            font-weight-bolder
                            line-height-3
                            opacity-70
                          "
                        >
                          31.9
                        </p>
                        <p class="text-uppercase fs-10 ls-2 mb-0 opacity-70">
                          MB
                        </p>
                      </div>
                    </div>
                    <div class="w-c w-c-4">
                      <div class="border-right my-4">
                        <p class="text-muted text-uppercase fs-10 ls-2 mb-0">
                          下载
                        </p>
                        <p
                          class="
                            mb-0
                            fs-20
                            font-weight-bolder
                            line-height-3
                            opacity-70
                          "
                        >
                          75481
                        </p>
                        <p class="text-uppercase fs-10 ls-2 mb-0 opacity-70">
                          次
                        </p>
                      </div>
                    </div>
                    <div class="w-c w-c-4">
                      <div class="border-right my-4">
                        <p class="text-muted text-uppercase fs-10 ls-2 mb-0">
                          语言
                        </p>
                        <p
                          class="
                            mb-0
                            fs-20
                            font-weight-bolder
                            line-height-3
                            opacity-70
                          "
                        >
                          <span class="text-inherit"> 中文 </span>
                        </p>
                        <p class="text-uppercase fs-10 ls-2 mb-0 opacity-70">
                          cn
                        </p>
                      </div>
                    </div>
                    <div class="w-c w-c-4">
                      <div class="border-right my-4">
                        <p class="text-muted text-uppercase fs-10 ls-2 mb-0">
                          价格
                        </p>
                        <p
                          class="
                            mb-0
                            fs-20
                            font-weight-bolder
                            line-height-3
                            opacity-70
                          "
                        >
                          0积分
                        </p>
                        <p class="fs-10 ls-2 mb-0 opacity-70">money</p>
                      </div>
                    </div>
                    <div class="w-c w-c-4">
                      <div class="border-right my-4">
                        <p class="text-muted text-uppercase fs-10 ls-2 mb-0">
                          类别
                        </p>
                        <p
                          class="
                            mb-0
                            fs-20
                            font-weight-bolder
                            line-height-3
                            opacity-70
                            hover-opacity-normal
                          "
                        >
                          <a href="/soft/enhancement/p1">
                            {{className}}
                            <i class="icon-arrow-r text-muted"></i
                          ></a>
                        </p>
                        <p class="fs-10 ls-2 mb-0 opacity-70">enhancement</p>
                      </div>
                    </div>
                    <div class="w-c w-c-4">
                      <div class="my-4">
                        <p class="text-uppercase fs-10 ls-2 mb-0 opacity-40">
                          更新日期
                        </p>
                       
                          <p
                          class="
                            mb-0
                            fs-20
                            font-weight-bolder
                            line-height-3
                            opacity-70
                          "
                                    v-if="this.createTime != null"
                                    v-text="formatDate(this.createTime)"
                                  >
                                  </p>
                                  <p
                          class="
                            mb-0
                            fs-20
                            font-weight-bolder
                            line-height-3
                            opacity-70
                          "
                                    v-else
                                    v-text="formatDate(this.addTime)"
                                  >
                                  </p>
                        <p class="text-uppercase fs-10 ls-2 mb-0 opacity-70">
                          {{Theweeks}}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="layout-content">
                <div
                  id="step-read"
                  class="layout-content-install pt-7 mb-5"
                ></div>
                <!---->
                <!---->
                <div id="step-content" class="layout-content-infos">
                  <div class="container">
                    <div class="content-header">
                      <div class="h-150 w-r is-align-middle w-r--flex">
                        <div class="w-c w-c-2">
                          <svg
                            width="80"
                            height="70"
                            viewBox="0 0 125 107"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <circle
                                cx="48"
                                cy="59"
                                r="48"
                                class="circle-fill"
                              ></circle>
                              <path
                                d="M58.536 39.713c0-6.884 1.72-14.007 5.163-21.368 3.443-7.36 8.167-13.458 14.173-18.292l11.645 7.91c-3.589 4.98-6.262 10.016-8.02 15.106S78.86 33.598 78.86 39.384v13.623H58.536V39.713z"
                                class="path-fill"
                              ></path>
                              <path
                                d="M93.252 39.713c0-6.884 1.722-14.007 5.164-21.368 3.442-7.36 8.166-13.458 14.172-18.292l11.646 7.91c-3.589 4.98-6.262 10.016-8.02 15.106s-2.637 10.529-2.637 16.315v13.623H93.252V39.713z"
                                class="path-fill-1"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div class="w-c w-c-22">
                          <h3>
                            正文概述
                            <!---->
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="soft-blockquote fw-400">
                        <div>
                          <p>{{ intro }}</p>
                        </div>
                      </div>
                      <!---->
                      <!---->
                    </div>
                    <!-- 内容区域 -->

                    <div id="sidelist" v-html="this.content"></div>
                  </div>
                </div>
                <!---->
                <!---->
              </section>
            </div>
            <div class="mobile-model">
              <div
                class="
                  d-flex
                  layout-min-full-height
                  justify-content-center
                  align-items-center
                "
              >
                <div class="text-center" style="width: 80%; margin: 0 auto">
                  <h1 class="mb-4">哇，窗口太小啦</h1>
                  <p class="mb-6">请调整浏览器窗口大小或者请使用手机查看！</p>
                </div>
              </div>
            </div>
            <div class="el-dialog__wrapper text-center" style="display: none">
              <div
                role="dialog"
                aria-modal="true"
                aria-label="dialog"
                class="el-dialog no-bg no-shadow"
                style="margin-top: 15vh; width: 1300px"
              >
                <div class="el-dialog__header">
                  <span class="el-dialog__title"></span
                  ><button
                    type="button"
                    aria-label="Close"
                    class="el-dialog__headerbtn"
                  >
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <!---->
                <!---->
              </div>
            </div>
            <!---->
            <div
              id="sidetools"
              class="macwk-animation tinUpIn"
              style="display: none"
            >
              <div class="sidetools-item">
                <div class="sidetools-wrapper">
                  <a href="https://t.me/macwk" target="_blank" class="cursor"
                    ><span class="sidetools-icon kfqq"></span
                  ></a>
                </div>
              </div>
              <div class="sidetools-item">
                <div class="sidetools-wrapper">
                  <a class="el-tooltip cursor"
                    ><span class="sidetools-icon back-top"></span
                  ></a>
                </div>
              </div>
              <span>
                <div
                  role="tooltip"
                  id="el-popover-6929"
                  aria-hidden="true"
                  class="el-popover el-popper"
                  style="width: 200px; display: none"
                >
                  <!---->
                  <div class="text-center">
                    <a href="/feedback" class="mt-15 mb-0">在线留言</a>
                  </div>
                </div>
                <span class="el-popover__reference-wrapper"></span>
              </span>
              <span>
                <div
                  role="tooltip"
                  id="el-popover-3926"
                  aria-hidden="true"
                  class="el-popover el-popper"
                  style="width: 200px; display: none"
                >
                  <!---->
                  <div class="text-center">
                    <a href="/feedback" class="mt-15 mb-0">在线留言</a>
                  </div>
                </div>
                <span class="el-popover__reference-wrapper"></span>
              </span>
            </div>
            <!---->
            <!---->
            <!---->
            <!---->
          </div>
          <div class="macwk-footer white border-top pc-model" data-v-ea53b530>
            <div class="container" data-v-ea53b530>
              <a href="/" class="logo" data-v-ea53b530
                ><svg
                  id="macwk-svg-logo"
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-6dd0b122
                  data-v-ea53b530
                >
                  <title data-v-6dd0b122>MacWK</title>
                  <defs data-v-6dd0b122>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="a"
                      data-v-6dd0b122
                    >
                      <stop
                        offset="0%"
                        class="stop-color-circle"
                        data-v-6dd0b122
                      ></stop>
                      <stop
                        offset="100%"
                        class="stop-color-circle"
                        data-v-6dd0b122
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      x1="100%"
                      y1="86.198%"
                      x2="-14.813%"
                      y2="-4.357%"
                      id="b"
                      data-v-6dd0b122
                    >
                      <stop
                        offset="0%"
                        class="stop-color-default"
                        data-v-6dd0b122
                      ></stop>
                      <stop
                        offset="40.927%"
                        class="stop-color-default"
                        data-v-6dd0b122
                      ></stop>
                      <stop
                        offset="100%"
                        class="stop-color-default"
                        data-v-6dd0b122
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      x1="86.515%"
                      y1="24.533%"
                      x2="0%"
                      y2="24.533%"
                      id="c"
                      data-v-6dd0b122
                    >
                      <stop
                        stop-opacity="0"
                        offset="0%"
                        class="stop-color-default"
                        data-v-6dd0b122
                      ></stop>
                      <stop
                        offset="100%"
                        class="stop-color-default-linearGradient"
                        data-v-6dd0b122
                      ></stop>
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd" data-v-6dd0b122>
                    <path
                      d="M29.952 16c0-1.933-1.562-3.5-3.488-3.5a3.494 3.494 0 0 0-3.488 3.5c0 1.933 1.561 3.5 3.488 3.5a3.494 3.494 0 0 0 3.488-3.5"
                      fill="url(#a)"
                      data-v-6dd0b122
                    ></path>
                    <path
                      d="M25.865 25.9a13.932 13.932 0 0 1-6.377 3.66c-1.115.286-2.284.44-3.488.44a13.893 13.893 0 0 1-10.512-4.797A13.968 13.968 0 0 1 2.048 16c0-3.523 1.298-6.742 3.44-9.203A13.893 13.893 0 0 1 16 2c1.204 0 2.373.154 3.488.44a13.932 13.932 0 0 1 6.377 3.66l-4.933 4.95A6.942 6.942 0 0 0 16 9c-3.852 0-6.976 3.134-6.976 7l.002.18C9.122 19.964 12.208 23 16 23c1.926 0 3.67-.784 4.932-2.05l4.933 4.95z"
                      fill="url(#b)"
                      data-v-6dd0b122
                    ></path>
                    <path
                      d="M20.932 11.05A6.942 6.942 0 0 0 16 9c-3.852 0-6.976 3.134-6.976 7a13.98 13.98 0 0 1 4.087-9.9 13.932 13.932 0 0 1 6.377-3.66l1.444 8.61z"
                      fill="url(#c)"
                      data-v-6dd0b122
                    ></path>
                  </g>
                </svg>
                <span class="ml-4" data-v-ea53b530>MacWk</span></a
              >
              <div class="nav" data-v-ea53b530>
                <a href="/" class="nav-link" data-v-ea53b530>首页</a>
                <a href="/about" class="nav-link" data-v-ea53b530>关于 </a
                ><a href="/contact" class="nav-link" data-v-ea53b530>联系 </a
                ><a href="/privacy" class="nav-link" data-v-ea53b530>隐私 </a
                ><a href="/version" class="nav-link" data-v-ea53b530
                  >版本检测 </a
                ><a href="/changelogs" class="nav-link" data-v-ea53b530
                  >更新日志
                </a>
              </div>
              <div class="copyright" data-v-ea53b530>
                <p class="mb-0" data-v-ea53b530>
                  <span class="mr-3" data-v-ea53b530
                    ><a
                      href="https://beian.miit.gov.cn/"
                      target="_blank"
                      data-v-ea53b530
                      >鲁ICP备19036164号</a
                    ></span
                  >
                  <span data-v-ea53b530
                    >Macwk.com © 2019. All rights reserved.</span
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
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import top from './components/Top.vue'
import foot from './components/Foots.vue'
import comment from './components/Comment.vue'

import { getResourceById } from '@/api/webresource'
import { getResourceClassNameByid } from '@/api/webresourceclass'

import { formatDate , GetWeekdate } from '@/utils/date.js'

import wxPayApi from '../api/payment/wxPay'
import aliPayApi from '../api/payment/aliPay'
import orderInfoApi from '../api/payment/orderInfo'
export default {

  name: 'Resource',
  components: {
    top, foot, comment

  },
  created() {
    //数据回填
    this.fetchData(this.$route.params.id)
    //根据Id查询用户是否购买过此资源
     const user = JSON.parse(window.localStorage.getItem('access-admin'))
      this.userJudje = (user == null)
       if (!this.userJudje) {
         this.userid = user.data.userid
          this.queryOrderStatusBytrues(this.$route.params.id,this.userid)
       }
   
    //获取资源评论数量
    getArticleCommentnum(this.$route.params.id).then(resp => {
      this.commentnum = resp.data
    })
  },

  methods: {

    formatDate(time) {
      let data = new Date(time)
      return formatDate(data, 'yyyy-MM-dd hh:mm ')
    },
    queryOrderStatusBytrues(resourceid,userid){
     orderInfoApi.queryOrderStatusBytrue(userid,resourceid).then(response => {
       //检查已登陆用户是否购买过此资源，根据userid和resourceid判断
       if(response.data.code == 0){
         this.payJudej = false}
       if(response.data.code == 101){
         this.payJudej = true}
     
      })
    },
    // 查询订单状态
    queryOrderStatus() {
      orderInfoApi.queryOrderStatus(this.orderNo).then(response => {
        console.log('查询订单状态：' + response.data.code)

        // 支付成功后的页面跳转
        if (response.data.code === 0) {
          console.log('清除定时器')
          clearInterval(this.timer)
          // 关闭页面支付框
          this.wxDialogVisible = false
          this.aliDialogVisible = false
          this.$notify({
                title: '支付成功',
                message: '您已成功购买',
                type: 'success',
                offset: 50
              });
        }
      })
    },

    //关闭微信支付二维码对话框时让“确认支付”按钮可用
    closeDialog(){
      console.log('close.................')
      this.payBtnDisabled = false
      console.log('清除定时器')
      clearInterval(this.timer)
    },

    //选择支付方式(登陆)
    selectPayTypeLogin(type) {
      console.log('支付方式：' + type)
      this.payOrder.payType = type
        //关闭支付方式选择
        this.PaymentDialogVisibleTemp = false
         this.PaymentDialogVisibleLogin = false
      //打开对应支付页面

      //支付宝支付
      if(this.payOrder.payType === 'alipay'){ 
        this.aliDialogVisible = true 
          //调用统一下单接口
          aliPayApi.ftofPayLogin(this.$route.params.id,this.userid).then(response => {
          this.codeUrl = response.data.data.codeUrl
          this.orderNo = response.data.data.orderNo

          //启动定时器
          this.timer = setInterval(() => {
            //查询订单是否支付成功
            this.queryOrderStatus()
          }, 3000)

        })
        }
      //微信支付
      if(this.payOrder.payType === 'wxpay'){ 
        //打开支付二维码
        this.wxDialogVisible = true
          //调用统一下单接口
         wxPayApi.nativePayLogin(this.$route.params.id,this.userid).then(response => {
           console.log(response.data.data.codeUrl)
          this.codeUrl = response.data.data.codeUrl
          this.orderNo = response.data.data.orderNo

          //启动定时器
          this.timer = setInterval(() => {
            //查询订单是否支付成功
            this.queryOrderStatus()
          }, 3000)

        })
      
      }
    },
    //选择支付方式(临时)
    selectPayType(type) {
      console.log('支付方式：' + type)
      this.payOrder.payType = type
        //关闭支付方式选择
        this.PaymentDialogVisibleTemp = false
         this.PaymentDialogVisibleLogin = false
      //打开对应支付页面
      console.log("123123")

      //支付宝支付
      if(this.payOrder.payType === 'alipay'){ 
        this.aliDialogVisible = true 
          //调用统一下单接口
          aliPayApi.ftofPayTemp(this.$route.params.id).then(response => {
          this.codeUrl = response.data.data.codeUrl
          this.orderNo = response.data.data.orderNo

          //启动定时器
          this.timer = setInterval(() => {
            //查询订单是否支付成功
            this.queryOrderStatus()
          }, 3000)

        })
        }
      //微信支付
      if(this.payOrder.payType === 'wxpay'){ 
        //打开支付二维码
        this.wxDialogVisible = true

          //调用统一下单接口
         wxPayApi.nativePayTemp(this.$route.params.id).then(response => {
           console.log(response.data.data.codeUrl)
          this.codeUrl = response.data.data.codeUrl
          this.orderNo = response.data.data.orderNo

          //启动定时器
          this.timer = setInterval(() => {
            //查询订单是否支付成功
            this.queryOrderStatus()
          }, 3000)

        })
      
      }
    },
    Download() {
      const user = JSON.parse(window.localStorage.getItem('access-admin'))
      this.userJudje = (user == null)
       if (!this.userJudje) {this.userid = user.data.userid}
      if (this.userJudje) {
        //游客购买
        console.log("游客购买")
        //禁用按钮，防止重复提交
        this.payBtnDisabled = true

        //打开支付方式选择
        this.PaymentDialogVisibleTemp = true

      }
      else {
        //登陆用户购买
        console.log("登陆用户购买")
         //禁用按钮，防止重复提交
        this.payBtnDisabled = true

        //打开支付方式选择
        this.PaymentDialogVisibleLogin = true
      }
    },
    fetchData(id) {
      getResourceById(id).then(resp => {
        console.log(resp)
        this.thumb = resp.data.thumb
        this.title = resp.data.title
        this.price = resp.data.price
        this.author = resp.data.author
        this.content = resp.data.content
        this.intro = resp.data.intro
        var sortClasss = resp.data.sortClass
        //根据classid获取分类名称
        getResourceClassNameByid(sortClasss).then(resp => {
             this.className = resp.data;
        })

        if (resp.data.createTime != null) { 
          this.createTime = resp.data.createTime 
         
      let data = new Date(resp.data.createTime)
      var intime =  formatDate(data, 'yyyy-MM-dd')
      var tiems = GetWeekdate(intime)
      this.Theweeks = this.weeks[tiems]
      console.log(resp.data.createTime )
      console.log(data)
      
      
            
          } else { 
            this.addTime = resp.data.addTime 
            
             let data = new Date(resp.data.addTime )
      var intime =  formatDate(data, 'yyyy-MM-dd')
      var tiems = GetWeekdate(intime)
      this.Theweeks = this.weeks[tiems]
       console.log(intime)
             console.log(resp.data.addTime )
      console.log(this.addTime)
            }
        this.intro = resp.data.intro

      })
     
    },
  },
  data() {
    return {
      className:"",
      sortClass:"",
      Theweeks:"",
      weeks: {
        "0":'星期日',
        "1":'星期一',
        "2":'星期二',
        "3":'星期三',
        "4":'星期四',
        "5":'星期五',
        "6":'星期六',
      },

      payJudej:true,
      payBtnDisabled:false,
      orderNo:"",
      codeUrl:"",
      payOrder: { //订单信息
        productId: '', //商品id
        payType: 'wxpay' //支付方式
      },
       PaymentDialogVisibleLogin: false, //支付方式弹窗
      PaymentDialogVisibleTemp: false, //支付方式弹窗
      wxDialogVisible: false, //微信支付二维码弹窗
      aliDialogVisible: false, //支付宝支付二维码弹窗
      intro: "",
      content: "",
      price:"",
      title: "",
      acticve: 'nav-link active',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../static/mycss/comment.css";
@import "../static/mycss/post_body.css";
</style>
  
<style scoped>
.alipaybig_icon {
  display: inline-block;
  width: 120px;
  margin: 0;
  padding: 0;
  text-align: center;
}
.outh5 {
  padding: 0px;
  display: flex;
  align-content: flex-end;
  justify-content: center;
  flex-wrap: wrap;
}
.outh6 {
  height: 66px;
  text-align: center;
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 320px;
  background-color: #01a7ef;
  padding: 7px;
  display: flex;
  align-content: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 0 0 10px 10px;
}
.outh7 {
  height: 66px;
  text-align: center;
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 320px;
  background-color: #09bb21;
  padding: 7px;
  display: flex;
  align-content: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 0 0 10px 10px;
}
</style>
<style>
.el-dialog--center {
  border-radius: 10px;
}
.el-dialog--center .el-dialog__body {
  border-radius: 10px;
  text-align: initial;
  background-color: #e0e0e0;
}
.el-dialog__header {
  display: none;
  background-color: #e0e0e0;
}
</style>
<style scoped>
.pay-button-box{
  padding: 12px 30px;
z-index: 1;
text-align: center;
}
.swal2-content{
  z-index: 1;
justify-content: center;
margin: 0;
padding: 0;
color: #545454;
font-size: 1.125em;
font-weight: 300;
line-height: normal;
text-align: center;
word-wrap: break-word;
}
.pay-item{
  width: 100%;
height: 60px;
border: 0;
cursor: pointer;
font-size: 1.25rem;
display: inline-block;
line-height: 60px;
text-align: center;
}
</style>
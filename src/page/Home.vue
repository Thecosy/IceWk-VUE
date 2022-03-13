<template>
  <div class="home">
    <div id="__nuxt">
      <!---->
      <div id="__layout">
        <div data-fetch-key="0" class="app light macwk-animation">
          <top :message1="acticve" />
          <div>
            <section class="layout-index pc-model mt-5">
              <!-- class="banner-index mb-6" -->
              <div class="outsection">
                <el-carousel
                  indicator-position="outside"
                  class="index1 banner-index mb-6 Thecarousel"
                  :height="dataHeight"
                  :interval="3000"
                  arrow="always"
                >
                  <el-carousel-item
                    style=""
                    v-for="(item, id) in Carousel"
                    :key="id"
                  >
                    <div>
                      <div
                        data-v-bffc9160=""
                        class="index-banner el-carousel el-carousel--horizontal"
                      >
                        <div
                          class="el-carousel__container"
                          style="height: 450px"
                        >
                          <i class="el-icon-arrow-right"></i>

                          <div
                            data-v-bffc9160=""
                            class="el-carousel__item is-active is-animating"
                            style="transform: translateX(0px) scale(1)"
                          >
                            <div
                              data-v-bffc9160=""
                              class="
                                index
                                section
                                white1
                                h-450
                                position-relative
                                radius-4x
                                d-flex
                                align-items-center
                              "
                            >
                              <div data-v-bffc9160="" class="bg-shape-holder">
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-1.svg"
                                  class="shape-three"
                                />
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-55.svg"
                                  class="shape-four"
                                />
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-56.svg"
                                  class="shape-five"
                                />
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-57.svg"
                                  class="shape-six"
                                />
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-58.svg"
                                  class="shape-seven"
                                />
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-59.svg"
                                  class="shape-eight"
                                />
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-60.svg"
                                  class="shape-nine"
                                />
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-61.svg"
                                  class="shape-ten"
                                />
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-62.svg"
                                  class="shape-eleven"
                                />
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-10.svg"
                                  class="shape-10"
                                />
                                <img
                                  data-v-bffc9160=""
                                  src="https://self-1305088812.cos.ap-nanjing.myqcloud.com/2021/shape-11.svg"
                                  class="shape-11"
                                />
                                <span
                                  data-v-bffc9160=""
                                  class="big-round-one"
                                ></span>
                                <span
                                  data-v-bffc9160=""
                                  class="big-round-two"
                                ></span>
                                <span
                                  data-v-bffc9160=""
                                  class="big-round-three"
                                ></span>
                              </div>
                              <div
                                data-v-bffc9160=""
                                class="
                                  w-600
                                  pl-10
                                  position-relative
                                  z-index-9999
                                "
                              >
                                <h2 data-v-bffc9160="">{{ item.title }}</h2>
                                <p data-v-bffc9160="" class="text-muted fs-18">
                                  {{ item.introduce }}
                                </p>
                                <a
                                  data-v-bffc9160=""
                                  href="https://macwk.com/soft/all/p1"
                                  class="btn btn-theme btn-round px-6"
                                >
                                  {{ item.button }}</a
                                >
                              </div>
                              <div
                                data-v-bffc9160=""
                                class="index-banner-image-two"
                              >
                                <img data-v-bffc9160="" :src="item.img" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <!-- class="container" -->
              <div class="container">
                <div data-v-0a1f67c4="" class="index-special row mb-6">
                  <div data-v-0a1f67c4="" class="col-3">
                    <a
                      data-v-0a1f67c4=""
                      href="https://macwk.com/special/novice"
                      class=""
                    >
                      <div
                        data-v-0a1f67c4=""
                        class="
                          macwk-card
                          bg-gradient-green
                          hover-shadow-6
                          py-3
                          text-center
                        "
                        style="
                          will-change: transform;
                          transform: perspective(1000px) rotateX(0deg)
                            rotateY(0deg) scale3d(1, 1, 1);
                        "
                      >
                        <!---->
                        <div
                          class="
                            macwk-card__collapsible-content
                            vs-con-loading__container
                          "
                        >
                          <div class="macwk-card__body">
                            <h6 data-v-0a1f67c4="" class="mb-0 text-white">
                              <i
                                data-v-0a1f67c4=""
                                class="icon-office fs-22 mr-3 v-m-3"
                              ></i>
                              <span data-v-0a1f67c4="">新人必备</span>
                            </h6>
                          </div>
                          <!---->
                        </div>
                      </div>
                    </a>
                  </div>
                  <div data-v-0a1f67c4="" class="col-3">
                    <a
                      data-v-0a1f67c4=""
                      href="https://macwk.com/special/photo"
                      class=""
                    >
                      <div
                        data-v-0a1f67c4=""
                        class="
                          macwk-card
                          bg-gradient-orange
                          hover-shadow-6
                          py-3
                          text-center
                        "
                      >
                        <!---->
                        <div
                          class="
                            macwk-card__collapsible-content
                            vs-con-loading__container
                          "
                        >
                          <div class="macwk-card__body">
                            <h6 data-v-0a1f67c4="" class="mb-0 text-white">
                              <i
                                data-v-0a1f67c4=""
                                class="icon-gallery fs-22 mr-3 v-m-3"
                              ></i>
                              <span data-v-0a1f67c4="">图像处理工具</span>
                            </h6>
                          </div>
                          <!---->
                        </div>
                      </div>
                    </a>
                  </div>
                  <div data-v-0a1f67c4="" class="col-3">
                    <a
                      data-v-0a1f67c4=""
                      href="https://macwk.com/special/pm"
                      class=""
                    >
                      <div
                        data-v-0a1f67c4=""
                        class="
                          macwk-card
                          bg-gradient-blue
                          hover-shadow-6
                          py-3
                          text-center
                        "
                      >
                        <!---->
                        <div
                          class="
                            macwk-card__collapsible-content
                            vs-con-loading__container
                          "
                        >
                          <div class="macwk-card__body">
                            <h6 data-v-0a1f67c4="" class="mb-0 text-white">
                              <i
                                data-v-0a1f67c4=""
                                class="icon-cp fs-22 mr-3 v-m-3"
                              ></i>
                              <span data-v-0a1f67c4="">产品经理工具</span>
                            </h6>
                          </div>
                          <!---->
                        </div>
                      </div>
                    </a>
                  </div>
                  <div data-v-0a1f67c4="" class="col-3">
                    <a
                      data-v-0a1f67c4=""
                      href="https://macwk.com/special"
                      class=""
                    >
                      <div
                        data-v-0a1f67c4=""
                        class="
                          macwk-card
                          bg-gradient-purple
                          hover-shadow-6
                          py-3
                          text-center
                        "
                      >
                        <!---->
                        <div
                          class="
                            macwk-card__collapsible-content
                            vs-con-loading__container
                          "
                        >
                          <div class="macwk-card__body">
                            <h6 data-v-0a1f67c4="" class="mb-0 text-white">
                              <i
                                data-v-0a1f67c4=""
                                class="icon-code fs-22 mr-3 v-m-3"
                              ></i>
                              <span data-v-0a1f67c4="">更多专题</span>
                            </h6>
                          </div>
                          <!---->
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="container mb-5">
                <div class="d-flex app-content-header mb-6">
                  <div class="main-title">
                    <h4 class="i-con-h-a mb-0">
                      <i class="mr-1 text-muted i-con i-con-calendar v-m-4"
                        ><i></i
                      ></i>
                      <span>精品软件</span>
                    </h4>
                  </div>
                  <nav class="nav nav-title flex-grow-1">
                    <a class="nav-link active">新鲜发布</a>
                    <a class="nav-link">热门下载</a>
                    <a class="nav-link">站长推荐</a>
                    <a class="nav-link">最多评论</a>
                  </nav>
                  <div class="more-action">
                    <a
                      href="https://macwk.com/soft/all/p1"
                      class="btn btn-more active"
                    >
                      更多软件 <i class="icon-arrow-right fw-600 fs-12 v-2"></i
                    ></a>
                  </div>
                </div>
                <div
                  class="soft-index lazy-transition w-r"
                  style="margin-left: -10px; margin-right: -10px"
                >
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-0"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/infuse"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/infuse\.png);
                          "
                        ></div>
                        <img
                          class="delay-0"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/infuse.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/infuse.png"
                          lazy="loaded"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >7.3.4</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>Infuse Pro</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>7.3.4</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <!---->
                          <span>超强全能视频播放器</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-1"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/movavi-video-converter-22"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/movavi-video-converter-21-premium\.png);
                          "
                        ></div>
                        <img
                          class="delay-1"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/movavi-video-converter-21-premium.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/movavi-video-converter-21-premium.png"
                          lazy="loaded"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >22.2.1</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>Movavi Video Converter 22</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>22.2.1</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <!---->
                          <span>最强视频格式转换压缩工具</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-2"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/app-cleaner-and-uninstaller-pro"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/app-cleaner-7\.png);
                          "
                        ></div>
                        <img
                          class="delay-2"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/app-cleaner-7.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/app-cleaner-7.png"
                          lazy="loaded"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >Pro 7.5.1</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>App Cleaner &amp; Uninstaller</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>Pro 7.5.1</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <!---->
                          <span>应用深度清理卸载工具</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-3"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/bartender-4"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/bartender-4\.png);
                          "
                        ></div>
                        <img
                          class="delay-3"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/bartender-4.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/bartender-4.png"
                          lazy="loaded"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >4.1.32 Beta</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>Bartender 4</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>4.1.32 Beta</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <!---->
                          <span>方便的管理菜单栏图标</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-4"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/capture-one-22"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/capture-one-20\.png);
                          "
                        ></div>
                        <img
                          class="delay-4"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/capture-one-20.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/capture-one-20.png"
                          lazy="loaded"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >15.1.0.123</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>Capture One 22</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>15.1.0.123</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <!---->
                          <span>专业级raw图像处理软件</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-5"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/art-text"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/art-text-4\.png);
                          "
                        ></div>
                        <img
                          class="delay-5"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/art-text-4.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/art-text-4.png"
                          lazy="loading"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >4.1.2</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>Art Text</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>4.1.2</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <!---->
                          <span>3D艺术字一键生成</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-6"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/progressive-downloader"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/progressive-downloader-1\.png);
                          "
                        ></div>
                        <img
                          class="delay-6"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/progressive-downloader-1.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/progressive-downloader-1.png"
                          lazy="loading"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >5.1.38</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>Progressive Downloader</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>5.1.38</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <!---->
                          <span>mac多线程下载器</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-7"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/xscope"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/xscope-bs\.png);
                          "
                        ></div>
                        <img
                          class="delay-7"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/xscope-bs.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/xscope-bs.png"
                          lazy="loading"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >4.5.2</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>xScope</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>4.5.2</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <!---->
                          <span>精确度量工具</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-8"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/obs-studio"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/obs-studio\.png);
                          "
                        ></div>
                        <img
                          class="delay-8"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/obs-studio.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/obs-studio.png"
                          lazy="loading"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >27.2.0-rc1</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>OBS Studio</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>27.2.0-rc1</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <span
                            class="el-tooltip d-inline-block mr-1 item"
                            aria-describedby="el-tooltip-8084"
                            tabindex="0"
                            ><i class="icon-github"></i
                          ></span>
                          <span>开源直播录像软件</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-9"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/mark-text"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/mark-text\.png);
                          "
                        ></div>
                        <img
                          class="delay-9"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/mark-text.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/mark-text.png"
                          lazy="loading"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >0.17.0-rc.2</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>Mark Text</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>0.17.0-rc.2</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <span
                            class="el-tooltip d-inline-block mr-1 item"
                            aria-describedby="el-tooltip-6811"
                            tabindex="0"
                            ><i class="icon-Open-Source"></i
                          ></span>
                          <span>好用的markdown编辑器</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-10"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/system-toolkit"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/system-toolkit-1\.png);
                          "
                        ></div>
                        <img
                          class="delay-10"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/system-toolkit-1.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/system-toolkit-1.png"
                          lazy="loading"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >5.3.1</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>System Toolkit</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>5.3.1</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <!---->
                          <span>系统维护工具箱</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="list-animation-leftIn w-c w-c-4 delay-11"
                    style="
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 20px;
                    "
                  >
                    <a
                      href="https://macwk.com/soft/imap-builder"
                      target="_self"
                      class="macwk-app border white cursor-pointer mb-0"
                    >
                      <div class="macwk-app__header--icon">
                        <div
                          class="macwk-app__header--icon--content"
                          style="
                            --img: url(https\:\/\/macwk2022\.oss-cn-hongkong\.aliyuncs\.com\/public\/uploads\/_\/originals\/imap-builder\.png);
                          "
                        ></div>
                        <img
                          class="delay-11"
                          data-src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/imap-builder.png"
                          src="https://macwk2022.oss-cn-hongkong.aliyuncs.com/public/uploads/_/originals/imap-builder.png"
                          lazy="loading"
                        />
                      </div>
                      <div class="macwk-app__body h-150">
                        <p class="macwk-app__body--version text-truncate">
                          <span
                            style="
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              overflow: hidden;
                              word-break: break-all;
                              text-overflow: ellipsis;
                              -webkit-line-clamp: 1;
                            "
                            >11.1.2</span
                          >
                        </p>
                        <h5
                          class="macwk-app__body--title"
                          style="
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            word-break: break-all;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 1;
                          "
                        >
                          <!---->
                          <!---->
                          <span>iMap Builder</span>
                          <span
                            class="
                              macwk-app__body--title--version
                              text-muted
                              fs-14
                            "
                            ><span class="mx-1">-</span>11.1.2</span
                          >
                        </h5>
                        <p
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
                          <!---->
                          <!---->
                          <!---->
                          <span>支持任务的思维导‪图</span>
                          <!---->
                        </p>
                      </div>
                      <!---->
                      <div class="macwk-app__footer macwk-app__footer--margin">
                        <div class="macwk-app__footer--more">
                          <i class="light-icon-more icon-next-arrow"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="white dk py-7">
                <div class="container">
                  <div class="d-flex app-content-header mb-6">
                    <div class="main-title">
                      <h4 class="i-con-h-a mb-0">
                        <i class="mr-1 text-muted i-con i-con-layer v-m-4"
                          ><i></i
                        ></i>
                        <span>教程文章</span>
                      </h4>
                    </div>
                    <nav class="nav nav-title flex-grow-1">
                      <a class="nav-link active">新鲜发布</a>
                      <a class="nav-link">站长推荐</a>
                      <a class="nav-link">最多评论</a>
                    </nav>
                    <div class="more-action">
                      <router-link
                        target="_self"
                        class="nav-link"
                        data-v-122eae44=""
                        to="post/all"
                      >
                        更多文章
                        <i class="icon-arrow-right fw-600 fs-12 v-2"></i
                      ></router-link>
                    </div>
                  </div>
                  <div class="row gap-a">
                    <div class="com-md-12 col-lg-6">
                      <a
                        v-for="(item, id) in this.leftArr"
                        :key="id"
                        
                        class="
                          feature-block-three
                          border
                          white
                          dk
                          hover-shadow-6
                          delay-0
                          list-animation-leftIn
                        "
                      >
                        <div v-if="item.status.includes('published')">
                          <router-link :to="'/post/' + item.id">
                            <div class="d-flex align-items-center">
                              <div class="icon-box icon-one">
                                <img
                                  v-if="item.thumb != null"
                                  class="delayImg"
                                  :src="item.thumb"
                                  lazy="loading"
                                />
                                <div
                                  v-else
                                  class="delayImg"
                                  :style="getStyles()"
                                >
                                  <h3
                                    class="
                                      flex
                                      text-center text-white
                                      opacity-50
                                    "
                                  >
                                    NOPIC
                                  </h3>
                                </div>
                              </div>
                              <div class="text">
                                <h5
                                  style="
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    overflow: hidden;
                                    word-break: break-all;
                                    text-overflow: ellipsis;
                                    -webkit-line-clamp: 2;
                                  "
                                >
                                  {{ item.title }}
                                </h5>
                                <div class="text-muted fs-16 mr-3">
                                  <span
                                    v-if="item.createTime != null"
                                    v-text="formatDate(item.createTime)"
                                  >
                                  </span>
                                  <span
                                    v-else
                                    v-text="formatDate(item.addTime)"
                                  >
                                  </span>
                                </div>
                              </div>
                              <div
                                class="
                                  read-more
                                  d-flex
                                  justify-content-end
                                  w-80
                                  pr-3
                                "
                              >
                                <i class="light-icon-more icon-next-arrow"></i>
                              </div>
                            </div>
                          </router-link>
                        </div>
                      </a>
                    </div>

                    <div class="com-md-12 col-lg-6">
                      <a
                        v-for="(item, id) in this.rightArr"
                        :key="id"
                        href="https://macwk.com/article/sipmac"
                        class="
                          feature-block-three
                          border
                          white
                          dk
                          hover-shadow-6
                          delay-5
                          list-animation-leftIn
                        "
                      >
                        <div v-if="item.status.includes('published')">
                          <router-link :to="'/post/' + item.id">
                            <div class="d-flex align-items-center">
                              <div class="icon-box icon-one">
                                <img
                                  v-if="item.thumb != null"
                                  class="delayImg"
                                  :src="item.thumb"
                                  lazy="loading"
                                />
                                <div
                                  v-else
                                  class="delayImg"
                                  :style="getStyles()"
                                >
                                  <h3
                                    class="
                                      flex
                                      text-center text-white
                                      opacity-50
                                    "
                                  >
                                    NOPIC
                                  </h3>
                                </div>
                              </div>
                              <div class="text">
                                <h5
                                  style="
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    overflow: hidden;
                                    word-break: break-all;
                                    text-overflow: ellipsis;
                                    -webkit-line-clamp: 2;
                                  "
                                >
                                  {{ item.title }}
                                </h5>
                                <div class="text-muted fs-16 mr-3">
                                  <span
                                    v-if="item.createTime != null"
                                    v-text="formatDate(item.createTime)"
                                  >
                                  </span>
                                  <span
                                    v-else
                                    v-text="formatDate(item.addTime)"
                                  >
                                  </span>
                                </div>
                              </div>
                              <div
                                class="
                                  read-more
                                  d-flex
                                  justify-content-end
                                  w-80
                                  pr-3
                                "
                              >
                                <i class="light-icon-more icon-next-arrow"></i>
                              </div>
                            </div>
                          </router-link>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="mobile-model">
              <div
                class="
                  d-flex
                  layout-min-full-height
                  justify-content-center
                  align-items-center
                "
              >
                <div class="text-center" style="width: 80%; margin: 0px auto">
                  <h1 class="mb-4">哇，窗口太小啦</h1>
                  <p class="mb-6">请调整浏览器窗口大小或者请使用手机查看！</p>
                </div>
              </div>
            </div>
          </div>
          <foot />
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
import { getNewArticle } from '@/api/webarticle'
import { formatDate } from '@/utils/date.js'
import { getCarousel } from '@/api/sitting'

import top from './components/Top.vue'
import foot from './components/Foots.vue'

export default ({
  name: 'Home',
  components: {top, foot},
  data() {
    return {
      acticve:'nav-link active',
      Carousel: {},
      list: null,
      leftArr: null,
      rightArr: null,
    }
  },
  created() {
    this.getList()
    this.getSitting()
  },
  props: {
    dataHeight: {
      type: String,
      default: '450px'
    }
  },
  methods: {
    getStyles() {
      //生成随机颜色
      let max = 8;
      let min = 1;

      let x = Math.floor(Math.random() * (max - min + 1)) + min;

      const backcolor = "randomColor" + x;
      console.log(backcolor);

      if (backcolor == "randomColor1") {
        return "background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);"
      }
      if (backcolor == "randomColor2") {
        return "background-image: linear-gradient( 135deg, #FEB692 10%, #EA5455 100%);"
      }
      if (backcolor == "randomColor3") {
        return "background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);"
      }
      if (backcolor == "randomColor4") {
        return "background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);"
      }
      if (backcolor == "randomColor5") {
        return "background-image: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);"
      }
      if (backcolor == "randomColor6") {
        return "background-image: linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%);"
      }
      if (backcolor == "randomColor7") {
        return "background-image: linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%);"
      }
      if (backcolor == "randomColor8") {
        return "background-image: linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%);"
      }


      return "background-image: linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%);"
    },
    formatDate(time) {
      let data = new Date(time)
      return formatDate(data, 'yyyy-MM-dd hh:mm ')
    },
    getSitting() {
      getCarousel().then(resp => {
        this.Carousel = resp.data
        console.log(resp)
      })
    },
    getList() {
      this.listLoading = true
      getNewArticle(6).then(resp => {
        this.list = resp.data
        console.log(this.list)
        this.total = resp.data.total
        this.listLoading = false
        //将array进行处理,他的index索引余2===0的就放到一个新数组中leftArr
        this.leftArr = this.list.filter((_item, index) => index % 2 === 0);
        //将array进行处理,他的index索引余2 ！===0的就放到一个新数组中rightArr
        this.rightArr = this.list.filter((_item, index) => index % 2 !== 0);

      })
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../static/mycss/top.css";
@import "../static/mycss/body.css";
</style>
<style scoped>
.delayImg {
  height: 100px;
  width: 145px;
}
</style>


<style>
.white1 {
  background-color: rgb(255, 255, 255);
  z-index: -1;
}
.index1 {
  z-index: 555;
}
.index {
  z-index: -1;
}
.outsection {
  display: flex;
  align-items: center;
  justify-content: center;
}
.Thecarousel {
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  width: 1435px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
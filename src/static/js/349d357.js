(window.webpackJsonp = window.webpackJsonp || []).push([[18], { 730: function(t, e, n) { 'use strict'; n.r(e); var l = n(25); var o = n(9); var c = (n(54), n(36), n(16), n(37), { name: 'IndexBanner', data: function() { return { swiperOption: { spaceBetween: 30, centeredSlides: !0, looper: !0, autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { el: '.swiper-pagination', clickable: !0 }, navigation: { nextEl: '.swiper-next', prevEl: '.swiper-prev' }}, shapeimglist: [{ path: '/assets/svg/shape-1.svg', class: 'shape-three' }, { path: '/assets/svg/shape-55.svg', class: 'shape-four' }, { path: '/assets/svg/shape-56.svg', class: 'shape-five' }, { path: '/assets/svg/shape-57.svg', class: 'shape-six' }, { path: '/assets/svg/shape-58.svg', class: 'shape-seven' }, { path: '/assets/svg/shape-59.svg', class: 'shape-eight' }, { path: '/assets/svg/shape-60.svg', class: 'shape-nine' }, { path: '/assets/svg/shape-61.svg', class: 'shape-ten' }, { path: '/assets/svg/shape-62.svg', class: 'shape-eleven' }, { path: '/assets/svg/shape-10.svg', class: 'shape-10' }, { path: '/assets/svg/shape-11.svg', class: 'shape-11' }] } }, computed: {}, components: {}, created: function() {}, methods: {}, mounted: function() { 1 } }); var r = n(6); var d = Object(r.a)(c, function() { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('el-carousel', { staticClass: 'index-banner', attrs: { 'indicator-position': 'outside', height: '400px', arrow: 'always' }}, [n('el-carousel-item', [n('div', { staticClass: 'section white h-400 position-relative radius-5x d-flex align-items-center' }, [n('div', { staticClass: 'bg-shape-holder', class: { 'no-animation': !t.animation }}, t._l(t.shapeimglist, function(image, e) { return n('img', { key: e, class: image.class, attrs: { src: t.imgAssetsUrl(image.path) }}) }), 0), t._v(' '), n('div', { staticClass: 'w-600 pl-10 position-relative z-index-9999' }, [n('h2', {}, [t._v('无广告，无后门，安全！')]), t._v(' '), n('p', { staticClass: 'text-muted  fs-18' }, [t._v('网站无广告，软件无后门，欢迎监督。隐私方面本站无能为力，推荐大家安装防火墙软件禁止应用联网！')]), t._v(' '), n('nuxt-link', { staticClass: 'btn btn-theme btn-round px-6', attrs: { to: '/soft/firewall/p1' }}, [t._v('安装防火墙')])], 1), t._v(' '), n('div', { staticClass: 'index-banner-image-one' }, [n('img', { attrs: { src: t.webSkin === 'light' || t.webSkin === 'auto' && !t.prefersDarkMode ? t.imgAssetsUrl('/assets/svg/banner-safe-free.png') : t.imgUrl('home-banner-01.1.png') }})])])]), t._v(' '), n('el-carousel-item', [n('div', { staticClass: 'section white h-400 position-relative radius-5x d-flex align-items-center' }, [n('div', { staticClass: 'bg-shape-holder', class: { 'no-animation': !t.animation }}, [t._l(t.shapeimglist, function(image, e) { return n('img', { key: e, class: image.class, attrs: { src: t.imgAssetsUrl(image.path) }}) }), t._v(' '), n('span', { staticClass: 'big-round-one' }), t._v(' '), n('span', { staticClass: 'big-round-two' }), t._v(' '), n('span', { staticClass: 'big-round-three' })], 2), t._v(' '), n('div', { staticClass: 'w-600 pl-10 position-relative z-index-9999' }, [n('h2', {}, [t._v('只收录精品Mac应用')]), t._v(' '), n('p', { staticClass: 'text-muted  fs-18' }, [t._v('每款Mac应用都经过Macwk.com严格测试后发布，确保应用可以和正版软件一样稳定运行使用！')]), t._v(' '), n('nuxt-link', { staticClass: 'btn btn-theme btn-round px-6', attrs: { to: t.linkClearAll() }}, [t._v('马上下载')])], 1), t._v(' '), n('div', { staticClass: 'index-banner-image-two' }, [n('img', { attrs: { src: t.imgAssetsUrl('/assets/images/home-banner-carry.png') }})])])])], 1) }, [], !1, null, 'bffc9160', null).exports; var v = { name: 'IndexSpecial', data: function() { return {} }, computed: {}, components: {}, created: function() {}, methods: {}, mounted: function() { 1 } }; var m = Object(r.a)(v, function() { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { staticClass: 'index-special row mb-6' }, [n('div', { staticClass: 'col-3' }, [n('NuxtLink', { attrs: { to: '/special/novice' }}, [n('Card', { directives: [{ name: 'tilt', rawName: 'v-tilt', value: { scale: 1.05 }, expression: '{scale: 1.05}' }], staticClass: 'bg-gradient-green hover-shadow-6 py-3 text-center' }, [n('h6', { staticClass: 'mb-0 text-white' }, [n('i', { staticClass: 'icon-office fs-22 mr-3 v-m-3' }), t._v(' '), n('span', [t._v('新人必备')])])])], 1)], 1), t._v(' '), n('div', { staticClass: 'col-3' }, [n('NuxtLink', { attrs: { to: '/special/photo' }}, [n('Card', { directives: [{ name: 'tilt', rawName: 'v-tilt', value: { scale: 1.05 }, expression: '{scale: 1.05}' }], staticClass: 'bg-gradient-orange hover-shadow-6 py-3 text-center' }, [n('h6', { staticClass: 'mb-0 text-white' }, [n('i', { staticClass: 'icon-gallery fs-22 mr-3 v-m-3' }), t._v(' '), n('span', [t._v('图像处理工具')])])])], 1)], 1), t._v(' '), n('div', { staticClass: 'col-3' }, [n('NuxtLink', { attrs: { to: '/special/pm' }}, [n('Card', { directives: [{ name: 'tilt', rawName: 'v-tilt', value: { scale: 1.05 }, expression: '{scale: 1.05}' }], staticClass: 'bg-gradient-blue hover-shadow-6 py-3 text-center' }, [n('h6', { staticClass: 'mb-0 text-white' }, [n('i', { staticClass: 'icon-cp fs-22 mr-3 v-m-3' }), t._v(' '), n('span', [t._v('产品经理工具')])])])], 1)], 1), t._v(' '), n('div', { staticClass: 'col-3' }, [n('NuxtLink', { attrs: { to: '/special' }}, [n('Card', { directives: [{ name: 'tilt', rawName: 'v-tilt', value: { scale: 1.05 }, expression: '{scale: 1.05}' }], staticClass: 'bg-gradient-purple hover-shadow-6 py-3 text-center' }, [n('h6', { staticClass: 'mb-0 text-white' }, [n('i', { staticClass: 'icon-code fs-22 mr-3 v-m-3' }), t._v(' '), n('span', [t._v('更多专题')])])])], 1)], 1)]) }, [], !1, null, '0a1f67c4', null).exports; var f = n(725); var h = n.n(f); var _ = (n(726), n(727), { head: function() { return { title: 'MacWk - 精品mac软件下载', link: this.getLinkRel() } }, data: function() { return { slickOptions: { centerMode: !0, centerPadding: '20px', focusOnSelect: !0, infinite: !0, slidesToShow: 1, speed: 500 }, articleLoading: !1, articleSortActive: '-modified_on', appLoading: !1, appSortActive: '-modified_on', appSort: [{ name: '新鲜发布', key: '-modified_on' }, { name: '热门下载', key: '-download_total' }, { name: '站长推荐', key: '-isflag,-modified_on' }, { name: '最多评论', key: '-comment_total' }], articleSort: [{ name: '新鲜发布', key: '-modified_on' }, { name: '站长推荐', key: '-isflag,-modified_on' }, { name: '最多评论', key: '-comment_total' }], flagList: [], posts: [], searchQuery: '', direction: 'top-bottom', direction2: 'radial', opacity: [0.3, 0.5], classes: ['pos-full', 'w-full', 'radius-5x'], sortlist: [{ path: '/soft/all/p1', key: '-modified_on', name: '最新', icon: 'icon-clock-ep' }, { path: '/soft/all/o-download_total/p1', key: '-download_total', name: '下载', icon: 'icon-trending-up' }, { path: '/soft/all/o-comment_total/p1', key: '-comment_total', name: '评论', icon: 'icon-comments' }, { path: '/soft/all/o-like_total/p1', key: '-like_total', name: '喜欢', icon: 'icon-favotire_empty' }, { path: '/soft/all/o-isflag,-modified_on/p1', key: '-isflag,-modified_on', name: '推荐', icon: 'icon-thumb-up' }] } }, computed: {}, components: { Banner: d, Special: m, VueSlickCarousel: h.a }, asyncData: function(t) { return Object(o.a)(regeneratorRuntime.mark(function e() { var n, o, c, r, d, article; return regeneratorRuntime.wrap(function(e) { for (;;) switch (e.prev = e.next) { case 0:return n = t.app, t.params, t.error, o = { sort: '-modified_on' }, e.next = 4, Promise.all([n.context.app.$client.getItems('soft', { sort: o.sort, offset: 0, limit: 12, fields: 'icon.filename_disk.*,soft_status,website,modified_on,slug,os_version,version,title,title_des,size,iscrack,language,download_total,comment_total', status: 'published' }), n.context.app.$client.getItems('article', { sort: o.sort, offset: 0, limit: 6, filter: { photo_thumb: { nnull: 'nnull' }}, fields: 'photo.filename_disk.*,photo_thumb.filename_disk.*,modified_on,slug,tags,title,description,comment_total', status: 'published' })]); case 4:return c = e.sent, r = Object(l.a)(c, 2), d = r[0], article = r[1], e.abrupt('return', { softlist: d.data, articlelist: article.data }); case 9:case 'end':return e.stop() } }, e) }))() }, methods: { onAppSortItemClick: function(t) { var e = this; this.appLoading = !0; var filter = {}; setTimeout(function() { e.$client.getItems('soft', { meta: 'total_count,filter_count', sort: t, offset: 0, limit: 12, filter: filter, fields: 'id,icon.filename_disk,modified_on,slug,os_version,version,title,title_short,title_des,language,size,isflag,iscrack,comment_total,like_total,download_total', status: 'published' }).then(function(n) { e.softlist = n.data, e.appLoading = !1, e.appSortActive = t }).catch(function(t) { e.appLoading = !1 }) }, 100) }, onArticleSortItemClick: function(t) { var e = this; this.articleLoading = !0; var filter = { photo_thumb: { nnull: 'nnull' }}; setTimeout(function() { e.$client.getItems('article', { meta: 'total_count,filter_count', sort: t, offset: 0, limit: 6, filter: filter, fields: 'photo.filename_disk.*,photo_thumb.filename_disk.*,modified_on,slug,tags,title,description,comment_total', status: 'published' }).then(function(n) { e.articlelist = n.data, e.articleLoading = !1, e.articleSortActive = t }).catch(function(t) { e.articleLoading = !1 }) }, 100) } }, mounted: function() {} }); var C = Object(r.a)(_, function() { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', [t.$device.isDesktop ? [n('section', { staticClass: 'layout-index pc-model mt-5' }, [n('div', { staticClass: 'banner-index mb-6' }, [n('div', { staticClass: 'container' }, [n('Banner')], 1)]), t._v(' '), n('div', { staticClass: 'container' }, [n('Special')], 1), t._v(' '), n('div', { staticClass: 'container mb-5' }, [n('div', { staticClass: 'd-flex app-content-header mb-6' }, [t._m(0), t._v(' '), n('nav', { staticClass: 'nav nav-title flex-grow-1' }, t._l(t.appSort, function(e, l) { return n('a', { key: l, staticClass: 'nav-link', class: e.key === t.appSortActive ? 'active' : '', on: { click: function(n) { return t.onAppSortItemClick(e.key) } }}, [t._v(t._s(e.name))]) }), 0), t._v(' '), n('div', { staticClass: 'more-action' }, [n('NuxtLink', { staticClass: 'btn btn-more active', attrs: { to: '/soft/all/p1' }}, [t._v('\n              更多软件\n              '), n('i', { staticClass: 'icon-arrow-right fw-600 fs-12 v-2' })])], 1)]), t._v(' '), n('Row', { directives: [{ name: 'loading', rawName: 'v-loading', value: t.appLoading, expression: 'appLoading' }], staticClass: 'soft-index lazy-transition', attrs: { gutter: 20 }}, t._l(t.softlist, function(e, l) { return n('Col', { key: String(e.slug) + String(e.id), staticClass: 'list-animation-leftIn', class: 'delay-' + l, attrs: { span: 4 }}, [n('Box', { staticClass: 'mb-0', attrs: { item: e, to: '/soft/' + e.slug, list: 'grid', animations: t.animation, index: l }})], 1) }), 1)], 1), t._v(' '), n('div', { staticClass: 'white dk py-7' }, [n('div', { staticClass: 'container' }, [n('div', { staticClass: 'd-flex app-content-header mb-6' }, [t._m(1), t._v(' '), n('nav', { staticClass: 'nav nav-title flex-grow-1' }, t._l(t.articleSort, function(e, l) { return n('a', { key: l, staticClass: 'nav-link', class: e.key === t.articleSortActive ? 'active' : '', on: { click: function(n) { return t.onArticleSortItemClick(e.key) } }}, [t._v(t._s(e.name))]) }), 0), t._v(' '), n('div', { staticClass: 'more-action' }, [n('NuxtLink', { staticClass: 'btn btn-more active', attrs: { to: '/article/all/p1' }}, [t._v('\n                更多文章\n                '), n('i', { staticClass: 'icon-arrow-right fw-600 fs-12 v-2' })])], 1)]), t._v(' '), n('div', { directives: [{ name: 'loading', rawName: 'v-loading', value: t.articleLoading, expression: 'articleLoading' }], staticClass: 'row gap-a' }, t._l(t.articlelist, function(e, l) { return n('div', { key: l + e.slug + t.$route.path, staticClass: 'com-md-12 col-lg-6' }, [n('NuxtLink', { staticClass: 'feature-block-three border white dk hover-shadow-6', class: t.animation ? 'delay-' + l + ' list-animation-leftIn' : '', attrs: { to: '/article/' + e.slug }}, [n('div', { staticClass: 'd-flex align-items-center' }, [n('div', { staticClass: 'icon-box icon-one' }, [n('img', { directives: [{ name: 'lazy', rawName: 'v-lazy', value: t.imgUrl(e.photo_thumb.filename_disk), expression: 'imgUrl(item.photo_thumb.filename_disk)' }], class: 'delay-' + l })]), t._v(' '), n('div', { staticClass: 'text' }, [n('h5', { directives: [{ name: 'line-clamp', rawName: 'v-line-clamp:20', value: 2, expression: '2', arg: '20' }] }, [t._v('\n                      ' + t._s(e.title) + '\n                    ')]), t._v(' '), n('div', { staticClass: 'text-muted fs-16 mr-3' }, [t._v(t._s(t._f('toDate')(e.modified_on)))])]), t._v(' '), n('div', { staticClass: 'read-more d-flex justify-content-end w-80 pr-3' }, [n('i', { staticClass: 'light-icon-more icon-next-arrow' })])])])], 1) }), 0)])])]), t._v(' '), t._m(2)] : [n('div', { staticClass: 'white bg pb-4 overflow-hidden' }, [n('VueSlickCarousel', t._b({ attrs: { arrows: !0 }}, 'VueSlickCarousel', t.slickOptions, !1), [n('div', { staticClass: 'h-180 px-2 py-4' }, [n('div', { staticClass: 'banner-item d-flex align-items-center bg-pale-primary radius-5x h-full' }, [n('div', { staticClass: 'text-center flex' }, [n('h5', { staticClass: 'fw-600' }, [t._v('只收录'), n('span', { staticClass: 'fs-26 mx-1' }, [t._v('精品')]), t._v('Mac应用')]), t._v(' '), n('p', { staticClass: 'mb-0 opacity-60' }, [t._v('每款应用都经过严格测试后发布！')])])])]), t._v(' '), n('div', { staticClass: 'h-180 px-2 py-4' }, [n('div', { staticClass: 'banner-item d-flex align-items-center bg-pale-success radius-5x h-full' }, [n('div', { staticClass: 'text-center flex' }, [n('h5', { staticClass: 'fw-600' }, [t._v('无广告，无后门，安全！')]), t._v(' '), n('p', { staticClass: 'mb-0 opacity-60' }, [t._v('网站无广告，软件无后门，欢迎监督。')])])])]), t._v(' '), n('div', { staticClass: 'h-180 px-2 py-4' }, [n('div', { staticClass: 'banner-item d-flex align-items-center bg-pale-info radius-5x h-full' }, [n('div', { staticClass: 'text-center flex' }, [n('h5', { staticClass: 'fw-600' }, [t._v('每日更新！')]), t._v(' '), n('p', { staticClass: 'mb-0 opacity-60' }, [t._v('从网站上线至今从未断更！')])])])])])], 1), t._v(' '), n('div', { staticClass: 'pb-5 white bg mobile-layout' }, [n('div', { staticClass: 'px-6' }, [n('Row', { staticClass: 'text-center', attrs: { gutter: 30 }}, [n('Col', { attrs: { span: 6 }}, [n('nuxt-link', { attrs: { to: '/soft/all/p1' }}, [n('Card', { staticClass: 'bg-gradient-green hover-shadow-6 text-center mb-2' }, [n('h6', { staticClass: 'mb-0 text-white' }, [n('i', { staticClass: 'icon-office fs-22 v-m-1' })])]), t._v(' '), n('p', { staticClass: 'mb-0' }, [t._v('软件')])], 1)], 1), t._v(' '), n('Col', { attrs: { span: 6 }}, [n('nuxt-link', { attrs: { to: '/article/all/p1' }}, [n('Card', { staticClass: 'bg-gradient-orange hover-shadow-6 text-center mb-2' }, [n('h6', { staticClass: 'mb-0 text-white' }, [n('i', { staticClass: 'icon-gallery fs-22 v-m-1' })])]), t._v(' '), n('p', { staticClass: 'mb-0' }, [t._v('文章')])], 1)], 1), t._v(' '), n('Col', { attrs: { span: 6 }}, [n('nuxt-link', { attrs: { to: '/special' }}, [n('Card', { staticClass: 'bg-gradient-blue hover-shadow-6 text-center mb-2' }, [n('h6', { staticClass: 'mb-0 text-white' }, [n('i', { staticClass: 'icon-cp fs-22 v-m-1' })])]), t._v(' '), n('p', { staticClass: 'mb-0' }, [t._v('专题')])], 1)], 1), t._v(' '), n('Col', { attrs: { span: 6 }}, [n('nuxt-link', { attrs: { to: '/perfect' }}, [n('Card', { staticClass: 'bg-gradient-purple hover-shadow-6 text-center mb-2' }, [n('h6', { staticClass: 'mb-0 text-white' }, [n('i', { staticClass: 'icon-code fs-22 v-m-1' })])]), t._v(' '), n('p', { staticClass: 'mb-0' }, [t._v('精选')])], 1)], 1)], 1), t._v(' '), n('h5', { staticClass: 'fw-600 mb-3' }, [t._v('最近更新')])], 1), t._v(' '), n('div', { staticClass: 'grid-list px-0' }, t._l(t.softlist, function(e, l) { return n('div', { key: String(e.slug) + String(e.id) }, [n('Box', { staticClass: 'mb-0 px-6', attrs: { item: e, to: '/soft/' + e.slug, list: 'grid', animations: t.animation, index: l }})], 1) }), 0), t._v(' '), n('div', { staticClass: 'text-center px-6 my-3' }, [n('NuxtLink', { staticClass: 'btn btn-outline-theme btn-round btn-block', attrs: { to: '/soft/all/p1' }}, [t._v('查看更多')])], 1)])]], 2) }, [function() { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { staticClass: 'main-title' }, [n('h4', { staticClass: 'i-con-h-a mb-0' }, [n('i', { staticClass: 'mr-1 text-muted i-con i-con-calendar v-m-4' }, [n('i')]), t._v(' '), n('span', [t._v('精品软件')])])]) }, function() { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { staticClass: 'main-title' }, [n('h4', { staticClass: 'i-con-h-a mb-0' }, [n('i', { staticClass: 'mr-1 text-muted i-con i-con-layer v-m-4' }, [n('i')]), t._v(' '), n('span', [t._v('教程文章')])])]) }, function() { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { staticClass: 'mobile-model' }, [n('div', { staticClass: 'd-flex layout-min-full-height justify-content-center align-items-center' }, [n('div', { staticClass: 'text-center', staticStyle: { width: '80%', margin: '0 auto' }}, [n('h1', { staticClass: 'mb-4' }, [t._v('哇，窗口太小啦')]), t._v(' '), n('p', { staticClass: 'mb-6' }, [t._v('请调整浏览器窗口大小或者请使用手机查看！')])])])]) }], !1, null, null, null); e.default = C.exports } }])
<template>
  <div class="water-layout">
    <header class="water-header">
      <div class="water-header-left">
        <img src="../public/menu.png" class="water-header__menu" @click="asideOpen = !asideOpen" />
        <a :href="$site.base" class="water-heade__logo">water-ui</a>
      </div>
      <div class="water-header-right">
        <nav class="water-header__nav" v-for="item in $site.themeConfig.nav" :key="item.link">
          <a :href="item.link">{{item.text}}</a>
        </nav>
      </div>
    </header>
    <aside class="water-aside" :class="{'aside-open':asideOpen}" ref="aside">
      <nav class="water-aside__nav">
        <ul class="water-aside__links">
          <li v-for="(item,index) in asideNavs" :key="index">
            <section>
              <p>{{item.title}}</p>
              <a
                v-for="(val,cindex) in item.pages"
                :class="{'active':getPagePath.indexOf(val.path) != -1}"
                :href="val.path"
                :key="cindex"
                @click="asideLinkClick"
              >{{val.title}}</a>
            </section>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="water-main" @click="asideOpen = false">
      <Content />
      <div class="page-nav">
        <p class="inner">
          <a
            class="prev"
            :href="pageNav.prev.path"
            v-show="pageNav.prev.path"
          >← {{pageNav.prev.title}}</a>
          <a
            class="next"
            :href="pageNav.next.path"
            v-show="pageNav.next.path"
          >{{pageNav.next.title}} →</a>
        </p>
      </div>
    </main>

    <div class="demo-model">
      <div class="demo-model__content">
        <iframe :src="iframeOrigin+iframePath"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      origin: "https:/he-guang-wen.github.io/water-ui/docs-dist/",
      asideOpen: true,
      iframeOrigin: "https:/he-guang-wen.github.io",
      // iframeOrigin: "",
      iframePath: "",
      asideNavs: "",
      pageNav: {
        prev: {
          title: "",
          path: "",
        },
        next: {
          title: "",
          path: "",
        },
      },
    };
  },
  created() {},
  mounted() {
    // console.log(this.$site.base,'this.$sitethis.$site')
    if (this.$page.path == "/") {
      window.location.href =
        window.location.origin + "/water-ui/docs-dist/guide/quickstart.html";
    }

    window.addEventListener(
      "message",
      (e) => {
        if (typeof e.data != "string") return;

        if (this.$page.path == e.data + ".html") return;
        let path = e.data;
        let href;
        let pages = this.$site.pages;
        if (pages[0].path == "/") pages.shift();
        let page = pages.find((item) => {
          return item.path == e.data + ".html";
        });

        if (page) path = e.data + ".html";
        href = this.origin + path;
        // console.log(window.location,'window.locationwindow.location')
        window.location.href = href;
      },
      false
    );

    this.asideOpen = false;
    let asideTop = sessionStorage.getItem("asideTop");
    this.$nextTick(() => {
      this.$refs.aside.scrollTop = asideTop;
    });
    this.setAsideNavs();
    this.setPageNav();
    this.setIframePath();
    // console.log(this.$refs)

    // alert(asideTop);
  },
  computed: {
    getPagePath(val) {
      return this.$page.path;
    },
  },
  methods: {
    setAsideNavs() {
      let pages = this.$site.pages;
      if (pages[0].path == "/") pages.shift();

      let navs = [
        { title: "", catalog: "guide", pages: [] },
        { title: "基础组件", catalog: "basics", pages: [] },
        { title: "表单组件", catalog: "form", pages: [] },
        { title: "反馈组件", catalog: "feedback", pages: [] },
        { title: "展示组件", catalog: "exhibition", pages: [] },
        { title: "导航组件", catalog: "navigation", pages: [] },
      ];

      navs.forEach((item) => {
        pages.forEach((page) => {
          if (page.path.indexOf(item.catalog) != -1) {
            page.path = this.$site.base + page.path;
            item.pages.push(page);
          }
        });
      });
      this.asideNavs = navs;
    },
    setPageNav() {
      let pages = this.$site.pages;
      if (pages[0].path == "/") pages.shift();
      let pageIndex = pages.findIndex((item) => {
        return this.$page.path == item.path;
      });
      let prev = pages[pageIndex - 1];
      let next = pages[pageIndex + 1];
      if (prev) {
        let { title, path } = prev;
        this.pageNav.prev = { title, path };
      }
      if (next) {
        let { title, path } = next;
        this.pageNav.next = { title, path };
      }
    },
    setIframePath() {
      let page = this.$page.path;

      let path = page.split(".html")[0];
      path = path.replace("docs-dist", "dist/#");
      this.iframePath = path;
    },
    asideLinkClick() {
      sessionStorage.setItem("asideTop", this.$refs.aside.scrollTop);
    },
  },
};
</script>
<style lang="less">
@import "../styles/layout.less";
</style>
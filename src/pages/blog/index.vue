---
import Layout from "../../layouts/Layout.vue"
---
<Layout>
  <div>
    <div class="mx-10">
      <h2>Posts</h2>
      <p>nakasyouのブログです。</p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        <ContentList class="" v-slot="{ list }" :query="{ path: '/post', sort: { date: -1 } }">
          <article v-for="page in list" :key="page._path">
            <nuxt-link :to="page._path">
              <div class="card bg-base-100 shadow-xl m-1">
                <figure><img :src="page.thumbnail" alt="thumbnail" /></figure>
                <div class="card-body">
                  <div class="card-title">{{ page.title }}</div>
                  <p>{{ page.desc }}</p>
                </div>
              </div>
            </nuxt-link>
          </article>
        </ContentList>
      </div>
    </div>
  </div>
</Layout>
<style>
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.17em;
}
h4 {
  font-size: 1.00em;
}
h5 {
  font-size: 0.83em;
}
h6 {
  font-size: 0.67em;
}
</style>

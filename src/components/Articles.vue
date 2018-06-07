<template>
  <ul>
    <li
      v-for="article in articles"
      :key="article.id">
      <a
        :href="article.url"
        target="_blank">{{ article.title }}</a>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'QiitaArticles',
  data () {
    return {
      articles: []
    }
  },
  created () {
    this.getArticlesFromQiita()
  },
  methods: {
    getArticlesFromQiita () {
      let self = this
      // 記事を取得する
      axios
        .get('https://qiita.com/api/v2/items?page=1&per_page=20')
        .then(function (response) {
          self.articles = response.data
        })
        .catch(function (err) {
          alert(err.message)
        })
    }
  }
}
</script>

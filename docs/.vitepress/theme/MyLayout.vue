<script setup>
import DefaultTheme from "vitepress/theme";
import { useData, useRoute } from "vitepress";

const { Layout } = DefaultTheme;
const { path } = useRoute();
const { site, page } = useData();
</script>

<template>
  <Layout>
    <template #doc-before v-if="$frontmatter.layout == 'note'">
      <a
        :href="`https://twitter.com/intent/tweet?text=【${page.title} - ${site.title}】&url=https://yuheifujita.github.io${path}`"
        target="_blank"
        ><Badge type="tip" text="ツイートする"
      /></a>
    </template>
    <template #aside-outline-after v-if="$frontmatter.layout == 'note'">
      <a
        :href="`https://github.com/YuheiFUJITA/ai-study-notebook/issues/new?template=fix.yml&url=https://yuheifujita.github.io${path}`"
        target="_blank"
        ><Badge type="warning" text="修正を依頼する"
      /></a>
    </template>
  </Layout>
</template>

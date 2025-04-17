<template>
  <div class="articles-page">
    <section class="py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">技术文章</h1>
        <p class="text-xl">探索我们团队的技术分享和知识总结</p>
      </div>
    </section>

    <section class="py-12">
      <div class="container mx-auto px-4">
        <!-- 文章筛选 -->
        <div class="mb-8">
          <div class="flex flex-wrap items-center gap-4 mb-6">
            <h2 class="text-2xl font-bold">文章分类:</h2>
            <button 
              @click="activeTag = '全部'" 
              :class="[
                'px-4 py-2 rounded-full transition',
                activeTag === '全部' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              全部
            </button>
            <button 
              v-for="tag in uniqueTags" 
              :key="tag" 
              @click="activeTag = tag"
              :class="[
                'px-4 py-2 rounded-full transition', 
                activeTag === tag 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ tag }}
            </button>
          </div>
          <div class="relative w-full md:w-1/2 mb-6">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="搜索文章..." 
              class="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        <!-- 文章列表 -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="article in filteredArticles" 
            :key="article.id" 
            :to="`/articles/${article.documentId}`" 
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition group"
          >
            <div class="flex items-center mb-4">
              <i :class="article.icon || 'fas fa-file-alt'" class="text-2xl text-gray-800 mr-3 group-hover:text-blue-600 transition"></i>
              <h3 class="text-xl font-bold group-hover:text-blue-600 transition">{{ article.title }}</h3>
            </div>
            <p class="text-gray-600 mb-4">{{ article.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="(tag, index) in article.tags" 
                :key="index" 
                class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-gray-500 text-sm italic">作者：{{ article.author }}</p>
              <div class="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                阅读更多 <i class="fas fa-arrow-right ml-1"></i>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- 空状态 -->
        <div v-if="filteredArticles.length === 0" class="text-center py-16">
          <i class="fas fa-search text-5xl text-gray-300 mb-4"></i>
          <h3 class="text-2xl font-bold text-gray-700 mb-2">没有找到匹配的文章</h3>
          <p class="text-gray-500">请尝试其他搜索关键词或筛选条件</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import request from '../../utils/request';
import { IArticle } from '../../types';

const articles = ref<IArticle[]>([]);
const searchQuery = ref('');
const activeTag = ref('全部');

// 获取唯一标签列表
const uniqueTags = computed(() => {
  const tags = new Set<string>();
  articles.value.forEach(article => {
    article.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
});

// 根据搜索和标签筛选文章
const filteredArticles = computed(() => {
  return articles.value.filter(article => {
    // 标签筛选
    const tagMatch = activeTag.value === '全部' || article.tags.includes(activeTag.value);
    
    // 搜索筛选
    const searchLower = searchQuery.value.toLowerCase();
    const searchMatch = 
      searchQuery.value === '' || 
      article.title.toLowerCase().includes(searchLower) || 
      article.description.toLowerCase().includes(searchLower) ||
      article.author.toLowerCase().includes(searchLower);
    
    return tagMatch && searchMatch;
  });
});

// 获取文章数据
const fetchArticles = async () => {
  try {
    const res = await request.get("/articles?sort=createdAt&pagination[pageSize]=12");
    articles.value = res.data;
  } catch (error) {
    console.error("获取文章失败:", error);
  }
};

onMounted(() => {
  fetchArticles();
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style> 
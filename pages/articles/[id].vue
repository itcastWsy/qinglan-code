<template>
  <div>
    <!-- 文章顶部装饰 -->
    <div class="w-full h-40 bg-gradient-to-r from-blue-500 to-blue-700"></div>
    
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto -mt-24 bg-white rounded-lg shadow-xl overflow-hidden">
        <!-- 文章头部 -->
        <div class="p-8 border-b">
          <div v-if="article">
            <!-- 返回按钮 -->
            <div class="mb-6">
              <NuxtLink to="/articles" class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <i class="fas fa-arrow-left mr-2"></i>
                返回文章列表
              </NuxtLink>
            </div>
            
            <!-- 文章标题和元信息 -->
            <h1 class="text-3xl font-bold mb-4">{{ article.title }}</h1>
            
            <div class="flex flex-wrap items-center text-gray-500 mb-8">
              <div class="flex items-center mr-6 mb-2">
                <i class="fas fa-user mr-2"></i>
                <span>{{ article.author }}</span>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-2">
                <span 
                  v-for="(tag, index) in article.tags" 
                  :key="index" 
                  class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <!-- 文章描述 -->
            <div class="bg-gray-50 p-5 rounded-lg mb-8 italic text-gray-700">
              {{ article.description }}
            </div>
          </div>
          
          <div v-else class="py-8 text-center">
            <i class="fas fa-spinner fa-spin text-3xl text-blue-600 mb-4"></i>
            <p>加载文章中...</p>
          </div>
        </div>
        
        <!-- 文章内容 -->
        <div v-if="article" class="p-8">
          <div class="prose prose-lg max-w-none">
            <div v-if="article.content" v-html="renderedContent"></div>
            <div v-else class="py-8 text-center">
              <p class="text-gray-500">文章内容暂时不可用</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 底部导航 -->
      <div class="max-w-4xl mx-auto mt-8">
        <div class="flex justify-between items-center">
          <NuxtLink 
            to="/articles" 
            class="bg-white px-5 py-3 rounded-lg shadow text-gray-600 hover:text-blue-600 transition"
          >
            <i class="fas fa-th-large mr-2"></i>
            所有文章
          </NuxtLink>
          
          <div>
            <button 
              class="bg-white px-5 py-3 rounded-lg shadow text-gray-600 hover:text-blue-600 transition mx-1"
              @click="shareArticle"
            >
              <i class="fas fa-share-alt"></i>
            </button>
            
            <button 
              class="bg-white px-5 py-3 rounded-lg shadow text-gray-600 hover:text-blue-600 transition mx-1"
              @click="printArticle"
            >
              <i class="fas fa-print"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import request from '../../utils/request';
import { IArticle } from '../../types';
import { marked } from 'marked';

const route = useRoute();
const articleId = computed(() => route.params.id);
const article = ref<IArticle | null>(null);
const loading = ref(true);

// 使用marked将markdown转换为HTML
const renderedContent = computed(() => {
  if (!article.value?.content) return '';
  return marked(article.value.content);
});

// 获取文章数据
const fetchArticle = async () => {
  try {
    loading.value = true;
    
    if (typeof articleId.value === 'string' || typeof articleId.value === 'number') {
      // 先获取文章基本信息
      const listRes = await request.get(`/articles/${articleId.value}`);
      article.value = listRes.data;
      
      if (article.value && article.value.documentId) {
        // 使用documentId获取详细内容
        const detailRes = await request.get(`/article-content/${article.value.documentId}`);
        
        if (detailRes.data && detailRes.data.content) {
          // 如果成功获取内容，更新文章内容
          article.value.content = detailRes.data.content;
        } else {
          // 如果无法获取内容，使用生成的内容
          article.value.content = generateDummyContent(article.value.title, article.value.description);
        }
      } else if (article.value && !article.value.content) {
        // 如果没有documentId或content，生成示例内容
        article.value.content = generateDummyContent(article.value.title, article.value.description);
      }
    }
  } catch (error) {
    console.error("获取文章失败:", error);
  } finally {
    loading.value = false;
  }
};

// 生成示例Markdown内容（当API没有返回content字段时使用）
const generateDummyContent = (title: string, description: string) => {
  const authorName = article.value?.author || '青蓝逐码团队';
  
  return `
# ${title}

${description}

## 引言

这是一篇关于${title}的技术文章。在这篇文章中，我们将深入探讨相关技术的核心概念、实现方法以及应用场景。

## 核心概念

- 概念一：这是第一个重要概念的详细解释
- 概念二：这是第二个重要概念的详细解释
- 概念三：这是第三个重要概念的详细解释

## 代码示例

\`\`\`javascript
// 这是一个示例代码块
function example() {
  const data = {
    title: '${title}',
    author: '${authorName}'
  };
  
  console.log('这是一个关于' + data.title + '的示例');
  return data;
}
\`\`\`

## 应用场景

1. 第一个应用场景
2. 第二个应用场景
3. 第三个应用场景

## 总结

通过本文的介绍，我们了解了${title}的核心概念和实现方法。希望这篇文章对你有所帮助！

---

作者：${authorName}  
青蓝逐码团队出品
`;
};

// 分享文章
const shareArticle = () => {
  if (navigator.share && article.value) {
    navigator.share({
      title: article.value.title,
      text: article.value.description,
      url: window.location.href
    }).catch((error) => console.log('分享失败', error));
  } else {
    // 复制链接到剪贴板
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = window.location.href;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    
    alert('链接已复制到剪贴板，可以分享给他人了');
  }
};

// 打印文章
const printArticle = () => {
  window.print();
};

onMounted(() => {
  fetchArticle();
});
</script>

<style>
/* 文章内容样式 */
.prose {
  color: #374151;
  max-width: 65ch;
  font-size: 1rem;
  line-height: 1.75;
}

.prose h1, .prose h2, .prose h3, .prose h4 {
  color: #1a202c;
  font-weight: 700;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  line-height: 1.25;
}

.prose h1 {
  font-size: 2.25em;
}

.prose h2 {
  font-size: 1.75em;
}

.prose h3 {
  font-size: 1.5em;
}

.prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

.prose a {
  color: #3182ce;
  text-decoration: underline;
}

.prose strong {
  font-weight: 700;
  color: #1a202c;
}

.prose ul, .prose ol {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-left: 1.625em;
}

.prose li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.prose blockquote {
  font-style: italic;
  color: #4a5568;
  border-left-width: 4px;
  border-left-color: #e2e8f0;
  padding-left: 1em;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

.prose pre {
  background-color: #f7fafc;
  border-radius: 0.375rem;
  padding: 1em;
  overflow-x: auto;
}

.prose code {
  color: #c53030;
  font-weight: 600;
  font-size: 0.875em;
}

.prose pre code {
  color: inherit;
  font-weight: 400;
  font-size: 0.875em;
}

.prose img {
  margin-top: 2em;
  margin-bottom: 2em;
  border-radius: 0.375rem;
  max-width: 100%;
}

.prose hr {
  border-color: #e2e8f0;
  margin-top: 3em;
  margin-bottom: 3em;
}

/* 打印样式 */
@media print {
  .container {
    max-width: 100%;
    padding: 0;
  }
  
  .max-w-4xl {
    max-width: 100%;
  }
  
  .bg-white {
    background-color: #fff !important;
    box-shadow: none !important;
  }
  
  .bg-gradient-to-r,
  .max-w-4xl > div:last-child {
    display: none !important;
  }
}
</style> 
<template>
  <div>
    <!-- 文章顶部装饰 -->
    <div class="w-full h-40 bg-gradient-to-r from-blue-500 to-blue-700"></div>
    
    <div class="container mx-auto px-4 py-8">
      <div class="relative lg:pr-72">
        <!-- 主要内容区 -->
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
            <div class="prose prose-lg max-w-none" ref="articleContent">
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
      
      <!-- 右侧目录导航 -->
      <div v-if="tableOfContents.length > 0" class="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 w-64 z-10">
        <div class="bg-white rounded-lg shadow-lg p-5">
          <h3 class="text-lg font-bold mb-4 text-gray-700">文章目录</h3>
          <ul class="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
            <li v-for="(item, index) in tableOfContents" :key="index">
              <a 
                :href="`#${item.id}`" 
                class="toc-item text-gray-600 hover:text-blue-600 transition-colors block py-1 border-l-2 pl-3"
                :class="[
                  activeHeading === item.id ? 'active-heading border-blue-500 text-blue-600 font-medium bg-blue-50' : 'border-transparent'
                ]"
                @click.prevent="scrollToHeading(item.id, $event)"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import request from '../../utils/request';
import { IArticle } from '../../types';
import { marked } from 'marked';

// 设置marked选项，启用表格和列表支持
marked.setOptions({
  gfm: true, // 启用GitHub风格Markdown，包括表格支持
  breaks: true, // 支持回车换行
});

const route = useRoute();
const articleId = computed(() => route.params.id);
const article = ref<IArticle | null>(null);
const loading = ref(true);
const articleContent = ref<HTMLElement | null>(null);
const tableOfContents = ref<Array<{ id: string; text: string }>>([]);
const activeHeading = ref<string | null>(null);

// 使用marked将markdown转换为HTML
const renderedContent = computed(() => {
  if (!article.value?.content) return '';
  return marked(article.value.content);
});

// 提取H2标题作为目录项
const extractTableOfContents = () => {
  if (!articleContent.value) return;
  
  // 获取所有的h2标题
  const headings = articleContent.value.querySelectorAll('h2');
  const tocItems: Array<{ id: string; text: string }> = [];
  
  headings.forEach((heading, index) => {
    // 如果标题没有id，则创建一个
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }
    
    tocItems.push({
      id: heading.id,
      text: heading.textContent || `标题 ${index + 1}`
    });
  });
  
  tableOfContents.value = tocItems;
};

// 滚动到对应标题位置
const scrollToHeading = (id: string, event: Event) => {
  console.log('点击了目录项:', id);
  
  // 手动处理高亮样式
  // 1. 移除所有目录项的高亮
  document.querySelectorAll('.toc-item').forEach(item => {
    item.classList.remove('active-heading', 'border-blue-500', 'text-blue-600', 'font-medium', 'bg-blue-50');
    item.classList.add('border-transparent');
  });
  
  // 2. 给当前点击的元素添加高亮
  const clickedElement = event.currentTarget as HTMLElement;
  if (clickedElement) {
    clickedElement.classList.add('active-heading', 'border-blue-500', 'text-blue-600', 'font-medium', 'bg-blue-50');
    clickedElement.classList.remove('border-transparent');
  }
  
  // 更新活跃标题变量
  activeHeading.value = id;
  
  // 滚动到对应位置
  nextTick(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
};

// 检测当前活跃的标题
const checkActiveHeading = () => {
  if (tableOfContents.value.length === 0 || !articleContent.value) return;
  
  const headingElements = tableOfContents.value.map(item => document.getElementById(item.id));
  const validHeadings = headingElements.filter(el => el !== null) as HTMLElement[];
  
  if (validHeadings.length === 0) return;
  
  // 获取距离视口顶部最近的标题
  const scrollPosition = window.scrollY + 100; // 添加一些偏移量
  
  for (const heading of validHeadings) {
    const offsetTop = heading.offsetTop;
    if (offsetTop > scrollPosition) {
      continue;
    }
    
    activeHeading.value = heading.id;
    return;
  }
  
  // 如果没有找到，默认选中第一个
  activeHeading.value = validHeadings[0].id;
};

// 获取文章数据
const fetchArticle = async () => {
  try {
    loading.value = true;
    
    if (typeof articleId.value === 'string' || typeof articleId.value === 'number') {
      // 先获取文章基本信息
      const listRes = await request.get(`/articles/${articleId.value}`);
      article.value = listRes.data;
      
      // 如果没有内容，生成包含表格的示例内容
      if (article.value && !article.value.content) {
        article.value.content = generateDummyContent(article.value.title, article.value.description);
      }
    }
  } catch (error) {
    console.error("获取文章失败:", error);
    // 创建测试文章数据，解决类型问题
    const testId = typeof articleId.value === 'string' ? parseInt(articleId.value) || 1 : 1;
    article.value = {
      id: testId,
      title: '测试文章标题',
      description: '这是一篇测试文章，用于展示Markdown表格渲染功能。',
      author: '测试用户',
      tags: ['测试', 'Markdown', '表格'],
      content: generateDummyContent('测试文章标题', '这是一篇测试文章，用于展示Markdown表格渲染功能。'),
      documentId: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString()
    } as unknown as IArticle; // 使用双重类型转换解决类型不匹配问题
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

* 概念一：这是第一个重要概念的详细解释
* 概念二：这是第二个重要概念的详细解释
* 概念三：这是第三个重要概念的详细解释

也可以使用减号作为列表标记：

- 要点一：这是第一个要点
- 要点二：这是第二个要点
- 要点三：这是第三个要点

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

## 功能对比表

下面是一个Markdown表格示例，展示了不同功能的对比：

| 功能 | 基础版 | 专业版 | 企业版 |
| ---- | ------ | ------ | ------ |
| 基础编辑 | ✅ | ✅ | ✅ |
| 多人协作 | ❌ | ✅ | ✅ |
| 版本控制 | ❌ | ✅ | ✅ |
| 高级权限 | ❌ | ❌ | ✅ |
| 技术支持 | 社区 | 邮件 | 24/7专线 |
| 价格 | 免费 | ¥99/月 | 联系销售 |

## 数据比较

以下是一些性能数据的对比：

| 测试项目 | 上一版本 | 当前版本 | 提升比例 |
| ------- | ------- | ------- | ------- |
| 加载时间 | 3.5秒 | 1.2秒 | 65.7% |
| 内存占用 | 120MB | 85MB | 29.2% |
| 并发用户 | 500 | 1200 | 140% |
| 响应时间 | 200ms | 90ms | 55% |

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

// 监听DOM变化，提取目录
watch(() => article.value?.content, () => {
  // 在内容渲染后，使用nextTick确保DOM更新
  setTimeout(() => {
    extractTableOfContents();
  }, 100);
}, { immediate: false });

onMounted(() => {
  fetchArticle();
  
  // 监听滚动事件，以更新活跃标题
  window.addEventListener('scroll', checkActiveHeading, { passive: true });
});

// 组件销毁时移除滚动监听
onUnmounted(() => {
  window.removeEventListener('scroll', checkActiveHeading);
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
  scroll-margin-top: 80px; /* 确保滚动到标题时有足够的上边距 */
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

.prose ul {
  list-style-type: disc;
}

.prose ol {
  list-style-type: decimal;
}

.prose li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.prose li::marker {
  color: #6b7280;
}

.prose li > p {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}

.prose li > ul, .prose li > ol {
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

/* 表格样式 */
.prose table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  font-size: 0.9em;
}

.prose thead {
  background-color: #f1f5f9;
  border-bottom: 2px solid #e2e8f0;
}

.prose th {
  padding: 0.75em 1em;
  text-align: left;
  font-weight: 600;
  color: #1e293b;
}

.prose td {
  padding: 0.75em 1em;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: top;
}

.prose tbody tr:hover {
  background-color: #f8fafc;
}

/* 目录项高亮样式 */
.toc-item.active-heading {
  background-color: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  font-weight: 500;
  border-left-color: #3b82f6;
  border-left-width: 2px;
  transition: all 0.2s ease;
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
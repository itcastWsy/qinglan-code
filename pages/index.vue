<template>
  <div>
    <!-- 首页横幅 -->
    <section id="home" class="relative text-white py-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
             alt="科技背景" 
             class="w-full h-full object-cover brightness-50"/>
      </div>
      <div class="container mx-auto text-center relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">连接技术，点亮未来</h1>
        <p class="text-xl md:text-2xl mb-8 animate-fade-in-delay">青蓝逐码团队 - 技术改善生活</p>
        <div class="flex justify-center space-x-4">
          <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition transform hover:scale-105">
            了解更多
          </button>
          <button class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105">
            加入我们
          </button>
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="section bg-gray-50">
      <div class="container mx-auto">
        <h2 class="heading text-center">关于我们</h2>
        <p class="subheading text-center">我们是谁，我们做什么</p>

        <div class="mt-12 mb-12 grid md:grid-cols-1 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h4 class="text-xl font-bold mb-2"><i class="fas fa-lightbulb text-4xl text-blue-600 mb-4"></i> 组织成立背景</h4>
            <!-- 设置字体大小 -->
            <p class="text-gray-600 text-lg">开发者提升技术和能力的最佳方向，便是 <span class="text-blue-600">学习技术->做上架产品-用户使用和反馈-开发者迭代和优化</span> ，这一过程，青蓝团队采用<span class="text-blue-600">老手带新手</span>的方式，让不同背景的成员都能加入其中，如果你是老手，你可以通过携带新手的方式来开发你的独立应用，青蓝逐码提供全流程支持。如果你是新手，你可以在开发真实应用的过程中打磨和锻炼自己，最后提升自己技术的同时会得到一个<span class="text-blue-600">落地的、真实的作品</span>。  贯穿整个开发过程，<span class="text-blue-700">你还会得到技术博客、开源项目、线上、线下的流量曝光，你还能得到上架应用带来的流量收益！</span> 你还在等什么呢 !  </p>
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition group">
            <div class="flex items-center mb-6">
              <div class="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition">
                <i class="fas fa-lightbulb text-2xl text-blue-600"></i>
              </div>
              <h3 class="text-2xl font-bold">组织愿景</h3>
            </div>
            <p class="text-gray-600 mb-4">通过技术创新和开源协作来推动技术进步，让技术的力量改变生活，让世界变得更美好。</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">技术创新</span>
              <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">开源协作</span>
              <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">改变生活</span>
              <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">美好未来</span>
            </div>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition group">
            <div class="flex items-center mb-6">
              <div class="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition">
                <i class="fas fa-rocket text-2xl text-blue-600"></i>
              </div>
              <h3 class="text-2xl font-bold">组织使命</h3>
            </div>
            <p class="text-gray-600 mb-4">通过开源协作和技术创新，解决实际问题，让科技的力量惠及更多人。</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">开源协作</span>
              <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">技术创新</span>
              <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">解决问题</span>
              <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">普惠科技</span>
            </div>
          </div>
        </div>
        <div class="mt-12 grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <i class="fas fa-code text-4xl text-blue-600 mb-4"></i>
            <h4 class="text-xl font-bold mb-2">技术驱动</h4>
            <p class="text-gray-600">持续探索前沿技术，保持创新动力</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <i class="fas fa-users text-4xl text-blue-600 mb-4"></i>
            <h4 class="text-xl font-bold mb-2">团队协作</h4>
            <p class="text-gray-600">开放共享，共同成长，创造价值</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <i class="fas fa-globe text-4xl text-blue-600 mb-4"></i>
            <h4 class="text-xl font-bold mb-2">社会责任</h4>
            <p class="text-gray-600">用技术回馈社会，推动行业发展</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队特色 -->
    <section id="team" class="section">
      <div class="container mx-auto">
        <h2 class="heading text-center">团队特色</h2>
        <p class="subheading text-center">我们的优势与特点</p>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <i class="fas fa-users text-4xl text-blue-600 mb-4"></i>
            <h3 class="text-xl font-bold mb-2">人员构成</h3>
            <p class="text-gray-600">团队成员年龄跨度20-40岁，执行力强，技术热情高</p>
          </div>
          <div class="text-center">
            <i class="fas fa-cogs text-4xl text-blue-600 mb-4"></i>
            <h3 class="text-xl font-bold mb-2">运作模式</h3>
            <p class="text-gray-600">采用<span class="text-blue-600">老手带新手</span>的培养模式，注重实践指导和经验传承</p>
          </div>
          <div class="text-center">
            <i class="fas fa-chart-line text-4xl text-blue-600 mb-4"></i>
            <h3 class="text-xl font-bold mb-2">发展方向</h3>
            <p class="text-gray-600">打造实用、创新的技术产品，积极参与开源社区</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心成员 -->
    <section id="members" class="section bg-white">
      <div class="container mx-auto">
        <h2 class="heading text-center">核心成员</h2>
        <p class="subheading text-center">我们的技术骨干</p>
        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="member in members" :key="member.name" class="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <div class="flex flex-col items-center">
              <img :src="member.avatar_links" :alt="member.name" class="w-28 h-28 rounded-full mb-3">
              <h3 class="text-lg font-bold mb-2">{{ member.name }}</h3>
              <p class="text-blue-600 mb-2">{{ member.role }}</p>
              <p class="text-gray-600 text-center text-sm">{{ member.description }}</p>
              <div class="flex space-x-4 mt-3">
                <a :href="member.social_links" class="text-gray-400 hover:text-blue-600">
                  <i class="fa fa-home"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 作品展示 -->
    <section id="works" class="section bg-gray-50">
      <div class="container mx-auto">
        <h2 class="heading text-center">我们的作品</h2>
        <p class="subheading text-center">技术创造价值，创新改变未来</p>
        
        <!-- 开源项目 -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold mb-6 flex items-center">
            <i class="fas fa-code-branch text-blue-600 mr-3 icon-3d"></i>
            开源项目
          </h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="product in projects" :key="product.id" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
              <div class="flex items-center mb-4">
                <img :src="product.logo_link" :alt="product.name" class="w-28 h-28 rounded-full mr-3">
                <h4 class="text-xl font-bold">{{ product.name }}</h4> 
              </div>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tag, index) in product.tags" :key="index" class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 上架项目 -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold mb-6 flex items-center">
            <i class="fas fa-store text-blue-600 mr-3 icon-3d"></i>
            上架项目
          </h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="app in applications" :key="app.id" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
              <div class="flex items-center mb-4">
                <img :src="app.logo_link" :alt="app.name" class="w-28 h-28 rounded-full mr-3">
                <h4 class="text-xl font-bold">{{ app.name }}</h4> 
              </div>
              <p class="text-gray-600 mb-4">{{ app.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tag, index) in app.tags" :key="index" class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 技术文章 -->
        <div>
          <h3 class="text-2xl font-bold mb-6 flex items-center justify-between">
            <div class="flex items-center">
              <i class="fas fa-book text-blue-600 mr-3 icon-3d"></i>
              技术文章
            </div>
            <NuxtLink to="/articles" class="text-blue-600 hover:text-blue-800 flex items-center text-base font-medium">
              查看更多
              <i class="fas fa-arrow-right ml-2"></i>
            </NuxtLink>
          </h3>
          <div class="grid md:grid-cols-3 gap-8">
            <NuxtLink v-for="article in articles" :key="article.id" :to="`/articles/${article.documentId}`" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
              <div class="flex items-center mb-4">
                <i :class=" 'fas fa-file-alt'" class="text-2xl text-gray-800 mr-3 icon-3d"></i>
                <h4 class="text-xl font-bold">{{ article.title }}</h4>
              </div>
              <p class="text-gray-600 mb-4">{{ article.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tag, index) in article.tags" :key="index" class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">{{ tag }}</span>
              </div>
              <p class="text-gray-500 text-sm mt-3 italic">作者：{{ article.author }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="section bg-gray-50">
      <div class="container mx-auto">
        <h2 class="heading text-center">联系我们</h2>
        <p class="subheading text-center">期待与您合作</p>
        
        <div class="max-w-2xl mx-auto">
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 class="text-2xl font-bold mb-6 text-center">联系方式</h3>
            <div class="space-y-6">
              <div class="flex items-center">
                <div class="bg-blue-100 p-3 rounded-full mr-4">
                  <i class="fab fa-weixin text-2xl text-blue-600"></i>
                </div>
                <div class="flex-1">
                  <p class="text-gray-600">微信公众号</p>
                  <p class="text-lg font-semibold">青蓝逐码</p>
                </div>
                <div class="ml-4">
                  <img src="https://qinglanhome.oss-rg-china-mainland.aliyuncs.com/home/qinglan-erweima%20(1).jpg?x-oss-credential=LTAI5tPNDZtqtANHBmQFKd3D%2F20250418%2Frg-china-mainland%2Foss%2Faliyun_v4_request&x-oss-date=20250418T000048Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=46c63fdf5034c6b03d4829ecd8eeb3aea13ce02bbd0d9228c5dcf4627ebb8e57" alt="微信公众号二维码" class="w-24 h-24 rounded-lg shadow-sm">
                  <p class="text-xs text-gray-500 text-center mt-1">扫码关注</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="bg-blue-100 p-3 rounded-full mr-4">
                  <i class="fab fa-weixin text-2xl text-blue-600"></i>
                </div>
                <div class="flex-1">
                  <p class="text-gray-600">微信</p>
                  <p class="text-lg font-semibold">w846903522</p>
                </div>
                <div class="ml-4">
                  <img src="https://qinglanhome.oss-rg-china-mainland.aliyuncs.com/home/wanshaoweixin.webp?x-oss-credential=LTAI5tPNDZtqtANHBmQFKd3D%2F20250418%2Frg-china-mainland%2Foss%2Faliyun_v4_request&x-oss-date=20250418T000030Z&x-oss-expires=3600&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=273de8957478d342d086746137c7175ba8b21308f314bb4c1f11c2a622e0ce85" alt="个人微信" class="w-24 h-24 rounded-lg shadow-sm">
                  <p class="text-xs text-gray-500 text-center mt-1">扫码关注</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="bg-blue-100 p-3 rounded-full mr-4">
                  <i class="fas fa-envelope text-2xl text-blue-600"></i>
                </div>
                <div>
                  <p class="text-gray-600">邮箱</p>
                  <p class="text-lg font-semibold">yeah126139163@163.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import request from '../utils/request';
import { IMember, IProject, IApplication, IArticle } from '../types';

const members = ref<IMember[]>([]);
const projects = ref<IProject[]>([]);
const applications = ref<IApplication[]>([]);
const articles = ref<IArticle[]>([]);

const fetchMembers = async () => {
  try {
    const res = await request.get("/members?sort=createdAt");
    members.value = res.data;
  } catch (error) {
    console.error("获取成员失败:", error);
    // 模拟一些默认数据
    members.value = [];
  }
};

const fetchProducts = async () => {
  try {
    const res = await request.get("/projects?sort=createdAt");
    projects.value = res.data;
  } catch (error) {
    console.error("获取项目失败:", error);
    // 模拟一些默认数据
    projects.value = [];
  }
};

const fetchApplications = async () => {
  try {
    const res = await request.get("/applications?sort=createdAt");
    applications.value = res.data;
  } catch (error) {
    console.error("获取应用失败:", error);
    // 模拟一些默认数据
    applications.value = [];
  }
};

const fetchArticles = async () => {
  try {
    const res = await request.get("/articles?sort=createdAt&fields=id,title,description,tags,author,createdAt");
    articles.value = res.data;
  } catch (error) {
    console.error("获取文章失败:", error);
  }
};

onMounted(() => {
  fetchMembers();
  fetchProducts();
  fetchApplications();
  fetchArticles();
});
</script>

<style scoped>
/* 样式保持与主文件一致 */
.container {
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 1200px;
}

.section {
  padding: 4rem 0;
}

.heading {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2d3748;
}

.subheading {
  font-size: 1.25rem;
  color: #718096;
  margin-bottom: 3rem;
}
</style> 
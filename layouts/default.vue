<template>
  <div >
    <header class="bg-white p-2 shadow-sm fixed top-0 left-0 w-full z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <NuxtLink to="/">
              <img src="https://wsy997.obs.cn-east-3.myhuaweicloud.com/pcweb/logo.svg" alt="Logo" class="h-12 w-12 mr-4">
            </NuxtLink>
            <span class="text-2xl font-bold text-gray-800">青蓝逐码</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 nav-link-3d">首页</NuxtLink>
            <NuxtLink to="/#about" class="text-gray-600 hover:text-blue-600 nav-link-3d">关于我们</NuxtLink>
            <NuxtLink to="/#team" class="text-gray-600 hover:text-blue-600 nav-link-3d">团队</NuxtLink>
            <NuxtLink to="/#works" class="text-gray-600 hover:text-blue-600 nav-link-3d">作品</NuxtLink>
            <NuxtLink to="/#contact" class="text-gray-600 hover:text-blue-600 nav-link-3d">联系我们</NuxtLink>
          </div>
          <button class="md:hidden">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>
    </header>
    
    <main>
      <slot />
    </main>
    
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">青蓝逐码团队</h3>
            <p class="text-gray-400">连接技术，点亮未来</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">快速链接</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-400 hover:text-white">首页</NuxtLink></li>
              <li><NuxtLink to="/#about" class="text-gray-400 hover:text-white">关于我们</NuxtLink></li>
              <li><NuxtLink to="/#team" class="text-gray-400 hover:text-white">团队</NuxtLink></li>
              <li><NuxtLink to="/#contact" class="text-gray-400 hover:text-white">联系我们</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">关注我们</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-github text-2xl"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-weixin text-2xl"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-weibo text-2xl"></i></a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 青蓝逐码团队. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
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

.nav-link-3d {
  transition: transform 0.2s, color 0.2s;
}

.nav-link-3d:hover {
  transform: translateY(-2px);
}

.icon-3d {
  transition: transform 0.2s;
}

.icon-3d:hover {
  transform: scale(1.2);
}

.card-3d {
  transition: transform 0.3s, box-shadow 0.3s;
}

.card-3d:hover {
  transform: translateY(-5px);
}

.tag-3d {
  transition: transform 0.2s;
}

.tag-3d:hover {
  transform: translateY(-2px);
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 
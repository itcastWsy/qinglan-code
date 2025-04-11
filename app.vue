<template>
  <div>
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img src="/assets/images/logo.svg" alt="Logo" class="h-12 w-12 mr-4">
            <span class="text-2xl font-bold text-gray-800">青蓝逐码</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-600 hover:text-blue-600 nav-link-3d">首页</a>
            <a href="#about" class="text-gray-600 hover:text-blue-600 nav-link-3d">关于我们</a>
            <a href="#team" class="text-gray-600 hover:text-blue-600 nav-link-3d">团队</a>
            <a href="#works" class="text-gray-600 hover:text-blue-600 nav-link-3d">作品</a>
            <a href="#contact" class="text-gray-600 hover:text-blue-600 nav-link-3d">联系我们</a>
          </div>
          <button class="md:hidden">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>
    </header>

    <main>
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
        <div class="container">
          <h2 class="heading text-center">关于我们</h2>
          <p class="subheading text-center">我们是谁，我们做什么</p>

          <div class="mt-12 mb-12 grid md:grid-cols-1 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md  hover:shadow-lg transition">
              
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
        <div class="container">
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
        <div class="container">
          <h2 class="heading text-center">核心成员</h2>
          <p class="subheading text-center">我们的技术骨干</p>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div class="flex flex-col items-center">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="张明" class="w-32 h-32 rounded-full mb-4">
                <h3 class="text-xl font-bold mb-2">张明</h3>
                <p class="text-blue-600 mb-2">技术总监</p>
                <p class="text-gray-600 text-center">10年全栈开发经验，精通微服务架构，主导多个大型项目开发。</p>
                <div class="flex space-x-4 mt-4">
                  <a href="#" class="text-gray-400 hover:text-blue-600"><i class="fab fa-github"></i></a>
                  <a href="#" class="text-gray-400 hover:text-blue-600"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div class="flex flex-col items-center">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" alt="李华" class="w-32 h-32 rounded-full mb-4">
                <h3 class="text-xl font-bold mb-2">李华</h3>
                <p class="text-blue-600 mb-2">前端架构师</p>
                <p class="text-gray-600 text-center">专注于前端工程化，Vue/React专家，开源社区活跃贡献者。</p>
                <div class="flex space-x-4 mt-4">
                  <a href="#" class="text-gray-400 hover:text-blue-600"><i class="fab fa-github"></i></a>
                  <a href="#" class="text-gray-400 hover:text-blue-600"><i class="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div class="flex flex-col items-center">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" alt="王强" class="w-32 h-32 rounded-full mb-4">
                <h3 class="text-xl font-bold mb-2">王强</h3>
                <p class="text-blue-600 mb-2">后端架构师</p>
                <p class="text-gray-600 text-center">分布式系统专家，擅长高并发架构设计，多个开源项目维护者。</p>
                <div class="flex space-x-4 mt-4">
                  <a href="#" class="text-gray-400 hover:text-blue-600"><i class="fab fa-github"></i></a>
                  <a href="#" class="text-gray-400 hover:text-blue-600"><i class="fab fa-stack-overflow"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 作品展示 -->
      <section id="works" class="section bg-gray-50">
        <div class="container">
          <h2 class="heading text-center">我们的作品</h2>
          <p class="subheading text-center">技术创造价值，创新改变未来</p>
          
          <!-- 开源项目 -->
          <div class="mb-16">
            <h3 class="text-2xl font-bold mb-6 flex items-center">
              <i class="fas fa-code-branch text-blue-600 mr-3 icon-3d"></i>
              开源项目
            </h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fab fa-github text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">Vue3 Admin</h4>
                </div>
                <p class="text-gray-600 mb-4">基于Vue3 + TypeScript的后台管理系统框架，提供完整的权限管理和组件库。</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">Vue3</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">TypeScript</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">开源</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fab fa-github text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">微服务脚手架</h4>
                </div>
                <p class="text-gray-600 mb-4">基于Spring Cloud的微服务开发脚手架，集成常用中间件和最佳实践。</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">Spring Cloud</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">微服务</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">开源</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fab fa-github text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">AI助手SDK</h4>
                </div>
                <p class="text-gray-600 mb-4">集成主流AI模型的开发工具包，简化AI应用开发流程。</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">AI</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">SDK</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">开源</span>
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
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fas fa-mobile-alt text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">智能家居APP</h4>
                </div>
                <p class="text-gray-600 mb-4">跨平台智能家居控制应用，支持多设备联动和场景定制。</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">Flutter</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">IoT</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">已上架</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fas fa-chart-line text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">数据分析平台</h4>
                </div>
                <p class="text-gray-600 mb-4">企业级数据分析平台，支持多维度数据分析和可视化展示。</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">React</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">大数据</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">已上架</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fas fa-graduation-cap text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">在线教育平台</h4>
                </div>
                <p class="text-gray-600 mb-4">一站式在线教育解决方案，支持直播、录播和互动教学。</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">Vue</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">教育</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">已上架</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 技术文章 -->
          <div>
            <h3 class="text-2xl font-bold mb-6 flex items-center">
              <i class="fas fa-book text-blue-600 mr-3 icon-3d"></i>
              技术文章
            </h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fas fa-code text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">微服务架构实践</h4>
                </div>
                <p class="text-gray-600 mb-4">深入探讨微服务架构的设计原则和最佳实践，分享实战经验。</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">架构</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">微服务</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">技术文章</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fas fa-brain text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">AI应用开发指南</h4>
                </div>
                <p class="text-gray-600 mb-4">从零开始构建AI应用，详解模型训练和部署流程。</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">AI</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">机器学习</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">技术文章</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fas fa-shield-alt text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">Web安全攻防</h4>
                </div>
                <p class="text-gray-600 mb-4">Web应用安全防护指南，常见漏洞分析和防御方案。</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">安全</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">Web</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">技术文章</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 联系我们 -->
      <section id="contact" class="section bg-gray-50">
        <div class="container">
          <h2 class="heading text-center">联系我们</h2>
          <p class="subheading text-center">期待与您合作</p>
          <div class="max-w-2xl mx-auto">
            <form class="space-y-6">
              <div>
                <label class="block text-gray-700 mb-2">姓名</label>
                <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-gray-700 mb-2">邮箱</label>
                <input type="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-gray-700 mb-2">留言</label>
                <textarea class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
              </div>
              <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                发送消息
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 text-white py-12">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">青蓝逐码团队</h3>
            <p class="text-gray-400">连接技术，点亮未来</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">快速链接</h3>
            <ul class="space-y-2">
              <li><a href="#home" class="text-gray-400 hover:text-white">首页</a></li>
              <li><a href="#about" class="text-gray-400 hover:text-white">关于我们</a></li>
              <li><a href="#team" class="text-gray-400 hover:text-white">团队</a></li>
              <li><a href="#contact" class="text-gray-400 hover:text-white">联系我们</a></li>
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

<script setup>
// 这里可以添加组件逻辑
</script>

<style scoped>
/* 这里可以添加组件特定的样式 */
</style> 
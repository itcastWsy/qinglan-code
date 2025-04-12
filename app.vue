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
          <div class="grid md:grid-cols-4 gap-6">
            <div class="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div class="flex flex-col items-center">
                <img src="/assets/images/zero.jpg" alt="zero" class="w-28 h-28 rounded-full mb-3">
                <h3 class="text-lg font-bold mb-2">zero</h3>
                <p class="text-blue-600 mb-2">核心成员</p>
                <p class="text-gray-600 text-center text-sm">拥有 10 年 + 后端开发及 3 年 + 大型架构设计经验，深度参与分布式系统、云原生等架构演进。主导设计多个百万级并发、跨可用区容灾系统，擅长 C#、Go、Rust 技术选型，精通 K8s、Istio 及混合云部署。强调 "架构即平衡"，带队构建日均过亿请求 API 网关，创新设计事件驱动架构与边缘 - 云端协同调度。秉持 "简洁设计解决本质问题" 的技术理念。</p>
              </div>
            </div>
            <div class="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div class="flex flex-col items-center">
                <img src="/assets/images/wanshao.jpg" alt="万少" class="w-28 h-28 rounded-full mb-3">
                <h3 class="text-lg font-bold mb-2">万少</h3>
                <p class="text-blue-600 mb-2">核心成员</p>
                <p class="text-gray-600 text-center text-sm">华为HDE 华为云 HCDE 华为鸿蒙社区问答专家、阿里云专家博主、掘金优秀作者、HarmonyOS学习资源创作先锋、HarmonyOS开发者达人、CSDN&HarmonyOS技术沙龙演讲嘉宾、10年互联网从业经验、资深全栈工程师、前端开源生态贡献者。具有丰富vue、react、小程序、鸿蒙原生应用开发经验。</p>
                <div class="flex space-x-4 mt-3">
                  <a href="https://itcastwsy.github.io/pub-blog/" class="text-gray-400 hover:text-blue-600"><i class="fab fa-github"></i></a>
                  <a href="https://juejin.cn/user/4441682708283191" class="text-gray-400 hover:text-blue-600"><img src="/assets/images/juejin.svg" alt="掘金" class="w-5 h-5"></a>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div class="flex flex-col items-center">
                <img src="/assets/images/junmoxiao.jpg" alt="云杰" class="w-28 h-28 rounded-full mb-3">
                <h3 class="text-lg font-bold mb-2">君莫笑</h3>
                <p class="text-blue-600 mb-2">核心成员</p>
                <p class="text-gray-600 text-center text-sm">00后程序员
掉落山洞发现上古程序员残魂："本帝被需求压榨千年，传你《摆烂心经》三式——假装掉线、接口报错、重启治百病"
咖啡因转换器（输入需求=输出HarmonyOS应用+三根白发）
掌握"把BUG写成彩蛋"的祖传秘方</p>
                <div class="flex space-x-4 mt-3">
                  <a href="https://juejin.cn/user/3103248627033531/posts" class="text-gray-400 hover:text-blue-600"><img src="/assets/images/juejin.svg" alt="掘金" class="w-5 h-5"></a>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div class="flex flex-col items-center">
                <img src="/assets/images/wj.jpg" alt="云杰" class="w-28 h-28 rounded-full mb-3">
                <h3 class="text-lg font-bold mb-2">云杰</h3>
                <p class="text-blue-600 mb-2">核心成员</p>
                <p class="text-gray-600 text-center text-sm">鸿蒙应用开发工程师，华为鸿蒙开发高级认证，参与多种鸿蒙作品的开发，独立上架过多款鸿蒙app和元服务。如果鸿蒙生态是一片星空，那我就是那颗努力闪烁的小恒星（虽然还不够亮，但正在发光发热中）。
个人宣言 
代码千行，初心不改，用技术点亮智慧生活。</p>
                <div class="flex space-x-4 mt-3">
                  <a href="https://juejin.cn/user/3877341924964713" class="text-gray-400 hover:text-blue-600"><img src="/assets/images/juejin.svg" alt="掘金" class="w-5 h-5"></a>
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
                  <img src="/assets/images/zrbz.png" alt="自然壁纸" class="w-28 h-28 rounded-full mr-3">
                  <h4 class="text-xl font-bold">自然壁纸</h4> 
                </div>
                <p class="text-gray-600 mb-4">基于ArkTs、ArkUI开发的极简的壁纸应用</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">ArkTs</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">ArkUI</span>
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
                  <img src="/assets/images/zrbz.png" alt="自然壁纸" class="w-28 h-28 rounded-full mr-3">
                  <h4 class="text-xl font-bold">自然壁纸</h4> 
                </div>
                <p class="text-gray-600 mb-4">自然壁纸，随时随地为设备换上心仪的自然美景</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">元服务</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">壁纸</span>
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
              <a target="_blank" href="https://juejin.cn/post/7441761663701041161" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fas fa-shield-alt text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">元服务新建到上架全流程</h4>
                </div>
                <p class="text-gray-600 mb-4">介绍了HarmonyOS Next元服务从新建到上架的全流程，包括在AGC平台新建项目与应用、修改元服务名称和图标，阐述签名文件相关知识并说明生成密钥和证书请求文件、申请发布证书和Profile文件的步骤，还提及手动签名、打包构建、新建发布、编辑资料，强调备案域名和元服务的流程及审核要点</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">元服务</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">上架</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">签名</span>
                </div>
                <p class="text-gray-500 text-sm mt-3 italic">作者：万少</p>
              </a>
              <a target="_blank" href="https://juejin.cn/post/7447709833908273192" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fas fa-brain text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">HarmonyOS中那些不为人知的坑点</h4>
                </div>
                <p class="text-gray-600 mb-4">主要介绍了HarmonyOS Next性能优化方面的坑点及解决办法，包括大量数据懒加载时嵌套滑动组件需给子组件指定宽高，合理使用@State进行状态管理，合理使用布局容器（减少嵌套、移除冗余节点、使用扁平化布局），以及用if - else条件渲染代替visibility显隐控制、尽量给出组件宽高和占位图等小操作</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">性能</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">懒加载</span>
                </div>
                <p class="text-gray-500 text-sm mt-3 italic">作者：君莫笑</p>

              </a>
              <a target="_blank" href="https://juejin.cn/post/7486146087792050213" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition card-3d">
                <div class="flex items-center mb-4">
                  <i class="fas fa-code text-2xl text-gray-800 mr-3 icon-3d"></i>
                  <h4 class="text-xl font-bold">当手势遇见鸿蒙，交互体验竟能如此惊艳
                  </h4>
                </div>
                <p class="text-gray-600 mb-4">围绕鸿蒙系统的手势识别技术展开，介绍了捏合、旋转、滑动等单一手势的参数、事件及示例，还阐述顺序、并行、互斥三种组合手势的特点与示例</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">鸿蒙</span>
                  <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm tag-3d">手势</span>
                </div>
                <p class="text-gray-500 text-sm mt-3 italic">作者：云杰</p>
              </a>
       
          
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
                    <img src="/assets/images/logo.svg" alt="微信公众号二维码" class="w-24 h-24 rounded-lg shadow-sm">
                    <p class="text-xs text-gray-500 text-center mt-1">扫码关注</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="bg-blue-100 p-3 rounded-full mr-4">
                    <i class="fab fa-weixin text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <p class="text-gray-600">微信</p>
                    <p class="text-lg font-semibold">w846903522</p>
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
                <!-- <div class="flex items-center">
                  <div class="bg-blue-100 p-3 rounded-full mr-4">
                    <i class="fas fa-phone text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <p class="text-gray-600">手机</p>
                    <p class="text-lg font-semibold">15915943091</p>
                  </div>
                </div> -->
              </div>
            </div>
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
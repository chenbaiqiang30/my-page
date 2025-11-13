[智能体开发与提示词工程.html](https://github.com/user-attachments/files/23441463/default.html)
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI课程战略洞察：从入门到架构</title>
    <!-- 引入Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- 引入Lucide图标库 -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
    
    <!-- 引入Inter字体 -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <style>
        html {
            scroll-behavior: smooth;
        }
        body {
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
            /* [V5 设计] 坚实的深色背景 */
            background-color: #111827; /* gray-900 */
            color: #cbd5e1; /* slate-300 */
            background-image: radial-gradient(circle at top, rgba(31, 41, 55, 0.8), #111827 70%);
        }

        /* [V5 设计] 渐变文字点睛 */
        .gradient-text {
            background: linear-gradient(90deg, #22d3ee, #a855f7); /* cyan to purple */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            font-weight: 600; /* semibold */
        }
        
        /* [V5 设计] “流光边框”卡片 */
        .gradient-border-card {
            position: relative;
            padding: 1px; /* 边框的宽度 */
            border-radius: 1rem; /* 16px */
            background: linear-gradient(120deg, #a855f7, #22d3ee, #a855f7);
            background-size: 200% 200%;
            animation: shimmer 5s ease-in-out infinite;
            transition: all 0.3s ease;
        }

        /* 卡片悬浮效果 */
        .gradient-border-card:hover {
            transform: scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        /* 卡片内部容器，用于遮罩边框 */
        .card-inner {
            background-color: #1f2937; /* gray-800 */
            border-radius: 1rem; /* 必须与外部容器一致 */
            padding: 2rem; /* p-8 */
            height: 100%;
            width: 100%;
        }
        
        /* 边框流光动画 */
        @keyframes shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* [V5 设计] “手风琴”折叠交互 */
        details > summary {
            list-style: none; /* 移除默认箭头 */
            cursor: pointer;
            padding: 1rem 0;
            transition: color 0.2s ease;
        }
        details > summary::-webkit-details-marker {
            display: none; /* 移除默认箭头 */
        }
        details > summary:hover {
            color: #fff;
        }

        /* 手风琴展开/关闭的图标动画 */
        .accordion-icon {
            transition: transform 0.3s ease;
        }
        details[open] .accordion-icon {
            transform: rotate(90deg);
        }

        /* 手风琴展开的内容区域 */
        .accordion-content {
            padding-top: 1rem;
            border-top: 1px solid #374151; /* gray-700 */
        }
        
        /* 导航栏激活状态 */
        .nav-item {
            position: relative;
            transition: color 0.3s ease;
        }
        .nav-item.active {
            color: #f0f9ff; /* slate-50 */
        }
        .nav-item.active::after {
            content: '';
            position: absolute;
            bottom: -1px; /* 紧贴边框 */
            left: 0;
            right: 0;
            height: 2px;
            background-color: #0ea5e9; /* sky-500 */
            border-radius: 2px;
        }
        .horizontal-scroll {
             -ms-overflow-style: none; scrollbar-width: none;
        }
        .horizontal-scroll::-webkit-scrollbar {
            display: none;
        }

        /* [V7] 思维导图样式 */
        .mind-map {
            padding-left: 1rem;
        }
        .mind-map ul {
            padding-left: 2rem;
            position: relative;
        }
        /* 绘制连接线 */
        .mind-map li {
            list-style: none;
            position: relative;
            padding: 0.25rem 0 0.25rem 1.5rem; /* 留出节点空间 */
        }
        /* 竖线 */
        .mind-map ul::before {
            content: '';
            position: absolute;
            left: 0.5rem;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: #374151; /* gray-700 */
        }
        /* 横线（连接到节点） */
        .mind-map li::before {
            content: '';
            position: absolute;
            left: -1rem; /* 从竖线开始 */
            top: 1rem; /* 对齐文本中间 */
            width: 1.5rem; /* 线长 */
            height: 2px;
            background-color: #374151; /* gray-700 */
        }
        /* 节点圆圈 */
        .mind-map li::after {
            content: '';
            position: absolute;
            left: -1.75rem; /* 圆圈位置 */
            top: 0.875rem; /* 对齐文本中间 */
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #1f2937; /* gray-800 */
            border: 2px solid #22d3ee; /* cyan-400 */
        }
        /* 根节点 */
        .mind-map > li {
            font-size: 1.125rem; /* text-lg */
            font-weight: 600;
            color: #e5e7eb; /* [V8] slate-200 */
        }
        .mind-map > li::after {
            background-color: #a855f7; /* purple-500 */
            border-color: #a855f7;
        }
        .mind-map > li::before {
            border: none; /* 根节点不需要横线 */
        }

        /* [V7] 生态工具卡片 */
        .tool-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #1f2937; /* gray-800 */
            padding: 1rem 1.5rem;
            border-radius: 0.75rem; /* rounded-xl */
            border: 1px solid #374151; /* gray-700 */
            transition: all 0.3s ease;
        }
        .tool-card:hover {
            border-color: #22d3ee; /* cyan-400 */
            background-color: #374151; /* gray-700 */
            transform: translateY(-4px);
        }
        .tool-card .icon {
            transition: transform 0.3s ease;
        }
        .tool-card:hover .icon {
            transform: translateX(5px) translateY(-5px);
        }
    </style>
</head>
<body class="antialiased">

    <!-- 1. 顶部标题栏 -->
    <header class="w-full max-w-7xl mx-auto px-4 md:px-6 pt-20 pb-16 text-center">
        <h1 class="text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tighter">
            智能体开发与提示词工程
        </h1>
        <p class="text-xl lg:text-2xl text-slate-300 mb-8">
            从<span class="gradient-text">「咒语」</span>到<span class="gradient-text">「架构」</span>的系统性重构
        </p>
        <div class="flex flex-wrap gap-x-6 gap-y-3 justify-center text-slate-400">
            <div class="flex items-center space-x-2">
                <i data-lucide="layers-3" class="w-4 h-4 text-sky-400"></i>
                <span>8节系列课</span>
            </div>
            <div class="flex items-center space-x-2">
                <i data-lucide="clock-3" class="w-4 h-4 text-sky-400"></i>
                <span>2.5小时深度研讨</span>
            </div>
            <div class="flex items-center space-x-2">
                <i data-lucide="mic-vocal" class="w-4 h-4 text-sky-400"></i>
                <span>主讲：吕老师</span>
            </div>
        </div>
    </header>

    <!-- 08: 粘性导航栏 (V7 更新) -->
    <nav class="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-t border-gray-700">
        <div class="max-w-5xl mx-auto px-4 sm:px-6">
            <div class="flex justify-center md:justify-center space-x-6 overflow-x-auto horizontal-scroll">
                <a href="#insights" class="nav-item flex-shrink-0 px-3 py-4 text-sm font-medium text-slate-400 active">核心洞察</a>
                <a href="#golden-quotes" class="nav-item flex-shrink-0 px-3 py-4 text-sm font-medium text-slate-400 hover:text-white">课程金句</a>
                <a href="#key-points" class="nav-item flex-shrink-0 px-3 py-4 text-sm font-medium text-slate-400 hover:text-white">关键点</a>
                <a href="#architecture-deepdive" class="nav-item flex-shrink-0 px-3 py-4 text-sm font-medium text-slate-400 hover:text-white">架构三段论</a>
                <a href="#shifts" class="nav-item flex-shrink-0 px-3 py-4 text-sm font-medium text-slate-400 hover:text-white">范式转变</a>
                <a href="#mind-map" class="nav-item flex-shrink-0 px-3 py-4 text-sm font-medium text-slate-400 hover:text-white">思维导图</a>
                <a href="#tools" class="nav-item flex-shrink-0 px-3 py-4 text-sm font-medium text-slate-400 hover:text-white">生态工具</a>
            </div>
        </div>
    </nav>

    <!-- 3. 页面内容容器 -->
    <main class="max-w-4xl mx-auto px-4 md:px-6 py-16 space-y-20"> <!-- 增大模块间距 -->
        
        <!-- [V6 结构] 核心洞察 (KPIs) -->
        <section id="insights">
            <!-- [V8] H2 标题改为渐变色 -->
            <h2 class="text-3xl font-bold text-center mb-4 tracking-tight gradient-text">核心洞察：四大关键指标</h2>
            <p class="text-lg text-slate-400 text-center mb-12">从课程中量化的四大成果指标 (KPIs)</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <!-- 15 -> 90+分 -->
                <div class="gradient-border-card">
                    <div class="card-inner text-center">
                        <p class="text-5xl font-extrabold text-white mb-3">15<span class="text-sky-400">→</span>90+<span class="text-sky-400 text-5xl">分</span></p>
                        <p class="text-base font-medium text-slate-200 mb-2">提示词质量的<span class="gradient-text">量化飞跃</span></p>
                        <p class="text-sm text-slate-400">从“能用就行”，进化到“结构严谨、可交付”的90分专业提示词。</p>
                    </div>
                </div>
                <!-- 12+ 框架 -->
                <div class="gradient-border-card">
                    <div class="card-inner text-center">
                        <p class="text-5xl font-extrabold text-white mb-3">12+<span class="text-fuchsia-400 text-5xl">个</span></p>
                        <p class="text-base font-medium text-slate-200 mb-2"><span class="gradient-text">专业提示词框架</span></p>
                        <p class="text-sm text-slate-400">超越“零样本”，掌握APE、TAG等12种高级框架，实现稳定输出。</p>
                    </div>
                </div>
                <!-- 100+ 测试 -->
                <div class="gradient-border-card">
                    <div class="card-inner text-center">
                        <p class="text-5xl font-extrabold text-white mb-3">100+<span class="text-sky-400 text-5xl">次</span></p>
                        <p class="text-base font-medium text-slate-200 mb-2">工程化的<span class="gradient-text">批量评估</span></p>
                        <p class="text-sm text-slate-400">抛弃“主观感觉”，转向使用“火山方舟”等平台进行批量测试，拿数据说话。</p>
                    </div>
                </div>
                <!-- 1 -> 1000 人 -->
                <div class="gradient-border-card">
                    <div class="card-inner text-center">
                        <p class="text-5xl font-extrabold text-white mb-3">1<span class="text-fuchsia-400">→</span>1K+<span class="text-fuchsia-400 text-5xl">人</span></p>
                        <p class="text-base font-medium text-slate-200 mb-2">从“玩具”到<span class="gradient-text">“企业服务”</span></p>
                        <p class="text-sm text-slate-400">将智能体从个人测试，转变为可发布至千人公司（如飞书）的稳定企业级应用。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- [V7 新增] 课程金句 -->
        <section id="golden-quotes">
            <!-- [V8] H2 标题改为渐变色 -->
            <h2 class="text-3xl font-bold text-center mb-4 tracking-tight gradient-text">课程金句：战术与哲思</h2>
            <p class="text-lg text-slate-400 text-center mb-12">从2.5小时研讨中提炼的即时洞察</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <!-- 金句 1 -->
                <div class="gradient-border-card h-full">
                    <div class="card-inner flex flex-col">
                        <i data-lucide="rocket" class="w-10 h-10 text-amber-400 mb-4"></i>
                        <blockquote class="text-xl italic text-slate-200 mb-4 flex-grow">"出来混最重要的就是出来，就是先行动。"</blockquote>
                        <p class="text-base text-slate-300"><strong class="text-slate-200">大师洞察：</strong> 克服完美主义。一个60分的“已发布”作品，远胜于一个90分的“本地草稿”。</p>
                    </div>
                </div>
                <!-- 金句 2 -->
                <div class="gradient-border-card h-full">
                    <div class="card-inner flex flex-col">
                        <i data-lucide="crosshair" class="w-10 h-10 text-amber-400 mb-4"></i>
                        <blockquote class="text-xl italic text-slate-200 mb-4 flex-grow">"咱们第一句话写提示词，就叫‘PUA它’... 告诉他很强大。"</blockquote>
                        <p class="text-base text-slate-300"><strong class="text-slate-200">大师洞察：</strong> 角色设定的重要性。通过“角色扮演”（如“你是专家”），可以有效激发模型在特定领域的“能力峰值”。</p>
                    </div>
                </div>
                <!-- 金句 3 -->
                <div class="gradient-border-card h-full">
                    <div class="card-inner flex flex-col">
                        <i data-lucide="magic-wand" class="w-10 h-10 text-amber-400 mb-4"></i>
                        <blockquote class="text-xl italic text-slate-200 mb-4 flex-grow">"告诉他一个奇怪的咒语：‘深呼吸，step by step’。"</blockquote>
                        <p class="text-base text-slate-300"><strong class="text-slate-200">大师洞察：</strong> “玄学”的背后是“逻辑”。“一步步来”的指令（思维链CoT）能强制模型输出推理过程，极大提高准确性。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- [V6 结构] 关键点 (手风琴交互) -->
        <section id="key-points">
            <!-- [V8] H2 标题改为渐变色 -->
            <h2 class="text-3xl font-bold text-center mb-4 tracking-tight gradient-text">吕老师的关键点</h2>
            <p class="text-lg text-slate-400 text-center mb-12">课程中所有核心技术与战术的深度提炼</p>
            
            <div class="gradient-border-card">
                <div class="card-inner divide-y divide-gray-700">
                    <!-- 关键点 1: AI Swarm -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="users" class="w-8 h-8 text-green-400 flex-shrink-0"></i>
                                <span>AI Swarm：从“个体”到“蜂群”</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-2">
                            <p><span class="gradient-text">源自:</span> “@不同的人”</p>
                            <p><span class="gradient-text">洞察：</span> 未来的工作流是“AI蜂群”。课程演示了在飞书群中`@`多个不同AI—— **A搜集信息、B打草稿、C填充内容**。这标志着工作模式从“人 vs AI”转变为“人指挥 AI群组”，人类成为“指挥官”或“总编排者”。</p>
                        </div>
                    </details>
                    <!-- 关键点 2: AI 角色化 -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="theater" class="w-8 h-8 text-green-400 flex-shrink-0"></i>
                                <span>AI 角色化：从“工具”到“伙伴”</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-2">
                            <p><span class="gradient-text">源自:</span> “BTI事务所16人格”</p>
                            <p><span class="gradient-text">洞察：</span> 智能体的价值不仅在于“效率”，更在于“情感”。通过赋予AI特定的人格（如“INTJ老哥”），用户可以获得定制化的情感支持和交流风格。这表明AI正从“工具”进化为“伙伴”。</p>
                        </div>
                    </details>
                    <!-- 关键点 3: CoT & ToT -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="git-fork" class="w-8 h-8 text-green-400 flex-shrink-0"></i>
                                <span>思维链 (CoT) 与 思维数 (ToT)</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-2">
                            <p><span class="gradient-text">源自:</span> “深呼吸, step by step”</p>
                            <p><span class="gradient-text">洞察 (CoT)：</span> “玄学”的背后是“逻辑”。AI在处理复杂数学题时易错，而“一步步来”的指令（思维链CoT）能强制模型输出推理过程，极大提高复杂计算和逻辑题的准确性。</p>
                            <p><span class="gradient-text">洞察 (ToT)：</span> 与“思维链”（一条路走黑）不同，“思维数 (ToT)”允许AI在每一步都进行“自我反省”和“剪枝”（如24点游戏），模拟人类的“排除法”，使其在逻辑和规划上的能力呈指数级增长。</p>
                        </div>
                    </details>
                    <!-- 关键点 4: 零样本 vs 少样本 -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="file-check" class="w-8 h-8 text-green-400 flex-shrink-0"></i>
                                <span>零样本 (Zero-shot) vs 少样本 (Few-shot)</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-2">
                            <p><span class="gradient-text">源自:</span> “零样本与小样本”</p>
                            <p><span class="gradient-text">洞察：</span> “给示例”并不总是好事。**零样本**（不给示例）适用于简单任务；**少样本**（给1-2个示例）适用于复杂、冷门的领域（如“航空航天”）。但课程警告：错误的示例反而会“误导”模型，不如不给。</p>
                        </div>
                    </details>
                    <!-- 关键点 5: Text-to-SQL -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="database" class="w-8 h-8 text-green-400 flex-shrink-0"></i>
                                <span>Text-to-SQL：自然语言即是API</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-2">
                             <p><span class="gradient-text">源自:</span> “text to circle (SQL)”</p>
                             <p><span class="gradient-text">洞察：</span> AI正在成为“终极翻译器”。`Text-to-SQL`技术意味着非技术人员（如老板）未来可以通过“嘴巴”（自然语言）直接查询数据库，而无需学习SQL。这彻底打破了数据与决策之间的高墙。</p>
                        </div>
                    </details>
                    <!-- 关键点 6: 模型内化 -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="box-select" class="w-8 h-8 text-green-400 flex-shrink-0"></i>
                                <span>模型能力的内化：DeepSeek的启示</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-2">
                            <p><span class="gradient-text">源自:</span> “DeepSeek它已经支持了”</p>
                            <p><span class="gradient-text">洞察：</span> “提示词工程”正在被模型“内化”。课程指出，过去需要复杂提示词（如“代码改写”）才能实现的功能，现在正被<span class="gradient-text">DeepSeek</span>等垂类模型直接内置。“咒语”的价值正在被快速稀释。</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>

        <!-- [V6 结构] 核心分析：AI架构三段论 -->
        <section id="architecture-deepdive">
            <!-- [V8] H2 标题改为渐变色 -->
            <h2 class="text-3xl font-bold text-center mb-4 tracking-tight gradient-text">AI应用架构三段论</h2>
            <p class="text-lg text-slate-400 text-center mb-12">一个可落地的智能体架构模型 (源自课程分析)</p>
            
            <div class="gradient-border-card">
                <div class="card-inner divide-y divide-gray-700">
                    <!-- 1. 输入编排 -->
                    <details open> <!-- 默认打开第一个 -->
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="git-branch-plus" class="w-8 h-8 text-sky-400 flex-shrink-0"></i>
                                <span>1. 输入编排 (Input Orchestration)</span>
                            </div>
                            <i data-lucide="chevron-down" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-4">
                            <p>这是智能体的“调度中心”。其价值是<span class="gradient-text">“成本与效率的平衡”</span>。</p>
                            <ul class="list-disc list-inside space-y-2">
                                <li><strong class="text-slate-200">提示词路由 (Routing)：</strong> 课程提到，“同一套提示词在不同的模型上面效果不一样”。路由层即智能分发：将“写代码”请求交给<span class="gradient-text">DeepSeek</span>，“写诗”交给<span class="gradient-text">Claude</span>。这是用“架构”实现“降本增效”的第一步。</li>
                                <li><strong class="text-slate-200">提示词缓存 (Caching)：</strong> 课程提到，“消耗我的token都没钱了”。缓存层即“节流阀”：对“你好”等高频、低价值的提问，直接返回缓存结果，节省99%的Token消耗。</li>
                            </ul>
                        </div>
                    </details>
                    <!-- 2. 核心引擎 -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="server-cog" class="w-8 h-8 text-sky-400 flex-shrink-0"></i>
                                <span>2. 核心引擎 (Core Engine)</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-4">
                            <p>这是智能体的“大脑中枢”。其价值是<span class="gradient-text">“封装私有上下文”</span>。</p>
                            <ul class="list-disc list-inside space-y-2">
                                <li><strong class="text-slate-200">模型 + RAG：</strong> 大模型提供“通用智力”，RAG（知识库）提供“私有知识”（如课程助手）。二者结合，才构成一个“专家”。</li>
                                <li><strong class="text-slate-200">压缩记忆 (Memory)：</strong> 课程点出，AI会“丢失上下文”。“压缩记忆”是解决“Token超限”的唯一解。它不是“聊天记录”，而是将100轮对话“压缩”成“用户画像+核心诉求”的摘要，实现“无限上下文”。</li>
                            </ul>
                        </div>
                    </details>
                    <!-- 3. 输出治理 -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="shield-check" class="w-8 h-8 text-sky-400 flex-shrink-0"></i>
                                <span>3. 输出治理 (Output Governance)</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-4">
                            <p>这是智能体的“质检部门”。其价值是<span class="gradient-text">“规则与逻辑的分离”</span>。</p>
                            <ul class="list-disc list-inside space-y-2">
                                <li><strong class="text-slate-200">提示词即规范 (PaaP)：</strong> 课程展示了在`AI Coding`工具中，与其每次都说“不要用Java”，不如将“开发规范”写入`requirement.md`文件并`@`它。**这使“规范”从“口头约束”变为可被团队复用的“策略资产”**。</li>
                                <li><strong class="text-slate-200">批量评估 (Eval)：</strong> 自动化“质检流水线”。课程演示了如何使用“火山方舟”等平台，从“主观感觉”走向“定量评估”，确保对SOP的优化不会“意外破坏”其他功能（即“回归测试”）。</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>
        </section>

        <!-- [V6 结构] 范式转变 -->
        <section id="shifts">
            <!-- [V8] H2 标题改为渐变色 -->
            <h2 class="text-3xl font-bold text-center mb-4 tracking-tight gradient-text">四大范式转变</h2>
            <p class="text-lg text-slate-400 text-center mb-12">课程揭示的AI对个人与企业的根本性重塑</p>
            
            <div class="gradient-border-card">
                <div class="card-inner divide-y divide-gray-700">
                    <!-- 1. 从‘咒语’到‘艺术’ (哲学) -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="palette" class="w-8 h-8 text-fuchsia-400 flex-shrink-0"></i>
                                <span>从「咒语」到「艺术」 (哲思)</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-2">
                            <p class="text-sm text-slate-400">提示词是技术、是写作、是哲学</p>
                            <p><span class="gradient-text">洞察：</span> 课程引用李继刚老师的观点，将提示词升华到“艺术”层面，它是一种“约束的表达”。并引用“乔哈里视窗”指出：提示词的本质，就是**把你“知道”而AI“不知道”的（盲区）**，用AI能懂的语言“展开说”。</p>
                        </div>
                    </details>
                    <!-- 2. 从‘直觉’到‘工程’ (流程) -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="ruler" class="w-8 h-8 text-fuchsia-400 flex-shrink-0"></i>
                                <span>从「直觉」到「工程」 (流程)</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-2">
                            <p class="text-sm text-slate-400">提示词不再是“玄学”，而是“科学”</p>
                            <p><span class="gradient-text">洞察：</span> 课程强调，服务“万人公司”的应用，不能靠“主观感觉”。**批量测试的意义在于“可复现性”和“回归测试”。** 工程化思维就是：用100个标准问题（测试集）去跑新旧两个提示词，并用AI（如火山方舟）进行“定量评估”（1-5分）。</p>
                        </div>
                    </details>
                    <!-- 3. 从‘提示词’到‘上下文’ (技术) -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="network" class="w-8 h-8 text-fuchsia-400 flex-shrink-0"></i>
                                <span>从「提示词」到「上下文」 (技术)</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-2">
                            <p class="text-sm text-slate-400">智能体不是孤岛，而是超级连接器</p>
                            <p><span class="gradient-text">洞察：</span> 课程点明，行业正从“提示词工程”演变为“上下文工程”。智能体的真正价值在于连接：连接“Coze”到“飞书”、连接知识库（RAG）、连接“多维表格”、连接“高德地图”插件。</p>
                        </div>
                    </details>
                    <!-- 4. 从‘执行者’到‘架构师’ (职业) -->
                    <details>
                        <summary class="flex justify-between items-center text-xl font-bold text-slate-200">
                            <div class="flex items-center space-x-4">
                                <i data-lucide="user-check" class="w-8 h-8 text-fuchsia-400 flex-shrink-0"></i>
                                <span>从「执行者」到「架构师」 (职业)</span>
                            </div>
                            <i data-lucide="chevron-right" class="w-6 h-6 text-slate-500 accordion-icon"></i>
                        </summary>
                        <div class="accordion-content text-base text-slate-300 leading-relaxed space-y-2">
                            <p class="text-sm text-slate-400">AI消解“技术壁垒”，凸显“架构价值”</p>
                            <p><span class="gradient-text">洞察：</span> 当`DeepSeek`已能“内化”复杂提示词时，“熟练”的价值被稀释。人的核心价值转向上游的“AI架构师”——即“发现问题”和“定义规范”。在AI Coding中插入“开发规范”提示词，其价值远超写100行代码。</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>

        <!-- [V7 新增] 战略思维导图 -->
        <section id="mind-map">
            <!-- [V8] H2 标题改为渐变色 -->
            <h2 class="text-3xl font-bold text-center mb-4 tracking-tight gradient-text">战略思维导图</h2>
            <p class="text-lg text-slate-400 text-center mb-12">一图看懂“从咒语到架构”的完整路径</p>
            <div class="gradient-border-card">
                <div class="card-inner">
                    <ul class="mind-map text-base text-slate-300 leading-relaxed">
                        <li>智能体开发与提示词工程
                            <ul>
                                <li><span class="gradient-text">入门：Coze 智能体创建</span>
                                    <ul>
                                        <li>5分钟搞定作业 (自动优化)</li>
                                        <li>发布到 <span class="text-slate-200 font-medium">飞书</span> (企业应用)</li>
                                        <li>飞书群聊 `@` 机器人 (AI Swarm)</li>
                                        <li>插件连接 (高德地图, 知识库)</li>
                                    </ul>
                                </li>
                                <li><span class="gradient-text">核心：提示词工程 (Prompt)</span>
                                    <ul>
                                        <li><span class="text-slate-200 font-medium">定义：</span> 引导模型的“咒语” / 填补“乔哈里视窗”的盲区</li>
                                        <li><span class="text-slate-200 font-medium">战术：</span> 角色化 ("PUA它") / 零样本 vs 少样本 / CoT ("深呼吸") / ToT ("剪枝")</li>
                                        <li><span class="text-slate-200 font-medium">框架：</span> 掌握 <span class="text-slate-200 font-medium">12+</span> 提示词框架 (APE, TAG...)</li>
                                        <li><span class="text-slate-200 font-medium">评估：</span> 从 <span class="text-slate-200 font-medium">15分</span> 到 <span class="text-slate-200 font-medium">90+分</span> / 告别“直觉”，拥抱“定量”</li>
                                    </ul>
                                </li>
                                <li><span class="gradient-text">进阶：AI 应用架构 (Architecture)</span>
                                    <ul>
                                        <li><span class="text-slate-200 font-medium">输入编排：</span> <span class="gradient-text">提示词路由</span> (降本) / <span class="gradient-text">提示词缓存</span> (增效)</li>
                                        <li><span class="text-slate-200 font-medium">核心引擎：</span> RAG (私有知识) / <span class="gradient-text">压缩记忆</span> (无限上下文)</li>
                                        <li><span class="text-slate-200 font-medium">输出治理：</span> <span class="gradient-text">PaaP</span> (提示词即规范) / <span class="gradient-text">批量评估</span> (回归测试)</li>
                                    </ul>
                                </li>
                                <li><span class="gradient-text">升华：范式转变 (Shifts)</span>
                                    <ul>
                                        <li><span class="text-slate-200 font-medium">技术：</span> 提示词工程 -> <span class="gradient-text">上下文工程</span></li>
                                        <li><span class="text-slate-200 font-medium">流程：</span> 直觉 -> <span class="gradient-text">工程化</span> (火山方舟)</li>
                                        <li><span class="text-slate-200 font-medium">职业：</span> 执行者 -> <span class="gradient-text">AI 架构师</span> (模型内化)</li>
                                        <li><span class="text-slate-200 font-medium">哲思：</span> 技术 -> <span class="gradient-text">艺术</span> (约束的表达)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- [V7 重构] 生态工具 (可点击) -->
        <section id="tools">
            <!-- [V8] H2 标题改为渐变色 -->
            <h2 class="text-3xl font-bold text-center mb-4 tracking-tight gradient-text">生态工具与平台</h2>
            <p class="text-lg text-slate-400 text-center mb-12">课程中提及的关键平台与技术栈（点击访问）</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="https://www.coze.cn/" target="_blank" rel="noopener noreferrer" class="tool-card">
                    <div>
                        <h3 class="text-base font-semibold text-slate-100">Coze (扣子)</h3>
                        <p class="text-sm text-slate-400">智能体（Agent）开发平台</p>
                    </div>
                    <i data-lucide="arrow-up-right" class="w-5 h-5 text-slate-500 icon"></i>
                </a>
                <a href="https://www.volcengine.com/product/ark" target="_blank" rel="noopener noreferrer" class="tool-card">
                    <div>
                        <h3 class="text-base font-semibold text-slate-100">火山方舟</h3>
                        <p class="text-sm text-slate-400">模型即服务 (MaaS) 平台</p>
                    </div>
                    <i data-lucide="arrow-up-right" class="w-5 h-5 text-slate-500 icon"></i>
                </a>
                <a href="https://www.aliyun.com/product/bailian" target="_blank" rel="noopener noreferrer" class="tool-card">
                    <div>
                        <h3 class="text-base font-semibold text-slate-100">阿里百炼</h3>
                        <p class="text-sm text-slate-400">一站式大模型应用开发平台</p>
                    </div>
                    <i data-lucide="arrow-up-right" class="w-5 h-5 text-slate-500 icon"></i>
                </a>
                <a href="https://cloud.baidu.com/product/wenxinworkshop" target="_blank" rel="noopener noreferrer" class="tool-card">
                    <div>
                        <h3 class="text-base font-semibold text-slate-100">百度千帆</h3>
                        <p class="text-sm text-slate-400">大模型综合平台（文心）</p>
                    </div>
                    <i data-lucide="arrow-up-right" class="w-5 h-5 text-slate-500 icon"></i>
                </a>
                <a href="https://www.feishu.cn/" target="_blank" rel="noopener noreferrer" class="tool-card">
                    <div>
                        <h3 class="text-base font-semibold text-slate-100">飞书 (Feishu)</h3>
                        <p class="text-sm text-slate-400">企业协作与应用发布平台</p>
                    </div>
                    <i data-lucide="arrow-up-right" class="w-5 h-5 text-slate-500 icon"></i>
                </a>
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="tool-card">
                    <div>
                        <h3 class="text-base font-semibold text-slate-100">VS Code</h3>
                        <p class="text-sm text-slate-400">AI Coding (代码生成)</p>
                    </div>
                    <i data-lucide="arrow-up-right" class="w-5 h-5 text-slate-500 icon"></i>
                </a>
            </div>
        </section>
        
    </main>
    
    <footer class="text-center p-8 mt-16 border-t border-gray-700 text-slate-500 text-sm">
        Gemini 战略分析报告 | 深度提炼自「智能体开发与提示词工程进阶课程」
    </footer>

    <!-- [V6] 激活图标和交互JS -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            
            // 激活 Lucide 图标
            try {
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                } else {
                    console.warn("Lucide icon library not loaded.");
                }
            } catch (e) {
                console.error("Error creating Lucide icons:", e);
            }

            // 粘性导航栏的滚动spy
            const sections = document.querySelectorAll("section[id]");
            const navItems = document.querySelectorAll(".nav-item");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        navItems.forEach(nav => {
                            nav.classList.remove("active", "text-white");
                            nav.classList.add("text-slate-400");
                            if (nav.getAttribute("href") === `#${id}`) {
                                nav.classList.add("active", "text-white");
                                nav.classList.remove("text-slate-400");
                            }
                        });
                    }
                });
            }, { rootMargin: "-30% 0px -70% 0px" }); 

            sections.forEach(sec => observer.observe(sec));
            
            // 导航点击平滑滚动
            navItems.forEach(nav => {
                nav.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                    
                    // 立即更新激活状态
                    navItems.forEach(item => {
                        item.classList.remove("active", "text-white");
                        item.classList.add("text-slate-400");
                    });
                    this.classList.add("active", "text-white");
                    this.classList.remove("text-slate-400");
                });
            });

            // [V6] 手风琴图标动态替换
            const detailsElements = document.querySelectorAll('details');
            detailsElements.forEach(details => {
                details.addEventListener('toggle', () => {
                    const oldIcon = details.querySelector('.accordion-icon');
                    // [FIX] 缓存图标的父节点
                    const iconParent = oldIcon ? oldIcon.parentNode : null;

                    // [FIX] 检查父节点是否存在，并且 oldIcon 确实是它的子节点
                    if (!oldIcon || !iconParent || oldIcon.parentNode !== iconParent) {
                        // 如果在切换时找不到图标或父节点，或它已不是子节点（可能已被替换）
                        return;
                    }
                    
                    // 1. 确定新图标的名称
                    const iconName = details.open ? 'chevron-down' : 'chevron-right';
                    
                    // 2. 检查lucide是否已加载并有createIcons方法
                    if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
                        // 3. 创建一个新的 i 标签作为模板
                        const newIconTemplate = document.createElement('i');
                        newIconTemplate.setAttribute('data-lucide', iconName);
                        
                        // 4. 创建一个临时的父节点来渲染
                        const tempContainer = document.createElement('div');
                        tempContainer.appendChild(newIconTemplate);
                        
                        // 5. 在临时容器中将 i 标签转换为 SVG
                        try {
                            lucide.createIcons({
                                nodes: tempContainer.childNodes,
                                attrs: {
                                    'stroke-width': 2,
                                    'class': 'w-6 h-6 text-slate-500 accordion-icon' // 确保样式一致
                                },
                            });
                        } catch (e) {
                            console.error("lucide.createIcons failed:", e);
                            return; // 出错时终止
                        }
                        
                        // 6. 获取新渲染的 SVG
                        const newIconSVG = tempContainer.firstChild;

                        // 7. 用渲染好的 SVG 替换旧图标
                        if (newIconSVG) {
                            // [FIX] 再次检查 oldIcon 是否仍然是 iconParent 的子节点
                            if (oldIcon.parentNode === iconParent) {
                                iconParent.replaceChild(newIconSVG, oldIcon);
                            } else {
                                // 另一进程已替换它，记录一下但不要报错
                                console.warn("Accordion icon race condition detected and averted.");
                            }
                        } else {
                             console.error("Icon replacement failed. New icon SVG is null.");
                        }
                    } else {
                        console.warn("lucide or lucide.createIcons is not available.");
                    }
                });
            });
        });
    </script>
</body>
</html>

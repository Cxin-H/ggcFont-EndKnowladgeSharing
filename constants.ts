import { Article } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: '深入理解浏览器事件循环 (Event Loop)',
    category: 'JS',
    summary: '宏任务与微任务的执行顺序决定了异步代码的行为。本文深度解析 V8 引擎中的事件循环机制。',
    content: 'JavaScript 是单线程的，这意味着它一次只能执行一个任务。事件循环是 JavaScript 的执行模型，负责执行代码、收集和处理事件以及执行队列中的子任务...',
    date: '2024-05-12',
    tags: ['EventLoop', 'V8', 'Async']
  },
  {
    id: '2',
    title: 'CSS Grid 与 Cyberpunk 布局艺术',
    category: 'CSS',
    summary: '如何使用 Grid 和 CSS 变量构建复杂的科幻风格 UI 界面，实现响应式的不规则布局。',
    content: 'Cyberpunk 风格强调高科技与低生活的结合，UI 上表现为霓虹色、不规则边框和复杂的网格系统。使用 CSS Grid 我们可以轻松实现非对称布局...',
    date: '2024-05-15',
    tags: ['Grid', 'UI Design', 'Cyberpunk']
  },
  {
    id: '3',
    title: '前端工程化：从 Webpack 到 Vite',
    category: 'Architecture',
    summary: '探讨构建工具的演进，以及 ESM 如何改变了我们的开发体验。',
    content: 'Vite 利用原生 ESM 文件服务，在开发环境下实现了秒级启动。相比 Webpack 的 Bundle 机制，这是一种思维模式的转变...',
    date: '2024-05-20',
    tags: ['Build Tools', 'Vite', 'Performance']
  }
];

export const REACT_ARTICLES: Article[] = [
  {
    id: 'r1',
    title: 'React Fiber 架构解析',
    category: 'React',
    summary: 'Fiber 是 React 16 引入的新的协调引擎。了解它是如何实现时间切片和任务优先级的。',
    content: 'Fiber 的核心目标是增强 React 在动画、布局和手势等领域的适用性。它的主要特性是增量渲染：能够将渲染工作分割成块，并将其分散到多个帧中...',
    date: '2024-06-01',
    tags: ['Fiber', 'Internal', 'Reconciliation']
  },
  {
    id: 'r2',
    title: 'Effective Custom Hooks',
    category: 'React',
    summary: '如何编写可复用、可测试且类型安全的自定义 Hooks。',
    content: '自定义 Hooks 是 React 逻辑复用的基石。一个好的 Hook 应该隐藏复杂的实现细节，暴露简洁的 API。例如 useSWR 或 react-query...',
    date: '2024-06-05',
    tags: ['Hooks', 'TypeScript', 'Patterns']
  },
  {
    id: 'r3',
    title: 'React Server Components (RSC) 初探',
    category: 'React',
    summary: 'RSC 正在重塑我们构建 React 应用的方式，前后端界限日益模糊。',
    content: 'Server Components 允许开发者构建仅在服务器上运行的组件。这减少了发送到客户端的 bundle 大小，并允许直接访问后端资源...',
    date: '2024-06-10',
    tags: ['RSC', 'Next.js', 'Performance']
  }
];
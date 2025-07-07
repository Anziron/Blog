// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // 自定义侧边栏结构
  tutorialSidebar: [
    {
      type: 'category',
      label: '编程语言',
      link: {
        type: 'doc',
        id: 'programming-languages/index',
      },
      items: [
        {
          type: 'category',
          label: 'Python',
          link: {
            type: 'doc',
            id: 'programming-languages/python',
          },
          items: [
            {
              type: 'doc',
              id: 'programming-languages/python/python-basics',
              label: 'Python基础'
            },
            {
              type: 'doc',
              id: 'programming-languages/python/python-advanced',
              label: 'Python进阶'
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '开发工具',
      link: {
        type: 'doc',
        id: 'development_tool/index',
      },
      items: [
        {
          type: 'doc',
          id: 'development_tool/git',
          label: 'Git'
        },
        {
          type: 'doc',
          id: 'development_tool/docker',
          label: 'Docker'
        },
      ],
    },
  ],
};

export default sidebars;

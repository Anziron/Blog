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
      label: '编程基础',
      link: {
        type: 'doc',
        id: 'programming-basics/index',
      },
      items: [
        'programming-basics/git',
        'programming-basics/docker',
      ],
    },
    {
      type: 'category',
      label: '编程语言',
      link: {
        type: 'doc',
        id: 'programming-languages/index',
      },
      items: [
        'programming-languages/python',
      ],
    },
  ],
};

export default sidebars;

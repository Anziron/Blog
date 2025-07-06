---
sidebar_position: 2
title: Git 版本控制
---

# Git 版本控制

Git是一个分布式版本控制系统，用于跟踪文件的更改，并协调多人对这些文件的工作。

## 基本概念

- **仓库（Repository）**：存储项目文件和历史记录的地方
- **提交（Commit）**：保存文件更改的快照
- **分支（Branch）**：独立的开发线
- **合并（Merge）**：将一个分支的更改整合到另一个分支

## 常用命令

```bash
# 初始化仓库
git init

# 克隆仓库
git clone <repository-url>

# 添加文件到暂存区
git add <file-name>

# 提交更改
git commit -m "提交信息"

# 查看状态
git status

# 查看提交历史
git log

# 创建分支
git branch <branch-name>

# 切换分支
git checkout <branch-name>

# 合并分支
git merge <branch-name>

# 拉取远程更改
git pull

# 推送到远程仓库
git push
```

## 工作流程

1. 从远程仓库克隆项目或初始化本地仓库
2. 创建新分支进行开发
3. 添加和提交更改
4. 合并分支
5. 推送到远程仓库

## 高级功能

- **变基（Rebase）**：重新应用提交到另一个分支
- **标签（Tag）**：标记特定的提交点，通常用于版本发布
- **钩子（Hooks）**：在特定事件发生时自动执行脚本 
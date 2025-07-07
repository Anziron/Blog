---
sidebar_position: 3
title: Docker 容器化
---

# Docker 容器化

Docker是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中。

## 基本概念

- **镜像（Image）**：Docker容器的模板，包含运行应用所需的所有内容
- **容器（Container）**：镜像的运行实例
- **Dockerfile**：用于构建Docker镜像的脚本
- **Docker Compose**：用于定义和运行多容器Docker应用的工具

## 常用命令

```bash
# 列出本地镜像
docker images

# 构建镜像
docker build -t <image-name> .

# 运行容器
docker run <image-name>

# 列出正在运行的容器
docker ps

# 停止容器
docker stop <container-id>

# 删除容器
docker rm <container-id>

# 删除镜像
docker rmi <image-id>

# 查看容器日志
docker logs <container-id>

# 进入容器内部
docker exec -it <container-id> bash
```

## Dockerfile示例

```dockerfile
# 使用官方Python运行时作为父镜像
FROM python:3.9-slim

# 设置工作目录
WORKDIR /app

# 复制当前目录内容到容器的/app
COPY . /app/

# 安装依赖
RUN pip install --no-cache-dir -r requirements.txt

# 暴露端口
EXPOSE 5000

# 运行应用
CMD ["python", "app.py"]
```

## Docker Compose示例

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
  redis:
    image: "redis:alpine"
```

## 优势

- 一致的运行环境
- 轻量级的资源隔离
- 快速部署和扩展
- 简化配置过程 
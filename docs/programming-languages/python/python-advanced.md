---
sidebar_position: 2
title: Python进阶
---
# Python进阶

本文介绍Python的进阶特性和高级用法。

## 类和对象

面向对象编程是Python的重要特性之一。

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
  
    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

# 创建对象
person = Person("Alice", 30)
print(person.greet())  # 输出: Hello, my name is Alice and I am 30 years old.
```

### 继承

```python
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
  
    def study(self):
        return f"{self.name} is studying with student ID: {self.student_id}"

student = Student("Bob", 20, "S12345")
print(student.greet())  # 继承自Person类
print(student.study())  # Student类特有的方法
```

## 高级特性

### 列表推导式

```python
# 创建1到10的平方列表
squares = [x**2 for x in range(1, 11)]
print(squares)  # 输出: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# 带条件的列表推导式
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print(even_squares)  # 输出: [4, 16, 36, 64, 100]

# 字典推导式
name_lengths = {name: len(name) for name in ["Alice", "Bob", "Charlie"]}
print(name_lengths)  # 输出: {'Alice': 5, 'Bob': 3, 'Charlie': 7}
```

### 生成器

```python
# 生成器函数
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# 使用生成器
for num in fibonacci(10):
    print(num)

# 生成器表达式
even_numbers = (x for x in range(100) if x % 2 == 0)
print(list(even_numbers))  # 转换为列表查看
```

### 装饰器

```python
def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} 执行时间: {end - start} 秒")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "完成"

print(slow_function())
```

### 上下文管理器

```python
# 使用with语句自动管理资源
with open('example.txt', 'w') as file:
    file.write('Hello, World!')
# 文件会在退出with块时自动关闭

# 自定义上下文管理器
class MyContext:
    def __enter__(self):
        print("进入上下文")
        return self
  
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("退出上下文")
        return False  # 允许异常传播

with MyContext() as ctx:
    print("在上下文中")
```

## 实用库

Python拥有丰富的库生态系统，以下是一些常用的库：

### 数据科学和机器学习

- **NumPy**: 科学计算的基础库，提供多维数组对象和相关操作
- **Pandas**: 数据分析和操作工具，提供DataFrame数据结构
- **Matplotlib/Seaborn**: 数据可视化
- **SciPy**: 科学计算和技术计算
- **Scikit-learn**: 机器学习算法和工具
- **TensorFlow/PyTorch**: 深度学习框架

### Web开发

- **Flask**: 轻量级Web框架
- **Django**: 全功能Web框架
- **FastAPI**: 现代、快速的Web框架

### 其他实用工具

- **Requests**: HTTP客户端库
- **Beautiful Soup**: HTML和XML解析库
- **Pillow**: 图像处理
- **SQLAlchemy**: SQL工具包和ORM
- **Pytest**: 测试框架

---
sidebar_position: 2
title: Python
---

# Python编程

Python是一种高级、通用型编程语言，以其简洁、易读的语法和强大的库生态系统而闻名。

## 基础语法

### 变量和数据类型

```python
# 变量赋值
name = "Python"
age = 30
is_awesome = True
pi = 3.14159

# 数据类型
# 字符串
text = "Hello, World!"
# 数字
integer = 42
float_num = 3.14
# 列表
my_list = [1, 2, 3, 4, 5]
# 元组
my_tuple = (1, "apple", True)
# 字典
my_dict = {"name": "Python", "age": 30}
# 集合
my_set = {1, 2, 3, 4, 5}
```

### 条件语句

```python
x = 10

if x > 5:
    print("x大于5")
elif x == 5:
    print("x等于5")
else:
    print("x小于5")
```

### 循环

```python
# for循环
for i in range(5):
    print(i)  # 输出0, 1, 2, 3, 4

# while循环
count = 0
while count < 5:
    print(count)
    count += 1
```

## 函数

```python
# 定义函数
def greet(name):
    return f"Hello, {name}!"

# 调用函数
message = greet("Python")
print(message)  # 输出: Hello, Python!

# 带默认参数的函数
def power(base, exponent=2):
    return base ** exponent

print(power(2))     # 输出: 4
print(power(2, 3))  # 输出: 8
```

## 类和对象

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

## 模块和包

Python的强大之处在于其丰富的标准库和第三方包。

```python
# 导入标准库
import math
print(math.sqrt(16))  # 输出: 4.0

# 导入特定函数
from datetime import datetime
now = datetime.now()
print(now)

# 安装第三方包
# pip install requests

# 使用第三方包
import requests
response = requests.get("https://api.example.com/data")
data = response.json()
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

## 实用库

- **NumPy**: 科学计算
- **Pandas**: 数据分析
- **Matplotlib**: 数据可视化
- **Flask/Django**: Web开发
- **TensorFlow/PyTorch**: 机器学习 
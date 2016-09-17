＃ Node.js web 服务搭建 练习1
1. 定义新的数据模型 news.js
   ＊要求＊
   - 至少包含三条数据
   - 每一条数据中都要包含如下字段（属性）：title，content，author

   ＊思考＊
   - 数据文件应放在models下

2. 写一个处理 news 的路由文件
   ＊要求＊
   - 包含如下接口：
     - GET / 返回全部 news 数据
     - GET /:id 返回指定 id news 数据
       - 要有对不存在的 id 的错误处理
       - id 从 1 开始 (id 1 对应数组索引 0,即 ／news/1 返回数组索引为 0 的数据)
     - DELETE /:id 删除指定 news
       - 使用数组的删除指定元素方法
       - 删除后在控制台输出剩余数据以验证

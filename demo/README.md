# demo

该实例中数据通信包含form表单(form表单提交处理逻辑暂时还没完成)和ajax异步请求，其余页面可按照进行开发，大同小异。

## 开发

- 开启Web服务器，访问regist1-mock-ajax.html可看到预览效果，此页面有两处ajax请求(分别是获取城市和手机验证码)和两处form表单提交
- 由于数据接口还没有写好，可以读取本地mock数据，待数据接口写好后合理替换
- demo中有调用远程接口获取数据和本地mock数据，分别为regist1-mock-ajax和regist1-remote-ajax

## 使用技术

1. css预处理器框架sass
2. js类库jQuery
3. js模板引擎Mustache

![数据通信](http://7fvgk8.com1.z0.glb.clouddn.com/%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1.jpg)


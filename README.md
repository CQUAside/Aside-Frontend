# Aside-Frontend

本项目是粘贴栏前端页面,采用前后端分离方式开发。根据接口文件定义JSON数据结构,之后使用引擎模板加载数据。

## 使用技术

1. 服务器:  node.js's package http-server/IIS/apache/tomcat/nginx...(选择一种自己使用过或者比较喜欢的Web服务器，如果是使用node的http-server Web服务器请看下面的安装)
2. 数据:  本地JSON文件(根据接口文件定义数据结构)
3. 加载数据方式:  [Handlebars.js](http://handlebarsjs.com/) / [mustache](https://github.com/janl/mustache.js) 模板引擎
4. 样式:  静态CSS / [css预处理器框架sass](http://www.w3cplus.com/sassguide/)
5. 脚本:  [jQuery](http://www.jquery123.com/)

## 前端与后台通信

### form表单

注册、登录以及上传广告

### ajax请求

查询广告信息等

## 开发注意事项

结构、样式和交互要相对独立，通过文件引用来关联，不要在结构中写内联样式以及在结构中直接写交互。

### 静态HTML开发

![共用头部](http://7fvgk8.com1.z0.glb.clouddn.com/common.jpg)
- 很多页面的头部和底部都是近似相同的，可以共用相同的head和footer
- 当查询数据时，form表单可以使用get方式提交；添加删除修改时，需要使用post方式提交（比较安全，但是为了安全，请均使用post方式，具体请查看相关文档），ajax请求同样如此
- js文件在body最后引用，防止获取元素出错
- 注意SEO优化: image添加title和alt，input添加对应label 等

### 样式开发

- 公用的样式可以放在common.css里面，特定页面的样式可以放在单独的样式文件里
- 自定义的类和id使用7K命名法，比如说col-md-3
- 注意浏览器的兼容性问题

### 脚本开发

- 涉及到文本框的数据库CURD操作需要进行验证

## 附加

### 轻便型Web服务器http-server安装

1. [安装node.js](https://nodejs.org/en/download/)
2. [安装http-server及使用](https://www.npmjs.com/package/http-server)

### [编译css预处理器框架sass工具koala](http://koala-app.com/index-zh.html)

### 调试ajax

![调试ajax](http://7fvgk8.com1.z0.glb.clouddn.com/ajax.png)



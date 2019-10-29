# easy-tabs
基于jQuery的一个简单的tab插件

## 使用
引入css文件
```html
<link rel="stylesheet" href="css/tab.css">
```
引入js文件
```html
<script src="js/jQuery.js" type="text/javascript" charset="utf-8"></script>
<script src="js/tab.js" type="text/javascript" charset="utf-8"></script>
```
css和js文件在仓库的css和js文件夹里面，记住jQuery一定要在tab.js之前引入

## 普通的Tab
![普通标签页](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ewtow93xj30cu05ja9w.jpg)
```html
<div class="zeus-tab">
  <ul class="zeus-tab-title">
    <li class="tab-current">Tab1</li>
    <li>Tab2</li>
    <li>Tab3</li>
    <li>Tab4</li>
  </ul>
  <div class="zeus-tab-content">
    <div class="zeus-tab-item tab-show">这里是Tab1的内容</div>
    <div class="zeus-tab-item">这里是Tab2的内容</div>
    <div class="zeus-tab-item">这里是Tab3的内容</div>
    <div class="zeus-tab-item">这里是Tab4的内容</div>
  </div>
</div>
```
![简约风格标签页](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ewvagtwxj30e2052a9w.jpg)
```html
<div class="zeus-tab zeus-tab-brief">
  <ul class="zeus-tab-title">
    <li class="tab-current">标签1</li>
    <li>标签2</li>
    <li>标签3</li>
  </ul>
  <div class="zeus-tab-content">
    <div class="zeus-tab-item tab-show">这里是1的内容</div>
    <div class="zeus-tab-item">这里是2的内容</div>
    <div class="zeus-tab-item">这里是3的内容</div>
  </div>
</div>
```
![卡片风格标签页](https://tva1.sinaimg.cn/large/006y8mN6ly1g8ewxd4uydj30ac04fmx0.jpg)
```html
<div class="zeus-tab zeus-tab-card">
  <ul class="zeus-tab-title">
    <li class="tab-current">标签1</li>
    <li>标签2</li>
    <li>标签3</li>
  </ul>
  <div class="zeus-tab-content">
    <div class="zeus-tab-item tab-show">这里是1的内容</div>
    <div class="zeus-tab-item">这里是2的内容</div>
    <div class="zeus-tab-item">这里是3的内容</div>
  </div>
</div>
```
## 标签切换的事件回调
为了便于功能拓展，所以实现了事件回调，可以在Tab进行事件绑定，在含class为`zeus-tab`的div中可以添加`onchange`属性，该属性的内容为全局的事件处理方法，
该方法有两个参数，第一个参数是当前被点击的li标签的Jquery对象，第二个是当前被点击的li标签的下标，下标从0开始
```html
<div id="tab1" class="zeus-tab" onchage="handleTab1Click">
  <ul class="zeus-tab-title">
    <li class="tab-current">Tab1</li>
    <li>Tab2</li>
    <li>Tab3</li>
    <li>Tab4</li>
  </ul>
  <div class="zeus-tab-content">
    <div class="zeus-tab-item tab-show">这里是Tab1的内容</div>
    <div class="zeus-tab-item">这里是Tab2的内容</div>
    <div class="zeus-tab-item">这里是Tab3的内容</div>
    <div class="zeus-tab-item">这里是Tab4的内容</div>
  </div>
</div>
<script type="text/javascript">
  function handleTab1Click(li, index) {
    console.log('我收到Tab改变的信息了，当前在第'+index+'个Tab');
  }
</script>
```
具体的内容使用方法参考index.html文件

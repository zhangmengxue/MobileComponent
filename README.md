# 移动端动效组件库

##全局/通用概述

### reset.css

CSS重置样式：
- 存在的意义：浏览器存在默认样式，cssreset重置样式的作用就是让各个浏览器的CSS样式有一个统一的基准。
- 参考资料：[CSS reset的审视](http://www.zhangxinxu.com/wordpress/2010/04/css-reset%E7%9A%84%E9%87%8D%E6%96%B0%E5%AE%A1%E8%A7%86-%E9%81%BF%E5%85%8D%E6%A0%B7%E5%BC%8F%E9%87%8D%E7%BD%AE/)

### base.js

移动端自适应方案：
- 存在的意义：市面上不同手机分辨率参差不齐，设备像素比dpr也随着iPhone6 Plus的出现而飙升到了3.适配各种不同的手机使我们的页面一次编写适配所有也变得紧迫和必须；
- 使用方法：  

    1.在所有资源加载之前执行这个js。执行这个js后，会在html（也就是document.documentElement）上增加一个data-dpr属性，以及font-size样式。之后页面中的元素，都可以用rem单位来设置。html上的font-size就是rem的基准像素。    

    2.首先，假设视觉稿大小是750（iPhone6）。当前方案会把这3类视觉稿分成100份来看待（为了以后兼容vh，vw单位）。每一份被称为一个单位a。同时，1rem单位认定为10a。拿750的视觉稿举例：
    1a = 7.5px
    1rem = 75px
    因此，对于视觉稿上的元素的尺寸换算，只需要原始px值除以rem基准px值即可。例如240px * 120px的元素，最后转换为3.2rem * 1.6rem。  

    3.字体的大小不推荐用rem作为单位。所以对于字体的设置，仍旧使用px作为单位，并配合用data-dpr属性来区分不同dpr下的的大小。
    例如：
```javascript
    div {
        width: 1rem; 
        height: 0.4rem;
        font-size: 12px; // 默认写上dpr为1的fontSize
    }

    [data-dpr="2"] div {
        font-size: 24px;
    }

    [data-dpr="3"] div {
        font-size: 36px;
    }
``` 

    4.手动配置dpr  

    <meta name="flexible" content="initial-dpr=2,maximum-dpr=3" />    

    5.手动设置rem基准值  

    html {font-size: 60px!important;}∏

## 加载效果

### load.css


都是使用css动画实现，所以只要引入load的css文件，并具备依赖的DOM结构即可；

1.className: ball-pulse -->

    <div class="loader">
        <div class="loader-inner ball-pulse">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

2.className:ball-clip-rotate -->

     <div class="loader">
        <div class="loader-inner ball-clip-rotate">
            <div></div>
        </div>
    </div>

3.className:ball-clip-rotate-pluse -->

    <div class="loader">
        <div class="loader-inner ball-clip-rotate-pulse">
            <div></div>
            <div></div>
        </div>
    </div>

4.className:square-spin -->

    <div class="loader">
        <div class="loader-inner square-spin">
            <div></div>
        </div>
    </div>

5.className:ball-triangle-path -->

    <div class="loader">
        <div class="loader-inner ball-triangle-path">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

6.className: line-scale-pulse-out -->

    <div class="loader">
        <div class="loader-inner line-scale-pulse-out">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

7.className: ball-scale-multiple -->

    <div class="loader">
        <div class="loader-inner ball-scale-multiple">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

8.className: ball-spin-fade-loader -->

    <div class="loader">
        <div class="loader-inner ball-spin-fade-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

9.className:line-spin-fade-loader -->

    <div class="loader">
        <div class="loader-inner line-spin-fade-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

## 弹出框效果

### createWindow.css




# 参考资料：
- [可伸缩布局方案](https://github.com/amfe/lib.flexible)
- [CSS reset的审视](http://www.zhangxinxu.com/wordpress/2010/04/css-reset%E7%9A%84%E9%87%8D%E6%96%B0%E5%AE%A1%E8%A7%86-%E9%81%BF%E5%85%8D%E6%A0%B7%E5%BC%8F%E9%87%8D%E7%BD%AE/)


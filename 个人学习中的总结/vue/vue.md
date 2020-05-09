1，active-class是哪个组件得属性？
它是router得router-link组件得属性。

2，嵌套路由怎么定义？
我们只需要在路由得参数中配置children就行了

3，怎样定义一个动态路由，并且获取传过来得动态参数？
只需要对path属性加上一个/:id
使用路由的params.id

4，路由有哪几种导航钩子？
(1)全局导航钩子 (2)组件内的导航钩子 (3)单独路由独享组件

5，简述一下sass和less，并且说明两者的区别？
它们是一种动态性的语言，是css预处理器；
区别：(1)变量符不同：sass使用@，而less使用$; (2)sass可以使用条件判断语句，而less不可以；(3)sass是基于ruby的，是在服务端处理的；而less是需要引入less.js处理less代码并输出css到浏览器上；

6，如何理解MVVM原理？
提到MVVM，很多前端开发者都会想到Vue的双向绑定，然而它们并不能划等号，MVVM是一种软件架构模式，而Vue只是一种在前端层面上的实现，其实不单在Vue里，在很多Web 框架应用里都有相关的实现。MVVM模式到底是什么呢？要说到MVVM这种模式，则必须要提及另一种大多数开发者都能耳熟能详的模式，就是MVC模式。

7，什么是MVC？
在前几年，前后端完全分离开之前，很多很火的后端框架都会说自己是支持MVC模式，像JAVA的SpringMVC、PHP的smarty、Nodejs的express和Koa，那么MVC的模式到底是什么样的？先看看下面这张经典的MVC模型图，Model（模型）、View（视图）、 Controller（控制器）相互依赖关系的三部分组成模型。

Model
这里的Model在MVC中实际是数据模型的概念，可以把它当成从数据库里查出来后的一条数据，或者是将查询出来的元数据经过裁剪或者处理后的一个特定数据模型结构。

View
View是视图，是将数据内容呈现给用户肉眼的界面层，View层最终会将数据模型下的信息，渲染显示成人类能易于识别感知的部分。

Controller
Controller是数据模型与View之间的桥梁层，实际界面层的各种变化都要经过它来控制，而且像用户从界面提交的数据也会经过Controller的组装检查生成数据模型，然后改变数据库里的数据内容。

8，什么是MVVM？
随着前端对于控制逻辑的越来越轻量，MVVM模式作为MVC模式的一种补充出现了，万变不离其宗，最终的目的都是将Model里的数据展示在View视图上，而MVVM相比于MVC则将前端开发者所要控制的逻辑做到更加符合轻量级的要求。

ViewModel
在Model和View之间多了叫做View-Model的一层，将模型与视图做了一层绑定关系，在理想情况下，数据模型返回什么试图就应该展示什么

在ViewModel引入之后，视图完全由接口返回数据驱动，由开发者所控制的逻辑非常轻量。不过这里要说明的是，在MVVM模式下，Controller控制逻辑并非就没了，像操作页面DOM响应的逻辑被SDK（如Vue的内部封装实现）统一实现了，像不操作接口返回的数据是因为服务端在数据返回给前端前已经操作好了。

接下来主要看看Vue中的MVVM的实现。
Vue2.0中的MVVM实现
Vue2.0的MVVM实现中，对View-Model的实现本质利用的ES5的Object.defineProperty方法，当Object.defineProperty方法在给数据Model对象定义属性的时候先挂载一些方法，在这些方法里实现与界面的值绑定响应关系，当应用的属性被读取或者写入的时候便会触发这些方法，从而达到数据模型里的值发生变化时同步响应到页面上。

当页面加载时，浏览器提供的DOMContentloaded事件触发后，调用mounted挂载函数，开始获取接口数据，获取完成后给data里属性赋值，赋值的时候触发前面挂载好的setter方法，从而引起页面的联动，达到响应式效果。

实现一下Object.defineProperty()
<span class="spanName"></span>
<input type="text" class="inputName"/>

<script>
  let obj = {name: ''}
  let newObj = JSON.parse(JSON.stringify(obj))
  Object.defineProperty(obj, 'name', {
    get() {
      return obj.name;
    }
    set(val) {
      newObj.name = val
      observer()
    }
  })
  //将数据的变化显示到页面中去
  function observer() {
    spanName.innerHTML = obj.name
    inputName.value = obj.name
  }

  setTimeoout(() => {
    return obj.name = "秃头的科比"
  }, 1000)

  //将页面中变化返回给数据
  inputName.oninput = function () {
    obj.name = this.value
  }

</script>

实现Vue3.0版本的MVVM
Proxy
Proxy是ES6里的新构造函数
<script>
    let obj = {}
    obj = new Proxy(obj, {
      get(target, prop) {
        return target[prop]
      },
      set(target, prop, value) {
        target[prop] = value
        observer()
      }
    })

    //将数据的改动反映到视图中去
    function observer() {
      spanName.innerHTML = obj.name;
      inputName.value = obj.name;
    }

    setTimeout(() => {
      return obj.name = "秃头的科比"
    }, 1000)

    //将视图中的变化反映到数据中去
    inputName.oninput = function () {
      obj.name = this.value
    }
  </script>


9，vue中是如何检测数组变化的？(我们要清楚为什么数组类型的变化要做特殊处理？)
Vue2.0的数据变化监听
Vue2.x中并没有实现将已存在的数组元素做监听，而是去监听造成数组变化的方法，触发这个方法的同时去调用挂载好的响应页面方法，达到页面响应式的效果。但是也请注意并非所有的数组方法都重新写了一遍，只有push，pop，shift，unshift，splice, sort，reverse这七个。至于为什么不用Object.defineProperty去监听数组中已存在的元素变化。作者尤雨溪的考虑是因为性能原因，给每一个数组元素绑定上监听，实际消耗很大，而受益并不大。

Vue3.0的数据变化监听
简直完美，无论是数组下标赋值引起变化还是数组方法引起变化，都可以被监听到，而且既可以避开监听数组每个属性下造成的性能问题，还可以解决像pop、push方法，length方法改变数组时监听不到数组变化的问题。

10，vue为何采用异步渲染？
什么是异步渲染？
首先要做一个补充，当数据在同步变化的同时，为什么页面的响应操作不会与数据变化对应，而是等数据变化都操作完之后页面才会进行响应。

vue为什么要采用异步渲染呢？
我们可以从用户和性能两个方面考虑这个问题

从用户的角度去看，我们如果将第一次的数据变化反映到页面上时，页面会有闪烁效果(因为它紧接着要对数据的第二次变化做出响应)，反而会造成不好的用户体验。

从性能的角度去看  多渲染一次肯定会增加性能的消耗。

而对于浏览器来说，在数据的变化下，无论是引起的重绘还是回流都有可能造成性能的消耗并产生低效的页面性能，甚至造成卡顿问题。

vue中如何实现异步渲染呢？
先总结一下原理，在Vue中异步渲染实际在数据每次变化时，将其所要引起页面变化的部分都放到一个异步API的回调函数里，直到同步代码执行完之后，异步回调开始执行，最终将同步代码里所有的需要渲染变化的部分合并起来，最终执行一次渲染操作。

拿上面例子来说，当val第一次赋值时，页面会渲染出对应的文字，但是实际这个渲染变化会暂存，val第二次赋值时，再次暂存将要引起的变化，这些变化操作会被丢到异步API，Promise.then的回调函数中，等到所有同步代码执行完后，then函数的回调函数得到执行，然后将遍历存储着数据变化的全局数组，将所有数组里数据确定先后优先级，最终合并成一套需要展示到页面上的数据，执行页面渲染操作操作。

这里触发渲染的异步API优先考虑Promise，其次MutationObserver，如果没有MutationObserver的话，会考虑setImmediate，没有setImmediate的话最后考虑是setTimeout。

nextTick的实现原理
首先 nextTick并不是浏览器本身自带的异步API，而是在vue中，用过由浏览器提供的原生异步API所封装成的一个异步封装方法。

它对于浏览器异步API的选用规则如下，promise存在则用promise.then，不存在则用mutationObserver，mutationObserver不存在则用setImmediate，setImmediate不存在则用setTimeout来实现。

从上面的选用规则来看，nextTick有可能是微任务也有可能是宏任务，从优先使用promise,mutationObserver可以看出优先微任务，而后才是setImmediate,setTimeout宏任务。

对于微任务与宏任务的区别这里不深入，只要记得同步代码执行完毕之后，优先执行微任务，其次才会执行宏任务。

vue能不能进行同步渲染？
当然是可以的
在我们的开发代码里，只需要加入下一句即可让你的页面渲染同步进行。

import Vue from 'Vue'
Vue.config.async = false

11，vue的生命周期是什么？
每个new出来的实例都会经历实例化创建，初始化数据，编译模板，挂载DOM，数据更新，页面渲染，卸载销毁等一系列完整的过程，从生到死的过程，便称为生命周期。
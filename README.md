# react-native-toastAndLoading
封装一个基于iOS与Android双平台的Toast组件和加载Loading组件

# React Native开发封装Toast与加载Loading组件
在App开发中，我们避免不了使用的两个组件，一个Toast，一个网络加载Loading，在RN开发中，也是一样，React Native官方并没有提供者这两个常用组件，需要开发者自己根据需求来自定义。作者就在其他组件的基础上在进行二次封装，使用起来更加简单，更具扩展性，同学们只需将Toast与Loading文件拖到项目中，install对应的组件库即可

# 效果图
![gif](http://ovyjkveav.bkt.clouddn.com/17-12-12/81345232.jpg)

# 简书地址
[http://www.jianshu.com/p/38e51e7de7e3](http://www.jianshu.com/p/38e51e7de7e3)

# Demo使用使用到的三方组件
* react-native-root-toast：用来显示toast
* react-native-root-siblings：用来Loading在App最上层添加视图
* react-native-vector-icons：IconFont

# 注意
`react-native-vector-icons` 需要link 才能使用，同学们需要注意

# Toast组件
toast组件这里作者分类8种不同的使用场景，目前能想到的就这多场景了，后面同学们有其他场景，可以自行添加即可，Toast组件中使用到的Icon图标，同学们也可以自行修改

* 只显示最简单的文本的toast
* 只显示最简单的文本的长toast，显示时长 + 500毫秒
* 显示success的toast，success的Toast带有一个成功的对号icon
* 显示success的toast，支持回调，使用场景类似于登录成功，显示1500毫秒toast，然后在回调函数中跳转到其他页面
* 显示success的长toast，显示时长 + 500毫秒
* 显示success的长toast，显示时长 + 500毫秒，支持回调，使用场景类似于登录成功，显示1000毫秒toast，然后跳转到其他页面
* 显示warning的toast，使用场景类似于登录表单，手机号填写错误
* 显示报错的toast，使用场景类似于登录表单，提交表单失败

# Loading组件
Loading组件最常用的使用场景就是网络请求时，数据还没有请求回来之前，页面最上层显示一个正在加载的loading框，一来能够防止用户在网络请求时又做其他的操作，二来可以给用户一个更好的体验，不至于页面空白，显得突兀

* loading支持手动调用显示：show()
* 支持手动关闭显示：hidden()

这里作者建议使用redux来控制Loading的显示与隐藏，这样不用在每一个需要网络请求的页面都手动去调用显示与隐藏，更高端的Loading使用技巧可以参照作者的[React Native开发项目：OneM](https://github.com/guangqiang-liu/OneM)

# Toast核心源码

```
const Toast = {

  toast: null,

  show: msg => {
    this.toast = RootToast.show(msg, {
      position: 0,
      duration: 1500
    })
  },

  showLong: msg => {
    this.toast = RootToast.show(msg, {
      position: 0,
      duration: 2000
    })
  },

  showSuccess: (msg, options) => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Icon name='check' size={50} color={'#fff'}/>
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: 1500,
        position: RootToast.positions.CENTER,
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
      typeof options === 'function' ? options && options(): null
    }, 2000)
  },

  showLongSuccess: (msg, options) => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Icon name='check' size={50} color={'#fff'}/>
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: 2000,
        position: RootToast.positions.CENTER,
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
      typeof options === 'function' ? options && options(): null
    }, 2500)
  },

  showWarning: (msg, options) => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Icon name='warning' size={40} color={'#fff'}/>
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: RootToast.durations.SHORT,
        position: RootToast.positions.CENTER,
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
    }, RootToast.durations.SHORT + 500)
  },

  showError: (msg, options) => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Icon name='close' size={40} color={'#fff'}/>
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: RootToast.durations.SHORT,
        position: RootToast.positions.CENTER,
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
    }, RootToast.durations.SHORT + 500)
  }

}
```

# Loading核心源码

```
const HUD = {

  show: () => {
    sibling = new RootSiblings(
      <View style={styles.maskStyle}>
        <View style={styles.backViewStyle}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </View>
    )
  },

  hidden: ()=> {
    if (sibling instanceof RootSiblings) {
      sibling.destroy()
    }
  }

}
```

# 福利时间
* 作者React Native开源项目OneM地址(按照企业开发标准搭建框架完成开发的)：**[https://github.com/guangqiang-liu/OneM](https://github.com/guangqiang-liu/OneM)**：欢迎小伙伴们 **star**
* 作者简书主页：包含50多篇RN开发相关的技术文章[http://www.jianshu.com/u/023338566ca5](http://www.jianshu.com/u/023338566ca5) 欢迎小伙伴们：**多多关注**，**多多点赞**
* 作者React Native QQ技术交流群：**620792950** 欢迎小伙伴进群交流学习
* 作者整理的React Native 学习视频大礼包：https://pan.baidu.com/s/1kVcgUzl 提取码：**ina5**  有需要的小伙伴请拿走不谢
* 友情提示：**开发中有遇到RN相关的技术问题，欢迎小伙伴加入交流群，在群里提问、互相交流学习。交流群也定期更新最新的RN学习资料给大家，谢谢大家支持！**
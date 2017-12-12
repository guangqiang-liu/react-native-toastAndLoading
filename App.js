/**
 * Created by guangqiang on 2017/12/12.
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import {Toast} from './Toast'
import {Loading} from './Loading'
const width = Dimensions.get('window').width

export default class App extends Component {

  toast(type) {
    switch (type) {
      case 'show':
        Toast.show('这是show类型')
        break
      case 'showLong':
        Toast.showLong('这是showLong类型')
        break
      case 'showSuccess':
        Toast.showSuccess('这是showSuccess类型')
        break
      case 'showSuccessCallback':
        Toast.showSuccess('这是showSuccessCallback类型', () => alert('回调成功！'))
        break
      case 'showLongSuccess':
        Toast.showLongSuccess('这是showLongSuccess类型')
        break
      case 'showLongSuccessCallback':
        Toast.showLongSuccess('这是showLongSuccessCallback类型', () => alert('回调成功！'))
        break
      case 'showWarning':
        Toast.showWarning('这是showWarning类型')
        break
      case 'showError':
        Toast.showError('这是showError类型')
        break
    }
  }

  hud(type) {
   if (type === 'show') {
     Loading.show()
     setTimeout(function () {
       Loading.hidden()
     }, 5000)
   } else {
     Loading.hidden()
   }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Toast</Text>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('show')}
        >
          <Text>show</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('showLong')}
        >
          <Text>showLong</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('showSuccess')}
        >
          <Text>showSuccess</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('showSuccessCallback')}
        >
          <Text>showSuccess带函数回调</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('showLongSuccess')}
        >
          <Text>showLongSuccess</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('showLongSuccessCallback')}
        >
          <Text>showLongSuccess带函数回调</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('showWarning')}
        >
          <Text>showWarning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.toast('showError')}
        >
          <Text>showError</Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>HUD</Text>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.hud('show')}
        >
          <Text>showHud</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.text}
          onPress={() => this.hud('hidden')}
        >
          <Text>hiddenHud</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    width: width - 40,
    paddingVertical: 6,
    backgroundColor: '#ccc',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
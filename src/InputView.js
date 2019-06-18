import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class InputView extends PureComponent {

  static defaultProps = {
    length: 6,
    borderColor: '#C7C7C7',
    index: 0,
  }

  text = '●'

  renderItem() {
    const { index, length, borderColor, stopInput } = this.props;
    //stopInput(不允许输入,当密码输入3次后无法输入)
    let items = [];
    for (let i = 0; i < length; i++) {
      let borderRightWidth = 0.5;
      if (i === length - 1) borderRightWidth = 0;
      items.push(
        <View key={i} style={[styles.itemView, { borderRightWidth: borderRightWidth, borderRightColor: borderColor }]}>
          <Text style={[styles.text, this.props.textStyle]}>{stopInput ? '' : index > i ? this.text : ''}</Text>
        </View>
      );
    };
    return items;
  }

  render() {
    const { style, length, borderColor } = this.props;
    return (
      <View style={[styles.inputView, { width: length * 50, borderWidth: 0.5, borderColor: borderColor }, style]}>
        {this.renderItem()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    height: 45,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  itemView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
})

export default InputView;
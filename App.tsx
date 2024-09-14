import React, {Component} from 'react';
import {Button, StyleSheet, Platform, Text, View} from 'react-native';

import RNPrint from 'react-native-print';
interface PropselectedPrinter {
  selectedPrinter: PropSelectedPrinters;
}
interface PropSelectedPrinters {
  name: string;
  url: string;
}
export default class App extends Component {
  state = {
    selectedPrinter: {},
  } as PropselectedPrinter;

  async printRemotePDF() {
    await RNPrint.print({
      filePath: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.printRemotePDF} title="Print Remote PDF" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

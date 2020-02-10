/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import ViewPager from '@react-native-community/viewpager';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.normalize}>
        <ViewPager
          style={styles.normalize}
          initialPage={0}
          orientation="vertical">
          {[...Array(6).keys()].map(() => (
            <View>
              <Text style={styles.title}>
                This flat list below contain a lot of item. But in android, the
                flat list vertical scroll is not working.
              </Text>
              <FlatList
                style={styles.flatList}
                data={[...Array(20).keys()]}
                renderItem={({item}) => (
                  <View style={styles.list}>
                    <Text style={styles.numberList}>{item + 1}.</Text>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </Text>
                  </View>
                )}
              />
            </View>
          ))}
        </ViewPager>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  normalize: {flex: 1},
  title: {
    margin: 12,
    marginBottom: 0,
    color: '#c00',
    fontSize: 20,
    fontWeight: '700',
  },
  flatList: {
    flex: 1,
    margin: 12,
    borderWidth: 1,
    borderColor: Colors.dark,
    borderRadius: 3,
    padding: 12,
  },
  list: {
    margin: 4,
    padding: 12,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.lighter,
    backgroundColor: Colors.light,
    flexDirection: 'row',
  },
  numberList: {
    marginRight: 4,
  },
});

export default App;

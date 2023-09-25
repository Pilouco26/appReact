import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {DiscountsList} from './DiscountsList';
import Footer from '../../../components/Footer/Footer';
import {NavigationProp} from '@react-navigation/native';
interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Discounts = ({navigation}: RouterProps) => {
  return (
    <View style={styles.container}>
      <DiscountsList></DiscountsList>
      <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>
        <Text>Scanner</Text>
      </TouchableOpacity>
      <Footer navigation={navigation}></Footer>
    </View>
  );
};

export default Discounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

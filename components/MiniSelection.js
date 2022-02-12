import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native-paper';

const MiniSelection = ({ icon, text, color, disabled }) => {
  return (
    <TouchableOpacity style={{ alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 10,
          padding: 15,
          borderRadius: 12.5,
          width: '85%',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            backgroundColor: color,
            height: 25,
            width: 25,
            borderRadius: 10,
          }}
        >
          <IonIcons
            name={icon}
            color='#FFF'
            size={20}
            style={{ marginLeft: 2.5, marginTop: 2 }}
          />
        </View>
        <Text style={{ marginHorizontal: 10, fontWeight: 'bold' }}>{text}</Text>

        {disabled ? null : <Switch />}
      </View>
    </TouchableOpacity>
  );
};

export default MiniSelection;

const styles = StyleSheet.create({});

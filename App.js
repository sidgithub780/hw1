import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Constants from 'expo-constants';
import MiniSelection from './components/MiniSelection';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ marginHorizontal: 25 }}>
        <Text style={styles.largeText}>Settings</Text>
        <TextInput style={styles.userInput} placeholder='Search' />
        <TouchableOpacity style={styles.rectangle}>
          <View style={styles.circle}>
            <Text style={{ marginLeft: 12.5, marginTop: 12.5 }}>SK</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 24, marginLeft: 15 }}>
              Siddhanth Kumar
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 14, marginLeft: 15 }}>
              Apple ID, iCloud, Media, Purchases
            </Text>
          </View>
          <Text style={{ marginLeft: 'auto', marginTop: 15 }}>></Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 5, padding: 2 }}>
        <MiniSelection
          icon='airplane'
          text='Airplane Mode'
          color='orange'
          disabled={false}
        />
        <MiniSelection
          icon='wifi-outline'
          text='WiFi'
          color='lightblue'
          disabled={true}
        />
        <MiniSelection
          icon='bluetooth'
          text='Bluetooth'
          color='lightblue'
          disabled={false}
        />
        <MiniSelection
          icon='hourglass-outline'
          text='Screen Time'
          color='lightblue'
          disabled={false}
        />
        <MiniSelection
          icon='cellular'
          text='Cellular Data'
          color='lightblue'
          disabled={true}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 50,
    backgroundColor: '#F0F0F0',
  },
  largeText: {
    fontWeight: 'bold',
    fontSize: 36,
  },
  userInput: {
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
  },
  rectangle: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: 'lightgray',
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
});

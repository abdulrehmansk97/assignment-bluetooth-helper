import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  PermissionsAndroid,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';

const App = () => {
  const [isBluetoothOn, setIsBluetoothOn] = useState(false);

  useEffect(() => {
    requestPermissions();
  }, []);

  useEffect(() => {
    BluetoothStateManager.onStateChange(state => {
      if (state === 'PoweredOn' && !isBluetoothOn) {
        setIsBluetoothOn(true);
      } else if (state === 'PoweredOff' && isBluetoothOn) {
        setIsBluetoothOn(false);
      }
    }, true);
  }, [isBluetoothOn]);

  const requestPermissions = () => {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
    ]);
  };

  const handleTurnOnBTPress = useCallback(async () => {
    const isAllowed = await PermissionsAndroid.check(
      'android.permission.BLUETOOTH_CONNECT',
    );
    if (isAllowed) {
      BluetoothStateManager.requestToEnable();
    } else {
      ToastAndroid.show(
        'Please enable bluetooth permissions in settings',
        ToastAndroid.SHORT,
      );
    }
  }, []);

  const handleTurnOffBTPress = useCallback(async () => {
    BluetoothStateManager.openSettings();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.stateCommon}>
        Bluetooth is{' '}
        <Text style={isBluetoothOn ? styles.on : styles.off}>
          {isBluetoothOn ? 'ON' : 'OFF'}
        </Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <Button title="Turn on BT" onPress={handleTurnOnBTPress} />
        <Button title="Turn off BT" onPress={handleTurnOffBTPress} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    rowGap: 32,
  },
  on: {
    color: 'green',
  },
  off: {
    color: 'red',
  },
  stateCommon: {
    fontSize: 36,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 16,
  },
});

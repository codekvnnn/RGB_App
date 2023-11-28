// BluetoothService.js

import { BleManager } from 'react-native-ble-plx';

class BluetoothService {
  constructor() {
    this.manager = new BleManager();
  }

  async connectToDevice(deviceId) {
    try {
      const device = await this.manager.connectToDevice(deviceId);
      await device.discoverAllServicesAndCharacteristics();
      console.log('Connected to device');
      return device;
    } catch (error) {
      console.error('Connection error:', error);
      throw error;
    }
  }

  // more methods as needed for communication with the RGB light
}

export default new BluetoothService();

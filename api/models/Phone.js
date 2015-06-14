/**
* Phones.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    id : { type: 'string' },
    age : { type: 'integer' },
    name : { type: 'string' },
    imageUrl: { type: 'string' },
    snippet : { type: 'string' },
    additionalFeatures: { type: 'string' },
    androidOs: { type: 'string' },
    androidUi: { type: 'string' },
    availability: { type: 'string' },
    standbyTime: { type: 'string' },
    talkTime: { type: 'string' },
    batteryType: { type: 'string' },
    cameraFeatures: { type: 'string' },
    cameraPrimary: { type: 'string' },
    bluetooth: { type: 'string' },
    cell: { type: 'string' },
    gps: { type: 'boolean'},
    infrared: { type: 'boolean'},
    wifi: { type: 'string' },
    description: { type: 'string' },
    screenResolution: { type: 'string' },
    screenSize: { type: 'string' },
    touchScreen: { type: 'boolean'},
    accelerometer: { type: 'boolean'},
    audioJack: { type: 'string' },
    cpu: { type: 'string' },
    fmRadio: { type: 'boolean'},
    physicalKeyboard: { type: 'boolean'},
    usb: { type: 'string' },
    images: { type: 'string' },
    dimensions: { type: 'string' },
    weight: { type: 'string' },
    flash: { type: 'string' },
    ram: { type: 'string' }
  }
};


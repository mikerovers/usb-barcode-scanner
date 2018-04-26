# Typed usb-barcode scanner
A typed library for using USB barcode scanners in Node.js with support for Typescript.

<span style="color:red">On Linux and Mac, you have to run your application with root privileges.</span>

## Intallation
You can install this package by running the following command:
``` bash
npm i usb-barcode-scanner --save
```
Or using yarn:
``` bash
yarn add usb-barcode-scanner
```

## Usage Typescript

You can list all devices using the following code:
``` typescript
import { getDevices } from 'usb-barcode-scanner';

console.log(getDevices());
```

``` typescript
import { UsbScanner } from 'usb-barcode-scanner';

let scanner = new UsbScanner({
    vendorId: 1155,
    productId: 22352
    /** You could also initialize the scanner by giving entering the path variable:
     *  path: 'IOService:/AppleACPI etc...'
    **/  
});

scanner.on('data', (data) => {
    console.log(data);
});

scanner.startScanning();
```

To stop scanning, you can use:
``` typescript
scanner.stopScanning();
```

## Usage Vanilla JS
You can list all devices using the following code:
``` javascript
let getDevices = require('usb-barcode-scanner').getDevices;

console.log(getDevices());
```

``` javascript
let UsbScanner = require('usb-barcode-scanner').UsbScanner;

let scanner = new UsbScanner({
    vendorId: 1155,
    productId: 22352
});

scanner.on('data', (data) => {
    console.log(data);
});

scanner.startScanning();
```

To stop scanning, you can use:
``` typescript
scanner.stopScanning();
```
import { Device, devices } from 'node-hid';
import _ from 'lodash';

export function getDevices(): Device[] {
    return devices();
}

export function getDevice(vendorId: number, productId: number): Device|undefined {
    return _.find(getDevices(), { 'vendorId': vendorId, 'productId': productId });
}

export function getDeviceByPath(path: string): Device|undefined {
    return _.find(getDevices(), { 'path': path });
}


/**
 * Keyboard keycodes defined in USB HID Usage Tables specification
 * https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf
 * Page 53
 *
 * Map is
 *
 *     Usage Id (Decimal) : {
 *          unmodified: "<unmodified US english character>",
 *          shift: "<shift modified US english character>"
 *     }
 */
export function defaultHidMap(): Object {
    return {
        4: {
            unmodified: "a",
            shift: "A"
        },
        5: {
            unmodified: "b",
            shift: "B"
        },
        6: {
            unmodified: "c",
            shift: "C"
        },
        7: {
            unmodified: "d",
            shift: "D"
        },
        8: {
            unmodified: "e",
            shift: "E"
        },
        9: {
            unmodified: "f",
            shift: "F"
        },
        10: {
            unmodified: "g",
            shift: "G"
        },
        11: {
            unmodified: "h",
            shift: "H"
        },
        12: {
            unmodified: "i",
            shift: "I"
        },
        13: {
            unmodified: "j",
            shift: "J"
        },
        14: {
            unmodified: "k",
            shift: "K"
        },
        15: {
            unmodified: "l",
            shift: "L"
        },
        16: {
            unmodified: "m",
            shift: "M"
        },
        17: {
            unmodified: "n",
            shift: "N"
        },
        18: {
            unmodified: "o",
            shift: "O"
        },
        19: {
            unmodified: "p",
            shift: "P"
        },
        20: {
            unmodified: "q",
            shift: "Q"
        },
        21: {
            unmodified: "r",
            shift: "R"
        },
        22: {
            unmodified: "s",
            shift: "S"
        },
        23: {
            unmodified: "t",
            shift: "T"
        },
        24: {
            unmodified: "u",
            shift: "U"
        },
        25: {
            unmodified: "v",
            shift: "V"
        },
        26: {
            unmodified: "w",
            shift: "W"
        },
        27: {
            unmodified: "x",
            shift: "X"
        },
        28: {
            unmodified: "y",
            shift: "Y"
        },
        29: {
            unmodified: "z",
            shift: "Z"
        },
        30: {
            unmodified: "1",
            shift: "!"
        },
        31: {
            unmodified: "2",
            shift: "@"
        },
        32: {
            unmodified: "3",
            shift: "#"
        },
        33: {
            unmodified: "4",
            shift: "$"
        },
        34: {
            unmodified: "5",
            shift: "%"
        },
        35: {
            unmodified: "6",
            shift: "^"
        },
        36: {
            unmodified: "7",
            shift: "&"
        },
        37: {
            unmodified: "8",
            shift: "*"
        },
        38: {
            unmodified: "9",
            shift: "("
        },
        39: {
            unmodified: "0",
            shift: ")"
        },
        40: {
            unmodified: "enter"
        },
        43: {
            unmodified: "\t",
        },
        44: {
            unmodified: " "
        },
        45: {
            unmodified: "-",
            shift: "_"
        },
        46: {
            unmodified: "=",
            shift: "+"
        },
        47: {
            unmodified: "[",
            shift: "{"
        },
        48: {
            unmodified: "]",
            shift: "}"
        },
        49: {
            unmodified: "\\",
            shift: "|"
        },
        51: {
            unmodified: ";",
            shift: ":"
        },
        52: {
            unmodified: "'",
            shift: "\""
        },
        53: {
            unmodified: "`",
            shift: "~"
        },
        54: {
            unmodified: ",",
            shift: "<"
        },
        55: {
            unmodified: ".",
            shift: ">"
        },
        56: {
            unmodified: "/",
            shift: "?"
        },
        85: {
            unmodified: "*",
        },
        87: {
            unmodified: "+"
        }
    }
}
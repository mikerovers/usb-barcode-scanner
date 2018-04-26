export interface UsbScannerOptions {
    vendorId?: number,
    productId?: number,
    path?: string
}

export interface onDataScanned {
    on(event: string, listener: Function): this;
}

export interface HidMap {
    code: number,
    value: string
}

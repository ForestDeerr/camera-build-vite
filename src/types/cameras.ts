
export type CameraType = {
id: number;
name: string;
vendorCode: string;
type: enum;
category: enum;
description: string;
level: enum;
price: number;
rating: number;
reviewCount: number;
previewImg: string;
previewImg2x: string;
previewImgWebp: string;
previewImgWebp2x: string;
}

export type CamerasType = CameraType[];

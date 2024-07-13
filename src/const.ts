export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
}

export enum Characteristics {
  vendorCode = 'Артикул',
  category = 'Категория',
  type = 'Тип камеры',
  level = 'Уровень'
}

export enum categoryCamera {
  photocamera = 'Фотоаппарат',
  videocamera = 'Видеокамера',
}

export enum filterType {
  digital = 'Цифровая',
  film = 'Плёночная',
  snapshot = 'Моментальная',
  collection = 'Коллекционная'
}

export enum filterLevel {
  zero = 'Нулевой',
  professional = 'Профессиональный',
  nonprofessional = 'Любительский',
}

export const activeFiltersTypeDefault = {
  digital: false,
  film: false,
  snapshot: false,
  collection: false,
};

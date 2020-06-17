export const API_ENDPOINT = 'http://localhost:3000';

export const STATUSES = [
  {
    value: 0,
    // label: "USER CẦN THÊM"
    // label: 'READY',
    label: 'NORMAL',
  },
  {
    value: 1,
    // label: "USER ĐANG CHỜ DUYỆT"
    // label: 'IN PROGRESS',
    label: 'VIP',
  },
  {
    value: 2,
    // label: "USER ĐÃ THÊM THÀNH CÔNG"
    // label: 'COMPLETED',
    label: 'ADMIN',
  },
];

export const STATUES_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

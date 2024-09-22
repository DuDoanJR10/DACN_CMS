import configs from 'configs';
import { FaFolderClosed, FaHouse, FaLayerGroup } from 'react-icons/fa6';
import { NavParams } from 'types/common';

const nav: NavParams[] = [
  { key: 0, label: 'Trang chủ', url: configs.routes.home, Icon: FaHouse },
  { key: 1, label: 'Danh mục', url: configs.routes.category, Icon: FaLayerGroup },
  { key: 2, label: 'Hoá đơn', url: configs.routes.bill, Icon: FaFolderClosed },
];

export default nav;

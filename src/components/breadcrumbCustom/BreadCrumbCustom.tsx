import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const breadcrumbNameMap: { [name: string]: string } = {
  '/': 'Trang chủ',
  '/category': 'Danh mục',
  '/bill': 'Đơn hàng',
};

const BreadCrumbCustom = () => {
  const { pathname } = useLocation();
  const pathSnippets = pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    let styles = {};

    if (index === pathSnippets.length - 1) {
      styles = { color: '#20BEC6' };
    }

    return (
      <Breadcrumb.Item key={url}>
        <Link style={{ fontSize: '14px', color: '#708180', fontWeight: 600, ...styles }} to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link style={{ fontSize: '14px', color: '#708180', fontWeight: 600 }} to="/">
        Trang chủ
      </Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <div>
      <Breadcrumb separator={<RightOutlined />}>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};

export default BreadCrumbCustom;

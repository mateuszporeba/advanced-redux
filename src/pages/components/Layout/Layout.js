import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader toogleCartComponent={() => props.toogleCartComponent()}/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

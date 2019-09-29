import React from 'react';
import './Header.scss';
import SidePanel from 'components/SidePanel';
import {headerNavi} from './navi'

interface HeaderProps {
}

interface HeaderState {
  selected: number;
}

function ListNavi(props:any) {
  const items = props.data;
  const li = items.map((item:any) =>
    <a href={item.url} key={item.name} className='nav-list'>{item.name}
      <span></span><span></span>
    </a>
  );
  return li;
}


class Header extends React.Component<HeaderProps, HeaderState> {
  constructor (props:HeaderProps){
    super(props);
    this.state = {selected: 1};
  }

  render() {
    return (
      <div className='header'>
        <SidePanel />
        <div className='nav'>
          <ListNavi data={headerNavi} />
        </div>
      </div>
    );
  }
}

export default Header;

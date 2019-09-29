import React, { useState }  from 'react';
import './SidePanel.scss';
import {demo} from './demo'

interface SidePanelProps {
  name?: string;
}
interface State {
  isOpen: boolean;
}

function ListNavi(props:any) {
  const items = props.data;
  const li = items.map((item:any) =>
    <a href={item.url} key={item.name}>
      <li className='sidepanel'>{item.name}</li>
    </a>
  );
  return li;
}

class SidePanel extends React.Component<SidePanelProps, State> {
  constructor (props:SidePanelProps){
    super(props);
    this.state = {isOpen: false};
    this.openClick = this.openClick.bind(this);
    this.closeClick = this.closeClick.bind(this);
  }
  openClick() {
    this.setState(state => ({isOpen: true}));
  }
  closeClick(){
    this.setState(state => ({isOpen: false}));
  }
  render(){
    return (
      <div >
        <div className='holder'>
          <label className="labelMenu" onClick={this.openClick}>
          <i className="material-icons">menu</i>
          </label>
        </div>
        <div className={this.state.isOpen ? 'menu-open':'menu-close'}>
          <nav className='menu'>
            <ul className='sidepanel'>
              <ListNavi data={demo} />
            </ul>
          </nav>
        </div>
        <div className={this.state.isOpen ? 'opacMenu':''} onClick={this.closeClick} ></div>
      </div>
    );
  }
}
export default SidePanel;

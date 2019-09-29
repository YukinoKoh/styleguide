import React from 'react';
import SidePanel from 'components/SidePanel';
import Header from 'components/Header';
import './Page.scss';

interface IProps {
  title: string | undefined;
  children?: any;
}

const Page: React.FC<IProps> = (props: IProps) => (
  <div className='pageLayout'>
    <Header />
    <div className='contentArea'>
      <div className='content'>
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </div>
  </div>
);

export default Page;

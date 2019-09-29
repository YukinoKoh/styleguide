import React from 'react';
import Page from 'layouts/Page';
import './Home.scss';


interface IProps {
  title?: string;
}

interface IState {}

class Home extends React.Component<IProps, IState> {
  static defaultProps = {
    title: 'Sample'
  };

  render() {
    return (
      <Page title={this.props.title}>
        <div>hello</div>
      </Page>
    );
  }
}

export default Home;

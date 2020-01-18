import React from 'react';
import App from 'next/app';
import UserContext from '../src/context/context';

export default class MyApp extends App {
  state = {
    category: 'home'
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider
        value={{
          state: {
            category: this.state.category
          }
        }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}

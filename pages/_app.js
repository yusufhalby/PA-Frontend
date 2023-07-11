import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from 'react';
import './app.css'

import PageChange from "components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "./styles.css"
import "../components/Maps/newmap.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  state = {
    // isAuth: this.props.obj.isAuth || false,
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null
  };

  

  componentDidMount() {
    
if (typeof window !== 'undefined') {
      console.log("client");
      const token = localStorage.getItem('token');
      const expiryDate = localStorage.getItem('expiryDate');
      if (!token || !expiryDate) {
        return;
      }
      if (new Date(expiryDate) <= new Date()) {
        this.logoutHandler();
        return;
      }
      const userId = localStorage.getItem('userId');
      const remainingMilliseconds =
        new Date(expiryDate).getTime() - new Date().getTime();
      this.setState({ isAuth: true, token: token, userId: userId });
      this.setAutoLogout(remainingMilliseconds);
    }else{console.log("server");}
    let comment = document.createComment(`

=========================================================
* Copyright 2023 Yusuf Halby 
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
    Router.push('/landing');
  };

  loginHandler = (event, authData) =>
  {
    console.log("logging in")
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch("https://pa-api.onrender.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error("Validation failed.");
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw new Error("Could not authenticate you!");
        }
        console.log("logged in");
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        this.setState({
          isAuth: true,
          token: resData.token,
          authLoading: false,
          userId: resData.userId,
        });
        localStorage.setItem("token", resData.token);
        localStorage.setItem("userId", resData.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
        Router.push("/admin/dashboard");
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err,
        });
      });
  };

  signupHandler = (event, authData) => {
    // console.log(authData);
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch('http://localhost:8080/auth/signup', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        name: authData.name,
        password: authData.password,
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Creating a user failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({ isAuth: false, authLoading: false });
          Router.push('/auth/login');
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
  };

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };


  render() {
    const { Component, pageProps } = this.props;
    if (typeof window !== 'undefined') {console.log("serverrrr");}else{console.log("clienttt");}
    const Layout = Component.layout || (({ children }) => <>{children}</>);
    console.log(this.state);
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Web based PA</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXgm7aW2thkA1lZaYiPmYH3Ve2Diay8pM"></script>
        </Head>
        <Layout>
          <Component {...pageProps}
          authData= {this.state}
          onLogin = {this.loginHandler}          
          onSignup={this.signupHandler}
          onLogout={this.logoutHandler}
          loading={this.state.authLoading}          
          />
        </Layout>
      </React.Fragment>
    );
  }
}


// export default () =>{
//   useEffect(() => {
//   const token = localStorage.getItem('token') || null;
//   const expiryDate = localStorage.getItem('expiryDate') || null;
//   const userId = localStorage.getItem('userId') || null;
//   const isAuth = false;
//   if(token) isAuth = true;
//   const obj ={token, expiryDate, userId, isAuth};
//   return(
//     <MyApp obj={obj} />
//   )
// }, []);
// return null;
// }
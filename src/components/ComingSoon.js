import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Description from "./Description";
import Links from "./Links";
import Countdown from "./Countdown";
import Subscribe from "./Subscribe";
import logo from "../images/gear-with-holes.svg";
import xmark from "../images/x-mark.svg";
import check from "../images/check-mark.svg";
import facebook from "../images/fbookicon.svg";
import MessengerCustomerChat from "react-messenger-customer-chat";

import "../styles/ComingSoon.css";

class ComingSoon extends Component {
  state = {
    countdown: {
      countdownDate: "2023-05-12 18:30:00",
    },
    logo: {
      alt: "Spinning Gear",
      src: logo,
      spinSpeed: "slow",
    },
    title: {
      text: "Coming Soon!",
    },
    description: {
      text: "MTAGC 15th Anniversary",
    },
    subscribe: {
      placeholder: "Nhập Email để nhận thông báo mới nhất!",
      buttonText: "Submit",
    },
    links: [
      {
        url: "https://www.facebook.com/MTAGC",
        logo: facebook,
        text: "Theo dõi",
      },
    ],
    notification: {
      src: "",
      alt: "",
      message: "",
      visible: false,
      level: "",
    },
  };

  configureNotification = (obj) => {
    const notification = { ...this.state.notification };
    notification.message = obj.body.msg;
    if (obj.status === 200) {
      notification.src = check;
      notification.alt = "Check Mark";
      notification.level = "success";
    } else {
      notification.src = xmark;
      notification.alt = "X Mark";
      notification.level = "error";
    }
    this.setState({ notification });
  };

  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 3000);
    });
  };

  changeLogoSpeed = () => {
    const logo = { ...this.state.logo };
    logo.spinSpeed = "fast";
    this.setState({ logo }, () => {
      setTimeout(() => {
        logo.spinSpeed = "slow";
        this.setState({ logo });
      }, 1000);
    });
  };

  render() {
    const {
      title,
      description,
      logo,
      subscribe,
      links,
      countdown,
      notification,
    } = this.state;

    return (
      <div className="background">
        <Countdown countdownDate={countdown.countdownDate} />
        <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} />
        <Title text={title.text} />
        <Description
          text={description.text}
          src={notification.src}
          alt={notification.alt}
          message={notification.message}
          visible={notification.visible}
          level={notification.level}
        />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
          changeLogoSpeed={this.changeLogoSpeed}
          configureNotification={this.configureNotification}
          showNotification={this.showNotification}
        />
        <Links links={links} />
        <MessengerCustomerChat
          pageId="280691181957056"
          appId="757488145614475"
        />
      </div>
    );
  }
}

export default ComingSoon;

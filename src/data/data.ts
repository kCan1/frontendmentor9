import IconList from "../assets/images/icon-list.svg";
import IconSuccess from "../assets/images/icon-success.svg";
import Favicon from "../assets/images/favicon.png";
import IllDesk from "../assets/images/illustration-sign-up-desktop.svg";
import IllMobile from "../assets/images/illustration-sign-up-mobile.svg";
import IllTablet from "../assets/images/illustration-sign-up-tablet.svg";

export const signupCard = {
  title: "Stay updated!",
  description: "Join 60,000+ product managers receiving monthly updates on:",
  features: {
    feature1: "Product discovery and building what matters",
    feature2: "Measuring to ensure updates are a success",
    feature3: "And much more!",
  },
  images: {
    iconList: IconList,
    iconSuccess: IconSuccess,
    favicon: Favicon,
    illDesk: IllDesk,
    illMobile: IllMobile,
    illTablet: IllTablet,
  },
  button: {
    text1: "Subscribe to monthly newsletter",
    text2: "Dismiss message",
  },

  successMessage: {
    text: "Thanks for subscribing!",
    description: `A confirmation email has been sent to ash@loremcompany.com. 
  Please open it and click the button inside to confirm your subscription.`,
  },
};

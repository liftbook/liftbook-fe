/*!

=========================================================
* Material Kit PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.jsx";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.jsx";
import SectionCards from "views/PresentationPage/Sections/SectionCards.jsx";
import SectionContent from "views/PresentationPage/Sections/SectionContent.jsx";
import SectionSections from "views/PresentationPage/Sections/SectionSections.jsx";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.jsx";
import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.jsx";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.jsx";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.jsx";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";

class PresentationPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button type="button" color="primary" />
      </div>
    );
  }
}

PresentationPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(presentationStyle)(PresentationPage);

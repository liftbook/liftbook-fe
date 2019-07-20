/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getUsers, getUser, deleteExercise, editExercise, getExercises } from "../../actions";


import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props
    }
  }
  render() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div  >
        <GridItem  xs={12} sm={12} md={4}>
          <Card profile >
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={this.state.classes.cardCategory}></h6>
              <h4 className={this.state.classes.cardTitle}>{this.props.user}</h4>
              <p className={this.state.classes.description}>
                {this.props.currentUser.email}
                {this.props.currentUser.username}

              </p>
              <Button color="primary" round onClick={(event) => {this.props.history.push(`/users/${this.props.user}/exercises`)}}>
                Exercise Logs
              </Button>
              <Button color="primary" round onClick={(event) => {this.props.history.push(`/add`)}}>
                Add New Workout
              </Button>
            </CardBody>
          </Card>
        </GridItem>
    </div>
    </div>
  );
}

}
const mapState = state => ({
  isLoggedIn: state.isLoggedIn,
  currentUser: state.currentUser
});

UserProfile.propTypes = {
  classes: PropTypes.object
};
export default withStyles(styles)(withRouter(connect(mapState, {getUser, getExercises, deleteExercise, editExercise})(UserProfile)))


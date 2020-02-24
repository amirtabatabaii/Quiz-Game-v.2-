import React, { Component } from "react";

import Radium, { StyleRoot } from "radium";
import { CardDeck, Card, Button } from "react-bootstrap";
import { bounceIn } from "react-animations";
import { Radio } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/index";

import Cards from "./Cards";
import mainImage from "../../img/main.jpg";
import "antd/dist/antd.css";

const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounceIn, "bounceIn")
  }
};

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_category: "",
      user_difficulty: "",
      user_API: "",
      index: 0
    };
  }

  onChangeDifficulty = e => {
    this.setState({ user_difficulty: e.target.value });
  };

  onChangeCategory = e => {
    this.setState({ user_category: e.target.value });
  };

  Difficulty = (
    <Radio.Group onChange={this.onChangeDifficulty} defaultValue='medium'>
      <Radio.Button value='easy'>Easy</Radio.Button>
      <br />
      <Radio.Button value='medium'>Medium</Radio.Button>
      <br />
      <Radio.Button value='hard'>Hard</Radio.Button>
    </Radio.Group>
  );

  Category = (
    <Radio.Group onChange={this.onChangeCategory} defaultValue='18'>
      <Radio.Button value='9'>General</Radio.Button>
      <br />
      <Radio.Button value='18'>Computer</Radio.Button>
      <br />
      <Radio.Button value='12'>Music</Radio.Button>
    </Radio.Group>
  );

  About = (
    <div>
      <p>
        If your answer is True you give 100 point, and If your answer is False
        the game is end!
      </p>
      <strong>Enjoy The Game...</strong>
    </div>
  );

  handleClick = () => {
    const { user_category, user_difficulty } = this.state;
    //this.props.history.push("/home");
    this.props.history.replace("/home");

    this.props.fetchApi(
      `https://opentdb.com/api.php?amount=10&category=${
        user_category.length > 0 ? user_category : "18"
      }&difficulty=${
        user_difficulty.length > 0 ? user_difficulty : "medium"
      }&type=multiple`,
      this.state.index
    );
  };

  render() {
    return (
      <React.Fragment>
        <StyleRoot>
          <div
            className='site-blocks-cover overlay'
            style={{ backgroundImage: `url(${mainImage})` }}>
            <div className='container'>
              <div
                className='row align-items-center justify-content-center'
                style={styles.bounce}>
                <Card className='text-center'>
                  <Card.Header className='bg-info h3 font-weight-bold text-white'>
                    QUIZ GAME
                  </Card.Header>
                  <Card.Body>
                    <CardDeck>
                      <Cards
                        border='success'
                        bg=''
                        headerStyle='bg-success font-weight-bold h5'
                        header='Difficulty Selection'
                        title='Select Quiz Difficulty'
                        body={this.Difficulty}
                      />

                      <Cards
                        border='primary'
                        bg=''
                        headerStyle='bg-primary font-weight-bold h5'
                        header='Category Options'
                        title='Select Quiz Category'
                        body={this.Category}
                      />

                      <Cards
                        border='warning'
                        bg=''
                        headerStyle='bg-warning font-weight-bold h5'
                        header='About'
                        title='QUIZ GAME'
                        body={this.About}
                      />
                    </CardDeck>
                  </Card.Body>
                  <Card.Footer>
                    <Link to='/home'>
                      <Button
                        type='button'
                        onClick={this.handleClick}
                        variant='info btn-lg'>
                        START
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </StyleRoot>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(withRouter(Welcome));

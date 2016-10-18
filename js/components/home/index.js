
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, InputGroup, Input, Text, Button, Icon } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute, pushNewRoute, setPageHeader } from '../../actions/route';
import { setIndex, setList } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import * as API from '../../OpenWeatherApi';


class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
    cityList: React.PropTypes.arrayOf(React.PropTypes.object),
    addCity: React.PropTypes.func,
    setPageHeader: React.PropTypes.func,

  }

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    };
  }


  // getNewList(argument) {
  //   return fetch('http://www.mocky.io/v2/57f4d8b2250000130f134853')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.props.setList(responseJson.list);
  //       return;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  pushNewRoute(route, index) {
    this.props.setIndex(index);
    this.props.setPageHeader('Header for ' + this.props.cityList[index].name);
    this.props.pushNewRoute(route);
  }

  addCity() {
    console.log(this.state.cityName);
    API.getCity(this.state.cityName)
      .then(city => this.props.addCity(city)
      );
    this.setState(cityName: '');
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceRoute('login')}>
            <Icon name="ios-power" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <InputGroup>
            <Input
              placeHolder='Input city'
              onChangeText={name => this.setState({ cityName: name })}
              />
          </InputGroup>
          <Button block info onPress={() => this.addCity()}>Search</Button>
          <Grid style={styles.mt}>
            {this.props.cityList.map((item, i) =>
              <Row key={i}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => this.pushNewRoute('blankPage', i)}
                  >
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </Row>
            )}
          </Grid>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
    addCity: city => dispatch(addCity(city)),
    setPageHeader: pageHeader => dispatch(setPageHeader(pageHeader)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    cityList: state.list.cityList,
  };
}

export default connect(mapStateToProps, bindAction)(Home);

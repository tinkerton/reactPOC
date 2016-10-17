
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, InputGroup, Input, List, ListItem } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { updateListItem } from '../../actions/list';
import styles from './styles';

class BlankPage extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    pageHeader: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.object),
    updateListItem: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  saveMyForm() {
    let formData ={};
    formData.name = this.state.name;
    formData.id = this.state.id;
    this.props.updateListItem(formData);
    this.popRoute()
    }

  render() {
    const { props: { pageHeader, index, list } } = this;

    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(pageHeader) ? this.props.pageHeader : 'Blank Page'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <List>
            <ListItem>
              <InputGroup style={styles.input}>

                <Input placeholder={list[index].name} inlineLabel label='NAME' onChangeText={name => this.setState({ name })} />
              </InputGroup>
              </ListItem>
            <ListItem>
              <InputGroup>
                  <Input placeholder={list[index].id}  inlineLabel label='ID' onChangeText={id => this.setState({ id })}/>
              </InputGroup>
            </ListItem>
          </List>


          <Button block iconRight onPress={() => this.saveMyForm()} >
              <Icon name='ios-arrow-forward'/>
              Save
          </Button>
          {/* <Text>
            {(!isNaN(index)) ? list[index].name : 'Create Something Awesome . . .'}
          </Text>*/}
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
    updateListItem: formDataItem => dispatch(updateListItem(formDataItem)),
  };
}

function mapStateToProps(state) {
  return {
    pageHeader: state.route.pageHeader,
    index: state.list.selectedIndex,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(BlankPage);

import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import ListItemBase from './ListItemBase';
let address = 'http://www.cjlly.com:3041/record ';
let data=[]
export default class TopMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], albums: []};
    this.baseData=[];
  }
  componentDidMount() {
    fetch(address, {method: 'GET'})
      .then((resp) => resp.json())
      .then((albums) => {
        this.setState({albums})
        console.log('!!!')
        data=albums
      })
  }
  goMusicPlayer=(itemInfo)=>{
    this.props.MusicNavigation.navigate('MusicPlayer',{musicInfo:itemInfo})
  }

  _delete = (item) => {
    let albums = this.state.albums.splice(0);
    let index = albums.indexOf(item);
    albums.splice(index, 1);
    this.setState({albums:albums});
    console.log(data)
  };



  _renderItem = ({item, index}) => {
    return <ListItemBase itemInfo={item} delItem={() => this._delete(item)} goPlayer={()=>this.goMusicPlayer(item)}/>;
  };
  _ItemSeparatorComponent = () => {
    return <View style={{height: 1, backgroundColor: '#ffffff'}} />;
  };
  _refresh = () => {
  };
  _endReached = () => {

  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.albums}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>加载中</Text>}
          ItemSeparatorComponent={this._ItemSeparatorComponent}
          refreshing={false}
          onRefresh={this._refresh}
          onEndReachedThreshold={0.2}
          onEndReached={this._endReached}
        />
      </View>
    );
  }
}

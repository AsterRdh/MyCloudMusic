
import React, {Component} from 'react';
import {TextInput, View, Text, Image, StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
let navigation = null;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {music:[]};
        navigation = this.props.MusicNavigation.route.params.musicInfo;
    }
    getAllSinger(singer){
        let singerR='';
        let len=singer.length;
        for(let i=0;i<len;i++){
            singerR+=singer[i]+'/';
        }
        if(len=1)
            return singer;
        else
            return singerR;
    }


    render() {
        return (
            <View style={{paddingTop:20}} >
                <View style={{justifyContent: 'center',padding:5,width: MainWidth}}>
                    <Image style={itemStyles.infoImageStyle}
                                source={{uri:navigation.img}}/>
                    <Text style={{fontSize:40,textAlign: 'center'}}>{navigation.name}</Text>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'#5a5a5a',textAlign: 'center',width:MainWidth/3*2}} ellipsizeMode={'tail'} numberOfLines={2}>{this.getAllSinger(navigation.singer)}</Text>
                    </View>
                    <View style={itemStyles.InfoImageView}>
                        <TouchableOpacity style={{borderColor:'#000000',borderWidth:1,borderRadius:3,paddingStart:3,paddingEnd:3,margin:3}}>
                            <Text >HQ v </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderColor:'#000000',borderWidth:1,borderRadius:3,paddingStart:3,paddingEnd:3,margin:3}}>
                            <Text>音效:off</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={{borderColor:'#000000',borderWidth:1,borderRadius:3,paddingStart:3,paddingEnd:3,margin:3}}>
                            <Text>AI模式</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={itemStyles.InfoImageView2}>
                    <TouchableOpacity style={{paddingStart:3,paddingEnd:3,margin:3}}>
                        <Image style={itemStyles.imageStyle3} source={require('./src/images/roll.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingStart:3,paddingEnd:3,margin:3}}>
                        <Image style={itemStyles.imageStyle2} source={require('./src/images/last.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingStart:3,paddingEnd:3,margin:3}}>
                        <Image style={itemStyles.imageStyle} source={require('./src/images/play.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingStart:3,paddingEnd:3,margin:3}}>
                        <Image style={itemStyles.imageStyle2} source={require('./src/images/next.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingStart:3,paddingEnd:3,margin:3}}>
                        <Image style={itemStyles.imageStyle3} source={require('./src/images/like.png')} />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
let MainHeight = Dimensions.get('window').height;
let MainWidth = Dimensions.get('window').width;
let itemStyles = StyleSheet.create({
    infoImageStyle:{
        borderRadius:5,
        margin: 5,
        height: 300,
        resizeMode: 'contain',
    },
    InfoImageView:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    InfoImageView2:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
        alignItems:'flex-end'
    },
    imageStyle:{
        height: 70,
        width:70,
        resizeMode: 'contain',
    },
    imageStyle2:{
        height: 50,
        width:50,
        resizeMode: 'contain',
    },
    imageStyle3:{
        height: 30,
        width:30,
        resizeMode: 'contain',
    }
});

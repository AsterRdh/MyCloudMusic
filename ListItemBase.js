import React, {Component} from 'react';
import {View,Text, StyleSheet,TouchableOpacity,Slider,Image } from 'react-native';

export default class ListItemBase extends Component {
    constructor(props) {
        super(props);
        this.state={};
        this.myFontSize=50
        this.myTextColor='#000000'
        this.toint();
    }
    toint=()=> {
        if(this.props.itemInfo.id<4) {
            this.myFontSize=30+(this.props.itemInfo.id*-1)*2
            this.myTextColor='#e2603e'
        }else {
            this.myFontSize=20
            this.myTextColor='#000000'
        }
    }

    getAllSinger(singer){
        let singerR='';
        let len=singer.length;
        for(let i=0;i<len;i++){
            singerR+=singer[i]+'/';
        }
        return singerR;
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>this.props.goPlayer()}>
                    <View style={itemStyles.container}>
                        <View style={itemStyles.itemInfoViewStyle}>
                            <View style={{justifyContent: 'center',padding:5}}>
                                <Text style={{color:this.myTextColor,fontSize:this.myFontSize,width: 25,textAlign: 'center',}}>{this.props.itemInfo.id}</Text>
                            </View>
                            <Image
                                style={itemStyles.infoImageStyle}
                                source={{uri:this.props.itemInfo.img}}/>
                            <View style={{flex:1}}>
                                <Text style={itemStyles.infoTextStyle} ellipsizeMode={'tail'} numberOfLines={1}>{this.props.itemInfo.name}</Text>
                                <Text style={itemStyles.singerTextStyle}  ellipsizeMode={'tail'} numberOfLines={2}>{this.getAllSinger(this.props.itemInfo.singer)}</Text>
                            </View>
                        </View>
                        <View style={itemStyles.ButtonViewStyle}>
                            <TouchableOpacity style={itemStyles.buttonStyle} onPress={()=>this.props.delItem()}>
                                <Text style={itemStyles.buttonTextStyle}>删除</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={itemStyles.button2Style}>
                                <Text style={itemStyles.buttonTextStyle}>购买</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
let itemStyles = StyleSheet.create({
    container: {
        margin:2,
        borderRadius:5,
        flexDirection: 'row',
        height: 100,
        backgroundColor: "#ffffff"
    },
    itemInfoViewStyle:{
        flexDirection: 'row',
        flex:0.8,
    },
    ButtonViewStyle:{
        flex: 0.2,
    },
    buttonStyle:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        flex:1,
        marginTop:5,
        marginBottom:1,
        marginEnd:5,
        backgroundColor:'#923922',
    },
    button2Style:{
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        flex:1,
        marginTop:1,
        marginBottom:5,
        marginEnd:5,
        backgroundColor:'#923922',
    },
    buttonTextStyle:{
        textAlign: 'center',
        fontSize:30,
        color:'#ffffff'
    },
    infoTextStyle:{
        textAlign: 'left',
        marginTop:5,
        fontSize:24,
        color:'#000000'
    },
    singerTextStyle:{
        textAlign: 'left',
        fontSize:15,
        color:'#000000'
    },
    infoImageStyle:{
        borderRadius:5,
        margin: 5,
        height: 90,
        width:90,
        resizeMode: 'contain',
    }
});

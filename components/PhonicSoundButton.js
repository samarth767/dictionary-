import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Audio} from 'expo-av'

export default class PhonicSoundButton extends React.Component {
    playSound=async soundChunk=>{
        var soundLink='https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/'+ soundChunk +'.mp3';
        await Audio.Sound.createAsync(
            {uri:soundLink},
            {shouldPlay:true}
        )

    }
    render(){
        return(
         <View>
             <TouchableOpacity style={styles.chunkButton} onPress={()=>{
                 this.playSound(this.props.soundChunk)
             }}>
              <Text style={styles.displayText}>{this.props.wordChunk}</Text></TouchableOpacity>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
    },
    displayText: {
      textAlign: 'center',
      fontSize: 30,
    },
    chunkButton: {
      width:200,
      height:100,
      justifyContent:'center',
      alignSelf:'center',
      borderRadius:20,
      margin:20,
      backgroundColor:'red'
    }
  });
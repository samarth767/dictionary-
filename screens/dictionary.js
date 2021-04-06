import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import PhonicSoundButton from './components/PhonicSoundButton';
import db from './LocalDb'

export default class Dictionary extends React.Component {
constructor() {
    super();
    this.state = {
      text: '',
      Chunks:[],
      phonicSounds:[]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word=this.state.text.toLowerCase().trim();
            db[word]?
            (
            this.setState({ Chunks: db[word].chunks }),
            this.setState({phonicSounds: db[word].phones}))
          :alert("the word does not exist in our database");  
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.Chunks.map((item,index)=>{
            return (
              <PhonicSoundButton
              wordChunk={this.state.Chunks[index]}
              soundChunk={this.state.phonicSounds[index]}
              />
            )
            
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

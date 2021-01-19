import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Sound from 'react-native-sound';

export default class MovieList extends Component {

    sound = new Sound('./music/intro.mp3');
    
    playSound = () => {
        this.sound.setPan(1)
        this.sound.setVolume(1)
        this.sound.play()
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.playSound}>
                    <View>
                        <Text>Start</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
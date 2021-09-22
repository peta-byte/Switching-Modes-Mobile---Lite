import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLightbulb, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const modes = {
    light: {
        bulb: 'indigo',
        bg: '#ffffff',
        btn: 'pink'
    },
    dark: {
        bulb: '#fff133',
        bg: '#002647',
        btn: 'red'
    },
};

const Home = (props) => {
    const [currentMode, setMode] = useState(modes.light.bg);
    const [bulbColor, setBulbColor] = useState(modes.light.bulb);
    const [btnColor, setBtnColor] = useState(modes.light.btn)

    const onBtnClick = () => {
        setMode(currentMode === modes.light.bg ? modes.dark.bg : modes.light.bg);
        setBulbColor(currentMode === modes.light.bg ? modes.dark.bulb : modes.light.bulb);
        setBtnColor(currentMode === modes.light.bg ? modes.dark.btn : modes.light.btn);
    };

    return (
        <View style={{ ...styles.homeView, backgroundColor: currentMode }}>
            <View style={styles.bulbView}>
                <FontAwesomeIcon icon={ faLightbulb } color={ bulbColor } size={ 104 } />
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity onPress={() => { onBtnClick(); }}>
                    <FontAwesomeIcon icon={ faPowerOff } color={ btnColor } size={ 48 } />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeView: {
        height: '100%'
    },
    bulbView: {
        height: '70%', alignItems: 'center', justifyContent: 'center'
    },
    btnView: {
        height: '30%', alignItems: 'center', justifyContent: 'center'
    },
});

export default Home;

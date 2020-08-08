import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

export default function Footer(props) {
    //Traemos Calculate desde App.js
    const {Calculate} = props;
    return(
        <View style = {styles.viewFooter}>
            <TouchableOpacity style = {styles.buttom} onPress = {Calculate}>
                <Text style={styles.text}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter:{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PrimaryColor,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        justifyContent: "center",

    },
    buttom:{
        backgroundColor: colors.SecundaryColor,
        padding: 16,
        borderRadius:20,
        width: "75%",
    },
    text:{
        fontWeight: "bold",
        fontSize: 18,
        color: '#fff',
        textAlign: "center",
    },
})
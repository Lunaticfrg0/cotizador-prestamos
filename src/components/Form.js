import React from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors'

export default function Form(props){

    //Traemos estas propiedades desde App.js
    const {setCapital, setInterest, setMonths} = props;
    
    return(
        <View style = {styles.viewForm}>
            <View style = {styles.viewInputs}>
            <TextInput 
                 placeholder = "Cantidad a pedir"
                 //Automatiza el teclado para presentar el teclado numerico
                 keyboardType = "number-pad"
                 style = {styles.input}
                 //Una vez cambiado el input manda a traves de un event al metodo setX
                 onChange = {(e) => setCapital(e.nativeEvent.text)}
            />
            <TextInput 
                 placeholder = "Interes %"
                 keyboardType = "number-pad"
                 //Colocamos las propiedades detro de un array cuando queremos asignar mas de 1 estilo
                 style ={[styles.input, styles.inputInteres]}
                 onChange = {(e) => setInterest(e.nativeEvent.text)}
            />
            </View>
            <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => setMonths(value)}
            placeholder = {{
                label: 'Seleccione el plazo',
                value: null,
            }}
            items={[
                { label: '3 meses', value: 3 },
                { label: '6 meses', value: 6 },
                { label: '12 meses', value: 12 },
                { label: '24 meses', value: 24 },
                { label: '36 meses', value: 36 },
                { label: '48 meses', value: 48 },
                { label: '60 meses', value: 60 },
                
            ]}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm:{
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.SecundaryColor,
        borderRadius: 30,
        height: 180, 
        justifyContent: "center"
    },
    viewInputs:{
        flexDirection: "row",
    },
    input:{
        height: 50, 
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PrimaryColor,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20,
    },
    inputInteres:{
        width: "40%",
        marginLeft: 5,
    }
});

const pickerSelectStyles = StyleSheet.create({
    inpuIOS:{
        fontSize:16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor:'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft:-5,
        marginRight: 5,

    },
    inputAndroid:{
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: 'black',
        paddingRight:30,
    }
})

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import Form from './src/components/Form';
import colors from './src/utils/colors';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';

export default function App(){
  //Hoocks de estados que almacenan y modifican los valores de los inputs
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=>{
    
    if(capital && interest && months){
      Calculate();
    }
    else{
      reset();
    }
  },[capital, interest, months])

const Calculate = () => {
    reset();

    if (!capital){
      setErrorMessage("Añada la cantidad que quiera depositar");
    }
    else if (!interest){
      setErrorMessage("Añada la tasa de interes con la cual quiera solicitar el prestamo");
    }
    else if (!months){
      setErrorMessage("Seleccione la cantidad de meses");
    }
    else{
      const i = interest/100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalFee: ((fee*months).toFixed(2))
      })
    }
};

  const reset = () =>{
    setErrorMessage ('');
    setTotal(null);

  }

  return(
    // Como return solo recibe una etiqueta le hacemos wrap a todas en una vacia, puesto que View, por si sola, causa problemas
    <>
      <StatusBar barStyle="ligth-content"/>

      <SafeAreaView style={styles.safeArea}>
      <View style= {styles.background}/>
        <Text style = {styles.titleApp}> Cotizador de prestamos </Text>
        <Form
          setCapital = {setCapital}
          setInterest ={setInterest}
          setMonths = {setMonths}
        />
      </SafeAreaView>
      <ResultCalculation 
      capital = {capital}
      interest = {interest}
      months = {months}
      total = {total}
      errorMessage = {errorMessage}/>
      <Footer Calculate={Calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center"
  },
  background:{
    backgroundColor: colors.PrimaryColor,
    height:200,
    width:'100%',
    borderBottomRightRadius: 70,
    borderBottomLeftRadius:70,
    position: "absolute",
    zIndex: -1,
  },
  titleApp:{
    fontSize: 20,
    fontWeight:"bold",
    color: "#fff",
    marginTop: 15,
  },
})


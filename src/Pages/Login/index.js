import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { getAllData, searchBooks } from '../../services/Api';
import styles from './style';

export default function Home({ navigation }) {
  const [ text, setText ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ invalid, setInvalid ] = useState(false);
  
  async function loadUser(){
    setLoading(true);
    setInvalid(false)
    const data = await getAllData(text);

    if (data.user.usuario === 'falso' || data.user.usuario === '') {
      setInvalid(true);
    } else {
      navigation.navigate('Home', { data: data, cgu: text });
    }

    setLoading(false);
  }

  useEffect(() => {
    
    async function loadBook(){
      console.log(
        await searchBooks('', '', {
          busca: 'java',
          mater: '',
          local: 'ULB01',
          idioma: '',
          campo: 'WRD'
        })
      )
    }

    loadBook()
  }, [])

  return (
    <SafeAreaView style={ styles.areaView }>
      <View style={ styles.container }>
          <Text>Login!</Text>
          
          <TextInput
            style={ styles.textInput }
            onChangeText= { (text) => setText(text) }
            value= { text }
            keyboardType= {'numeric'}
          />

          <TouchableOpacity style={ styles.button } onPress={ () => loadUser() }>
            <Text style={ styles.textButton }>Let It Go</Text>
          </TouchableOpacity>
          {
            loading &&
              <View style={ styles.activity }>
                <ActivityIndicator size= { 70 } color= 'white'/>
                <Text style={ styles.textActivity }>Carregando...</Text>
              </View>

            ||
            invalid &&
              <Text>CGU Inválido TCHÊ!</Text>
          }
      </View>
    </SafeAreaView>
  );
}
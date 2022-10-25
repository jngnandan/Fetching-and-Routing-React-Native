
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Blog from './Blog';

import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const Article = ({article}) => {

  const {title, topic, image_url, avatar_Url, author, id} = article

  const navigation = useNavigation()

  const onPressArticle = () => {
    navigation.navigate('Blog', {id})
    // console.log(id)
  }



  return (
    <TouchableOpacity onPress={onPressArticle} style={{margin: 10, padding: 20, backgroundColor: 'white', borderRadius: 6, paddingVertical: 10}}>
      <Text style={{fontSize: 20, fontWeight: '500', color: 'gray'}}>{title}</Text>
      <Image source={{uri: image_url}} style={{width: '98%', height:180, marginVertical:10}}/>
      <Text style={{fontSize:16, color: 'gray'}}>{topic}</Text>
      {/* <Image source={{uri: avatar_Url}} /> */}
      <Text style={{fontSize: 18, color: 'gray'}}>{author}</Text>
    </TouchableOpacity>
  )
}

export default Article

const styles = StyleSheet.create({})
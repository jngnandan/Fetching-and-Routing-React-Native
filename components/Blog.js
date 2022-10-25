
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import {useEffect, useMemo, useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native'

import { ContentContext } from '../context/ContentContext'

const Blog = ({ route }) => {
  const [data, setData] = useState([])

// useContext  
  const {addFavorite, removeFavorite, name} = useContext(ContentContext)
  console.log(name)


  const {id} = route.params

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  const {title, topic, image_url, avatar_url, author, content} = data

  console.log(data)

  return (
    <View style={{margin: 14, marginVertical: 20}}>
      <Text style={{fontSize: 20,}}>{title}</Text>
      <Text style={{marginVertical: 10}}>{topic}</Text>
      <Image source={{uri: image_url}} style={{width: '100%', height: 250, resizeMode: "contain",}}/>
      <View style={{flexDirection: 'row', justifyContent: 'start', alignItems: 'center', padding: 6}}>
        <Image source={{uri: avatar_url}} style={{width: 40, height: 40, borderRadius: 25,}}/>
        <Text style={{margin: 10, fontWeight: '400'}}>{author}</Text>
      </View>
      <Text style={{marginTop: 15}}>{content}</Text>

    </View>
  )
}

export default Blog

const styles = StyleSheet.create({})
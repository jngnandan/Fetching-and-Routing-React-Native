
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import {useState, useMemo} from 'react'
import Article from './Article'

const Home = () => {
    const [data, setData] = useState([])

useMemo(() => {
  const fetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    setData(data)
  }
  fetchData()
}, [])

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Article article={item} />
        )}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
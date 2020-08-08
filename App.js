import React, { useState } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, FlatList,
  SafeAreaView, KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Input, Button } from './Components'
const ListPage = () => {

  const [title, setTitle] = useState('')
  const [dsc, setDsc] = useState('')

  const [data, setData] = useState([])

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dsc}>{item.dsc}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >

        <FlatList
          style={{ flex: 1 }}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => {
            return (
              <View style={{ alignItems: 'center', marginTop: 20}}>
                <Text style={{ fontSize: 10}}>Herhangi bir data bulunamadı.</Text>
              </View>

            )
          }}
          ItemSeparatorComponent={() => {
            return(
              <View style={{ backgroundColor: 'gray', height: 1 }}>
              
              </View>
            )
          }}
          ListFooterComponent={() => {
            return(
              <View style={{ height: 50, backgroundColor: 'gray'}}>

              </View>
            )
          }}
          initialNumToRender={2}
          // inverted
          ListHeaderComponent={() => {
            return(
              <View style={{ height: 50, backgroundColor: 'gray'}}>
                <Text style={{ textAlign: 'center',alignItems: 'center',paddingTop: 12, color: 'white', fontSize: 20}} >Kişiler</Text>
              </View>
            )
          }}
        />

        <View style={{
          alignItems: 'center',
          paddingTop: 30,
          flex: 1
        }}>

          <Input
            placeholder='İsim'
            value={title}
            onChangeText={(value) => setTitle(value)}
          />

          <Input
            placeholder='Telefon numarası'
            value={dsc}
            onChangeText={(value) => setDsc(value)}
          />

          <Button
            text={'Kişi Ekle'}
            onPress={() => {
              let arr = data.slice()
              let obj = {
                id: data.length,
                title,
                dsc
              };
              arr.push(obj)

              setData(arr)
            }}
          />
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
   // padding: 20,
   paddingLeft:15,
    marginVertical: 8,
    marginHorizontal: 16,
   // borderWidth: 0.5,
   // borderRadius: 10,
    borderColor: 'gray'

  },
  title: {
    fontSize: 18,
  },
  dsc: {
    fontSize: 14,
    color: 'gray'
  },
});

export default ListPage;
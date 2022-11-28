import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button,TextInput, SafeAreaView, ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function App() {

  const [value,setValue]=useState("")
  const [text,setText]=useState([])

  function click() {
      setText([value,...text])
      setValue("")
      // console.log(text);  
  }
  function trash(key){
    var newList1= text;
    newList1.splice(key,1);
    setText([...newList1]);
  }
  return (

    <SafeAreaView style={styles.container}>
     
    <View style={styles.text}>
      <TextInput style={styles.TextInput} placeholder='bir şey yaz' onChangeText={text=> setValue(text)} value={value}  />
      {value==="" ?<Button  style={styles.button} onPress={click} title='Gönder' disabled={true} />: <Button style={styles.button} onPress={click} title='Gönder' disabled={false} />}
      </View>
      <ScrollView style={{width:"100%",height:"100%"}}>
      {text.map((data,key)=>{
        return(
          <View style={styles.arrayText} key={key}>
      <Text style={{fontSize:20,maxWidth:200,minWidth:200}}> {data}</Text>
      <Entypo name="trash" size={24} color="black" onPress={()=>trash(key)} style={styles.Trash}/>
     
        </View>

        )
      })
      }
</ScrollView>
    <StatusBar style="auto" />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display:"flex",
    alignItems:"center",
    margin:50,
    height:"100%"
  },
  text:{
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    margin:10,
    padding:3,
    borderRadius:10,
    backgroundColor:"#D3D3D3",
  },
  TextInput:{
    marginRight:50,
    width:"90%",
    height:50,
    fontSize:25
  },
  arrayText:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    width:"100%",
    minHeight:50,
    margin:5,
    padding:5,
    backgroundColor:"rgb(209, 209, 224)",
    borderRadius:10,    
  }
});

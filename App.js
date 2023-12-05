import {TextInput,Button, StyleSheet, Text, View,Image,KeyboardAvoidingView,Platform} from 'react-native';
import { useState } from 'react';
const LogInForm =()=> {
  const [username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[errors,setErrors]=useState({});

  const validationForm=()=>{
    let errors={};

    if(!username) errors.username="Username is required";
    if(!password) errors.password="password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0; 
  };
  const handleSumbit=()=>{
    if(validationForm()){
      console.log("sumbitted",username,password);
      setUsername('');
      setPassword('');
      setErrors({});

    }

  }
  return (
    <KeyboardAvoidingView 
    behavior="padding"
    keyboardVerticalOffset={Platform.OS ==='ios' ? 100 : 0} 
    style={styles.container}>
      <View style={styles.form}>
        <Image source={require('./assets/Logo.png')} style={styles.image}/>
        <Text style={styles.lable}>Username</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Enter your username" 
        value={username} 
        onChangeText={setUsername}
        />
        {
           errors.username ?( <Text style={styles.errorText}>{errors.username}</Text>) : null
        }
        <Text style={styles.lable} >Password</Text>
        <TextInput 
        style={styles.input} 
        placeholder='Enetr your password' 
        secureTextEntry value={password} 
        onChangeText={setPassword}
        />
        {
           errors.password ?( <Text style={styles.errorText}>{errors.password}</Text>) : null
        }
        <View style={styles.button}>
           <Button title="Login" onPress={handleSumbit}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:40,
    backgroundColor:'gray'
  },
  form:{
    backgroundColor:'white',
    padding:20,
    borderRadius:10,
    shadowColor:'black',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
  },
  lable:{
    fontSize:16,
    marginBottom:5,
    fontWeight:'bold'
  },
  input:{
    height:40,
    borderColor:'black',
    borderWidth:1,
    margineBottom:15,
    padding:10,
    borderRadius:5,
    
  },
  image:{
    width:200,
    height:200,
    alignSelf:'center',
    marginBottom:20,
  },
  errorText:{
    color:'red',
    marginBottom:10,
  },
  button:{
    marginTop:15,
    paddingHorizontal:40,
    alignIteam:'center',
  }
});
export default LogInForm;
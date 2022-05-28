import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, CheckBox,TouchableOpacity,FlatList,ScrollView,Linking,Image } from 'react-native';

import { styles } from '../component/styles';

export const ToDo = () => {
    const [task, setTask] = useState('');
    const [d, setD] = useState();
    const [ t, setT] = useState();

    const [taskItems, setTaskItems] = useState([]);
    var _Date,_Time;
    const handleAddTask = () => {
        console.log(task);
        setTaskItems([...taskItems, task]);
        console.log(taskItems);
        setTask(null);


    }
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy);
        
    }

    const getTime = () => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours()+' hrs' + " : " + today.getMinutes()+' min' + " : " + today.getSeconds()+' sec';
       if (d !== date ) {
            setD(date);
        }
       if (t!== time) {
            setT(time)
        }
    }
 
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'#000',width:'100%'}}>
                <Text style={{ fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>This is an open-source project. You are allowed to pull request, collaborate in project or report any issue.</Text>
                
            </View>
            
            
            {getTime()}
            <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/logo.png')} style={{height:64,width:64,marginTop:5}}/>
            <Text style={styles.header}> Open To Do</Text>
            </View>
            <Text style={{fontWeight:'bold',alignSelf:'flex-end',marginRight:10}}>Date : {d}</Text>
            <Text style={{fontWeight:'bold',fontSize:15,alignSelf:'flex-end',marginRight:10}}>Time : {t}</Text>
            <ScrollView style={styles.task}>
        
            {
                    taskItems.map((item, index) => {
                        
                            return (
                                <TouchableOpacity style={styles.taskButton}  key = { index } onPress={() => { completeTask(index) }}  >
                                    <Text style={styles.taskText} >{item}</Text>
                                  
                                </TouchableOpacity>
                            )
                        
                })
            }
            </ScrollView>
            <TextInput placeholder='type your task' style={styles.input} value={task} onChangeText={text => setTask(text) } />
            <TouchableOpacity style={styles.button} onPress={() => {
                if (task !== null || undefined || '') {
                    
                    handleAddTask();
                }
               
            }}>
                <Text style={styles.buttonText}>Add Task</Text>
                </TouchableOpacity>
            <Text>v.0.0.3</Text>
            <Text style={{textDecorationLine:'underline',fontWeight:'bold'}} onPress={()=>{Linking.openURL('https://www.soperdev.com')}}>A SOPERDEV Creation</Text>

        </View>
    )
}

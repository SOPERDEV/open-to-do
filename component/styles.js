import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
        backgroundColor:'#FDF2E9'
    },
    input: {
        width: '60%',
        borderWidth: 2,
        height: 30,
        borderRadius: 20,
        textAlign: 'center',
        borderColor: '#5D5E5F',
        position: '',
        bottom: 70,
        marginTop:20
        
    },
    button: {
        width: 90,
        borderWidth: 1,
        height: 30,
        marginTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#F5CBA7',
        position: '',
        bottom: 10
        
    },
    buttonText: {
        textSize: 20,
        fontWeight:'bold'
    },
    task: {
        width: '60%',
        marginTop: '7%',
        textAlign: 'center',
        height: 10,
       
      
       
    },
    taskText: {
        fontSize: 18,
        margin: 5,
        width:'80%'
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'left',
        
    },
    taskButton: {
        width: '100%',
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#F8C471',
        flexDirection: 'row',
        justifyContent: 'center',
        
    }
})

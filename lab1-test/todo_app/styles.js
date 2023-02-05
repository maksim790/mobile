import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        height: '100%',
        borderColor: 'red',
        borderWidth: 0,
    },
    form:{
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    button:{
        backgroundColor: '#c8d1fe',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
    },
    todoList:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },  
    todo:{
        padding: 15,
        margin: 5,
        borderRadius: 10,
        borderColor: '#c8d1fe',
        backgroundColor: '#f4f5f5',
        // borderColor: 'pink',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 15,
    },
    todoName:{
        fontSize: 18,
        fontFamily: 'circular_std_bold',
        fontWeight: '700',
    },
    todoContent:{
        fontSize: 16,
        fontFamily: 'circular_std_bold',
        fontWeight: '600',
    },
    todoCheckbox:{
    },
    deleteBtn:{
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 35,
        left: 35,
        borderRadius: 20,
        borderColor: 'powerblue',
        borderWidth: 0,
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#c06c84',
    },
    addBtn:{
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 35,
        right: 35,
        borderRadius: 20,
        borderColor: 'powerblue',
        borderWidth: 0,
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#c8d1fe',
    },
    addBtn__icon:{
        alignSelf: 'center',
    },
    noteInput:{
        margin: 10,
        fontSize: 18,
        justifyContent: 'flex-start',
    },
    noteHeading:{
        // textTransform: 'uppercase',
        margin: 10,
        fontSize: 22,
        justifyContent: 'flex-start',
        fontWeight: '800',
    },
    searchInput:{
        fontSize: 18,
    }
})

export default styles
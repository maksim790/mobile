import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    form:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        //justifyContent: 'space-around'
    },
    button:{
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
    },
    todo:{
        padding: 20,
        borderColor: 'orange',
        backgroundColor: '#FFD580',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    todo__left:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteBtn:{
        position: 'relative',
        right: 10,
    }
})

export default styles
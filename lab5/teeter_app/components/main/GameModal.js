import {View, Text, Modal, Pressable, Alert} from 'react-native'
import React, {useState} from 'react'
import styles from '../../styles'
import ModalButton from './ModalButton'

const GameModal = ({modalVisible, handleUpdate, handleExit, handleLevelAgain, handleLevelNext}) => {

    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            handleUpdate(!modalVisible);
            }}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Winner winner chicken dinner!</Text>
              <View style={styles.modalBtnContainer}>
                <ModalButton title='Try again' onPress={handleLevelAgain}/>
                <ModalButton title='Next level' onPress={handleLevelNext}/>
                <ModalButton title='Exit' onPress={() => handleExit()}/>
              </View>
            </View>
        </View>
        </Modal>
    )
}

export default GameModal

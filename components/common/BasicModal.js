import React from 'react';
import { Modal } from 'react-native';

export default BasicModal = (props) => (
    <Modal
        animationType="slide"
        onRequestClose={props.close}
        transparent={false}
        visible={props.isOpen}
    >
        {props.children(props.close)}
    </Modal>
);
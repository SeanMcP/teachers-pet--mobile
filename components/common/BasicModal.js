import React from 'react';
import { Modal, View } from 'react-native';

export default BasicModal = (props) => (
    <View style={{ marginTop: 22 }}>
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.isOpen}
        >
            {props.children(props.close)}
        </Modal>
    </View>
);
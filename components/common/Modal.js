import React from 'react';
import { Modal as ReactNativeModal } from 'react-native';

export default Modal = (props) => (
    <ReactNativeModal
        animationType="slide"
        onRequestClose={props.close}
        transparent={false}
        visible={props.isOpen}
    >
        {React.cloneElement(props.children, { close: props.close })}
    </ReactNativeModal>
)
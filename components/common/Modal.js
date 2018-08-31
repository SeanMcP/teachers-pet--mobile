import React from 'react';
import { Modal as ReactNativeModal } from 'react-native';

export default Modal = (props) => (
    <ReactNativeModal
        animationType="slide"
        onRequestClose={props.close}
        transparent={false}
        visible={props.isOpen}
    >
        {
            React.Children.map(props.children, child =>
                React.cloneElement(child, { close: props.close }))
        }
    </ReactNativeModal>
)
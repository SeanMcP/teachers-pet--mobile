import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default Icon = ({ color, name, size=32, ...rest }) => (
    <Ionicons
        color={color}
        name={name}
        size={size}
        {...rest}
    />
);
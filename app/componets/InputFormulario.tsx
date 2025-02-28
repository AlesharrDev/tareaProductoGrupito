import { View, Text, TextInput } from 'react-native'
import React from 'react'
import globalStyle from '@/app/style/globalstyle'
interface props extends React.ComponentProps<typeof TextInput> {
    label: string;
    placeholder: string;
    onChangeText?: (text: string) => void;
    value?: string;
    type?: string;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}
const InputFormulario = ({ label, placeholder, onChangeText, value, keyboardType = 'default' }: props) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row',marginBottom: 20 }}>
            <Text style={globalStyle.label}>{label}: </Text>
            <TextInput
                placeholder={placeholder}
                style={globalStyle.input}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                value={value} />
        </View>
    )
}
    
export default InputFormulario
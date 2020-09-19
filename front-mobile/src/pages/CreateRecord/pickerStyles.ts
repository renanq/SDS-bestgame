import { StyleSheet } from 'react-native';

const pickerStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: '#ff0066',
        paddingRight: 30,
        fontFamily: "Play_700Bold",
        height: 50
      },
      inputAndroid: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: '#ff0066',
        paddingRight: 30,
        fontFamily: "Play_700Bold",
        height: 50
      },
      placeholder: {
        color: '#37474f',
        fontSize: 16,
        fontFamily: "Play_700Bold",
      },
      iconContainer: {
        top: 10,
        right: 12,
      },
});

export default pickerStyles;
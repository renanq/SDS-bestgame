import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 0,
            padding: 20,
            backgroundColor: '#011b46',
        },
        containerBackground: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
          },
        inputText: {
          height: 50,
          backgroundColor: '#FFF',
          borderRadius: 10,
          color: '#ED7947',
          fontFamily: "Play_700Bold",
          fontSize: 16,
          paddingLeft: 20,
          marginBottom: 21
        },
        platformContainer: {
          marginBottom: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        footer: {
          marginTop: '15%',
          alignItems: 'center',
        },
        button: {
          backgroundColor: '#00D4FF',
          flexDirection: 'row',
          borderRadius: 10,
          height: 60,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        },
        buttonText: {
          fontFamily: "Play_700Bold",
          fontWeight: 'bold',
          fontSize: 18,
          color: '#0B1F34',
        }
    });

export default styles;
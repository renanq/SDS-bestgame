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
          width: '100%',
          backgroundColor: '#FFF',
          borderRadius: 10,
          color: '#ff0066',
          fontFamily: "Play_700Bold",
          fontSize: 16,
          paddingLeft: 20,
          marginBottom: 21
        },
        platformContainer: {
          marginBottom: 20,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        footer: {
          marginTop: '15%',
          alignItems: 'center',
        },
        button: {
          backgroundColor: '#0066ff',
          flexDirection: 'row',
          borderRadius: 10
        },
        buttonIcon: {
          backgroundColor: '#0050c7',
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10
        },
        buttonText: {
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 50,
          paddingRight: 50,
          fontFamily: "Play_700Bold",
          fontWeight: 'bold',
          fontSize: 18,
          color: '#FFFFFF',
        }
    });

export default styles;
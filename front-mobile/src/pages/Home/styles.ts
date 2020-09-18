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
    gamerImage: {
      width: 309,
      height: 288,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 36,
      fontWeight: 'bold',
      marginTop: 31,
      fontFamily: "Play_700Bold",
    },
    subTitle: {
      color: '#ff0066',
      fontSize: 21,
      marginTop: 15,
      fontFamily: "Play_400Regular",
    },
    footer: {
      paddingTop: 70,
      alignItems: 'center',
      justifyContent: 'center'
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
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    areaView: {
        backgroundColor: '#949494',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textInput: {
        alignSelf: 'stretch',
        borderColor: 'white',
        borderWidth: 1,
        margin: 20,
        borderRadius: 20,
    },
    button: {
        height: 50,
        width: 200,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    activity:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    textActivity: {
        color: 'white',
        fontSize: 18,
    }
});

export default styles;
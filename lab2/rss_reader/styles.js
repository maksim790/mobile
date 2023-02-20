import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: 50,
    },
    feed: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: 5,
        // width: '100%',
    },
    feedItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        marginBottom: 1,
        marginTop: 1,
        borderColor: 'black',
        backgroundColor: '#fcfefe',
        gap: 10,
    },
    feedItem__title: {
        fontSize: 18,
        fontWeight: 800,
        flex: 1,
    },
    feedItem__main: {
        // borderWidth: 4,
        flex: 1,
    },
    feedItem__image: {
        width: 100,
        height: 100,
    },
    feed__title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 800,
        flex: 1,
    },
    loadingCircle: {
        marginTop: 30,  
    }
});

export default styles;
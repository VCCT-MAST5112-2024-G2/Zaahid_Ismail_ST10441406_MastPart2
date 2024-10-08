
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home'); 
        }, 2000); // 2-second delay

        return () => clearTimeout(timer); 
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo.png')}  
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.text}>Welcome!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a50021',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff', 
    },
});

export default SplashScreen;

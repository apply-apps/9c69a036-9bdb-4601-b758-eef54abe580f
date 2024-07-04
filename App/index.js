// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, Button, View, ScrollView } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    const openStory = (title, content) => {
        navigation.navigate('Story', { title, content });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Fairy Tales</Text>
            <View style={styles.buttonContainer}>
                <Button title="Cinderella" onPress={() => openStory('Cinderella', 'Once upon a time, there was a kind girl named Cinderella...')} />
                <Button title="Snow White" onPress={() => openStory('Snow White', 'Once upon a time, in a faraway land, there was a princess named Snow White...')} />
                <Button title="Rapunzel" onPress={() => openStory('Rapunzel', 'There was a gorgeous girl with long, flowing hair named Rapunzel...')} />
            </View>
        </SafeAreaView>
    );
}

function StoryScreen({ route, navigation }) {
    const { title, content } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        marginVertical: 10,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    content: {
        fontSize: 18,
        lineHeight: 28,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Story" component={StoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
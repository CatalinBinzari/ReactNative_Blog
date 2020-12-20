import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    // console.log(state); //all state values
    let id = navigation.getParam('id');
    // console.log(id);
    const blogPost = state.find((blogPost) => blogPost.id === id)
    //find() <- helper function, we pass a function to it and it will call function with every value from state

    // console.log(blogPost)
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ShowScreen;
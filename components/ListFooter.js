import React from "react";

import {View, Text, StyleSheet} from "react-native";

const ListFooter = () => {
    return (
        <View style={styles.listEnd}>
            <Text style={styles.text}>
                Unfortunately, there are no more drinks available. Try filtering them to get something new :)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listEnd: {
        marginVertical: 20,
        flex: 1,
        alignItems: 'center'
    },

    text: {
        fontSize: 16,
        textAlign: 'center'
    }
})

export default ListFooter
import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPosts } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Text>Index Screen</Text>
      <Button
      title="ADD POST"
      onPress={addBlogPosts}
      />
      <FlatList
      data={data}
      keyExtractor={(blogPost) => blogPost.title}
      renderItem={({ item }) => {
        return <Text>{item.title}</Text>
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IndexScreen;
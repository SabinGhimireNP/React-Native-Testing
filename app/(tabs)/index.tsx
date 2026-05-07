import React from "react";
import { Alert, FlatList, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import {Trash} from "lucide-react-native";
import { useRouter } from "expo-router";



export default function Index() {
  const [todos, setTodos] = React.useState<string[]>([
    "Buy groceries",
    "Walk the dog",
    "Finish React Native project",
  ]);
  const [text, setText] = React.useState("");
  const router = useRouter();

  function handlePress(index: any) {
   const data= text.trim();
    if(data){
      setTodos([...todos, data]);
    }
   setText("");
    Alert.alert("Todo Added", `You added: ${data}`);
    router.push("/BackingTest");

  }

  function handleDelete(index: number) {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          const newTodos = [...todos];
          newTodos.splice(index, 1);
          setTodos(newTodos);
        },
      },
    ]);
  }

  return <ScrollView contentContainerClassName="flex items-center justify-center text-3xl min-h-screen py-4 bg-gray-200">
    <View className="bg-white p-4 rounded-lg ">
      <View className="flex items-center justify-center">
        <Text className="text-2xl font-bold">My Todo App</Text>
      </View>
      <View className="flex items-start justify-center border p-5  rounded-lg border-gray-300">
        <View className="flex flex-row items-center justify-center ">
            <TextInput
            className=" border rounded-full px-4 py-2 mt-4 w-64 mx-2"
            placeholder="Enter a new todo"
            onSubmitEditing={handlePress}
            id="TextInput"
            value={text}
            onChangeText={setText}
            />
            <TouchableOpacity className="bg-blue-500 rounded-full px-5 py-2 mt-4 flex items-center justify-center" onPress={handlePress}><Text className="text-white">Add Todo</Text></TouchableOpacity>
        </View>
        <View className="mt-4 border-t pt-4 w-full">
          <View>
          <FlatList
          scrollEnabled={false}
          data={todos}  renderItem={({ item, index }) => (
   <View key={index} className="flex-row items-center justify-between mb-4 border-b border-gray-300 p-2 rounded-xl shadow-sm">
  
  <View className="flex-1 border- py-2 mr-4">
    <Text className="text-lg text-slate-800 flex-wrap">
      {item}
    </Text>
  </View>

  <TouchableOpacity 
    className="active:scale-90 transition-transform"
    onPress={() => handleDelete(index)}
  >
    <View className="bg-red-500 p-3 rounded-full shadow-md">
      <Trash size={20} color="white" />
    </View>
  </TouchableOpacity>

</View>
          )}>

          </FlatList>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>;
}

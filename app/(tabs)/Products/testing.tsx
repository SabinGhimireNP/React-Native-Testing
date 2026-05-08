import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import useDataStore from '../../../lib/store/data'

const Testing = () => {
  const [data, setData] = useState<any[]>([])
  // const { todos, loading, fetchData } = useDataStore()
  // Component only re-renders if 'todos' changes
const todos = useDataStore((state) => state.todos);

// Component only re-renders if 'loading' changes
const loading = useDataStore((state) => state.loading);

// Functions/Actions don't change, so this never causes a re-render
const fetchData = useDataStore((state) => state.fetchData);

  // const fetchData = async () => {
  //   try {
  //     const result = await fetch('https://dummyjson.com/products').then(res => res.json())
  //     setData(result.products)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  function handelBuy(){
    alert("Product added to cart")
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    // SafeAreaView prevents content from hiding under the iPhone notch
    <SafeAreaView className="flex-1 bg-gray-200 px-">
      <FlatList 
        data={todos} 
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }} // Space at the very bottom
        renderItem={({ item }) => (
          // Removed min-h-screen, added my-2 for spacing between cards
          <View className="px-4 my-2">
            <View className="bg-white p-4 rounded-xl shadow-sm">
              
              {/* Image needs specific height and width */}
              <Image 
                source={{ uri: item.thumbnail }} 
                className="w-full h-52 rounded-lg mb-4 bg-gray-100" 
                resizeMode="contain" 
              />

              <View>
                <Text className="text-2xl font-bold text-slate-900">{item.title}</Text>
                
                {/* Tag Container: Added flex-wrap */}
                <View className="flex-row flex-wrap mt-2">
                  {item.tags.map((tag: string) => (
                    <View key={tag} className="border border-gray-300 rounded-md px-2 py-1 mr-2 mb-2">
                      <Text className="text-gray-600 text-sm">{tag}</Text>
                    </View>
                  ))}
                </View>

                <Text className="text-base text-slate-600 mt-2 leading-5">
                  {item.description}
                </Text>
                
                <View className='flex flex-row items-center justify-between'>
                <Text className="text-4xl font-bold text-blue-600 mt-3">
                  ${item.price}
                </Text>

                <TouchableOpacity className="bg-blue-500 rounded-full px-5 py-2 mt-4 flex items-center justify-center" onPress={handelBuy}>
                  <Text className="text-white text-lg">Buy Now</Text>
                </TouchableOpacity>

                </View>
              </View>

            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Testing
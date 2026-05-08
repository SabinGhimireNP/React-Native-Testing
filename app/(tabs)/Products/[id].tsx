import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import useDataStore from '../../../lib/store/data';

const ProductDetails = () => {
  const { id, name, price } = useLocalSearchParams();

  const product = useDataStore((state) => state.todos.find((item) => item.id.toString() === id));


  return (
    <View className='flex-1 items-center justify-center bg-gray-100 p-4'>
      <View className='bg-white rounded-lg p-4 '>
        <Image 
          source={{ uri: product?.thumbnail }} 
          className="w-64 h-64 rounded-lg mb-4 bg-gray-200" 
        />

        <View>
        <Text className="text-2xl font-bold text-slate-900">{product?.title}</Text>
        <Text className="text-xl text-blue-700 mt-2 font-bold ">${product?.price}</Text>
        <Text className="text-base text-slate-600 mt-2 leading-5">
          {product?.description}
        </Text>
        </View>

        <View>
          <Text className="text-lg text-gray-700 mt-4">
            Tags:
          </Text>
          <View className="flex-row flex-wrap mt-2">
            {product?.tags.map((tag: string) => (
              <View key={tag} className="border border-gray-300 rounded-md px-2 py-1 mr-2 mb-2">
                <Text className="text-gray-600 text-sm">{tag}</Text>
              </View>
            ))}
          </View>

          <View className='flex flex-row items-center justify-between mt-4'>
            <TouchableOpacity className="bg-blue-500 rounded-full px-5 py-2 mt-4 flex items-center justify-center" onPress={() => alert("Product added to cart")}>
              <Text className="text-white text-lg">Add to Cart</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails
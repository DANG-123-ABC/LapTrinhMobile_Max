import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import Dang from "../../assets/dang.png";

const OfferCard = () => {
  return (
    <View className="flex-row max-w-[350px] py-2 mr-6 max-h-[160px] overflow-hidden bg-[#c7c7c7] rounded-2xl">
      <View className="px-4 py-2">
        <Text className="font-extrabold text-2xl">50% Off</Text>
        <Text className="text-lg">Black friday</Text>
        <Text className="text-xs my-2">With code: Coder dep trai</Text>

        <Pressable className="bg-black w-20 rounded-2xl mt-2">
          <Text className="text-white text-xs font-semibold mx-3 my-2  ">
            Get Now
          </Text>
        </Pressable>
      </View>
      <View>
        <Image source={Dang} className=" h-[140px] w-[120px] ml-10" />
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({});

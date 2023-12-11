import React, { useContext, useEffect, useState ,Image} from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";
import AuthContext from "../features/authContext";

import { loginWithEmailAndPassword, registerWithEmailAndPassword } from "../features/firebase/userAuth";


const AuthenticationModal = ({ modalVisible, setModalVisible }) => {
  const [type, setType] = useState("login");
  const [name, setName] = useState("Pham Dang");
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [loading,setLoading] = useState(false)

  const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);

  const handleLogin = async() => {
    setLoading(true)
    // Kiểm tra xem việc đăng nhập có thành công dựa trên thuộc tính 'success' trong phản hồi
    const res= await loginWithEmailAndPassword(email,password)
    if(res.success===true){// kiểm tra đăng nhập dựa trên thuộc tính success
      console.log("res",res)// Ghi log đối tượng phản hồi vào console
      setCurrentUser(res.user)// Đặt người dùng hiện tại dựa trên đối tượng người dùng trong phản hồi
      setModalVisible(false);// Đóng modal
      setIsLoggedIn(true)/ //Đặt trạng thái isLoggedIn thành true
      setLoading(false)// Đóng modal dù có kết quả đăng nhập hay không
    }
    setModalVisible(false);
  };
  

  const handleRegister = async() => {
      setLoading(true)
      const res = await registerWithEmailAndPassword(name,email,password)
      if(res.success===true){
        setCurrentUser({name,email})
        setModalVisible(false);
        setIsLoggedIn(true)
        setLoading(false)
      }
      setLoading(false)
  };


  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, [currentUser]);

  return (
    <View style={{ flex: 1, width: 1150, backgroundColor: "red" }}>
      <Modal
        animationType="slide"
        transparent={true}  
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(flase); // ẩn form đăng nhập 
        }}
      >
        {type === "login" ? ( // kiẻm tra login
          <Pressable onPress={()=>setModalVisible(false)} className="flex-1 justify-center h-[100%] items-center bg-white">
            <View className={`w-[90%] p-6 bg-white rounded-lg z-10`}>
              <Text className="font-bold mb-2">Email:</Text>
              <TextInput
                className="border border-slate-300 px-3 py-2"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <Text className="font-bold mt-4 mb-2">Password:</Text>
              <TextInput
                className="border border-slate-300 px-3 py-2"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />

              <TouchableOpacity
                className="bg-black py-4 mt-6 rounded-lg"
                onPress={handleLogin}
              >
                <Text className="text-white font-semibold text-center">
                  Login
                </Text>
              </TouchableOpacity>
              <View className="flex-row justify-center items-center mt-4">
                <Text className="text-slate-500">Not a User?</Text>
                <Pressable onPress={() => setType("register")}>
                  <Text className="font-bold"> Register</Text>
                </Pressable>
              </View>
              {loading
                &&
                <ActivityIndicator />
              }
              
            </View>
          </Pressable>
        ) : (
          <Pressable onPress={()=>setModalVisible(false)} className="flex-1 justify-center items-center h-[100%] bg-white">
            <View className={`w-[90%] p-6 bg-white `}>
             
              <Text className="font-bold mb-2 ">Name:</Text>
              <TextInput
                className="border border-slate-300 px-3 py-2 mb-5 "
                value={name}
                onChangeText={setName}
              />
              <Text className="font-bold mb-2">Email:</Text>
              <TextInput
                className="border border-slate-300 px-3 py-2 mb-5"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <Text className="font-bold mb-2">Password:</Text>
              <TextInput
                className="border border-slate-300 px-3 py-2 mb-5"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />

              <TouchableOpacity
                className="bg-black py-4 mt-6 rounded-lg"
                onPress={handleRegister}
              >
                <Text className="text-white font-semibold text-center">
                  Register
                </Text>
              </TouchableOpacity>

              <View className="flex-row justify-center items-center mt-4">
                <Text className="text-slate-500">Already a User?</Text>
                <Pressable onPress={() => setType("login")}>
                  <Text className="font-bold"> Login</Text>
                </Pressable>
              </View>
              {/* {loading
              ?
              <ActivityIndicator size={"large"} />
                :
              }
              {error && <Text style={{color:"red"}}>{error}</Text>} */}
            </View>
          </Pressable>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#0080ff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default AuthenticationModal;


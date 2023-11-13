import {auth,db} from "../../../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getDoc, doc, setDoc} from "firebase/firestore"


const registerWithEmailAndPassword = async(name,email,password) => {
  //  console.log(email,password,name) // để fix bug trên console
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user=res.user; // lấy tt từ kq đki
        const userDocRef = doc(db,"users",user.uid) //tạo tham chiếu đến db bẳng user vớiuid tương ứng
        // ghi dữu liệu vào fire base
        await setDoc(userDocRef,{ // ghi qua set doc
            uid:user.uid,
                name,
                email
        })
        return {success:true}
    } catch (error) {
        //console.error(error)
    }
}

const loginWithEmailAndPassword = async(email,password) => {
    try{
        const res = await signInWithEmailAndPassword(auth,email,password)
        const userId = res.user.uid; //Lấy userId từ thông tin đăng nhập thành công ,Kết quả đăng nhập res chứa user.uid
        const userRef= doc(db,"users",userId) // Lấy tham chiếu đến tài liệu người dùng trong collection 'users' với userId tương ứng
        const userDoc = await getDoc(userRef)// Lấy bản ghi (snapshot) của tài liệu người dùng
        return {// Trả về đối tượng báo cáo thành công với thông tin người dùng
            success:true,
            user:userDoc.data()
        }
    }catch(err){
        //console.error(err)
    }
}

const logout = async () => {
    await signOut(auth);
    return {success:true}
}

export {loginWithEmailAndPassword,logout,registerWithEmailAndPassword};
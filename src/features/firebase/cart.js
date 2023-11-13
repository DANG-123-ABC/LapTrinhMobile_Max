import {  doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";


export const getCartItems = async() => {
    const userDocRef = doc(db,"users",auth.currentUser.uid)  // Lấy tham chiếu đến tài liệu của người dùng trong collection 'users' với uid tương ứng của người dùng hiện tại
    const userDocSnapshot = await getDoc(userDocRef)// Lấy bản ghi (snapshot) của tài liệu người dùng
    const data = await userDocSnapshot.data().cart;// Lấy dữ liệu giỏ hàng từ tài liệu người dùng
    return {data,success:true};// Trả về dữ liệu và success=true nếu mọi thứ thành công
}

export const addToCart=async(itemId,qty)=>{
   // console.log(itemId,qty)
    const productRef = doc(db,"products",itemId)
    const userDocRef = doc(db,"users",auth.currentUser.uid)
    const productSnapshot = await getDoc(productRef)
    const userDocSnapshot = await getDoc(userDocRef)
    if(userDocSnapshot.exists() && productSnapshot.exists()){ // Kiểm tra xem tài liệu người dùng và sản phẩm có tồn tại không
        // Lấy dữ liệu của người dùng và sản phẩm từ snapshot
        const userData = userDocSnapshot.data();
        const productData = productSnapshot.data();
         // Lấy danh sách sản phẩm trong giỏ hàng từ dữ liệu người dùng hoặc tạo mới nếu chưa có
        const cartItems = userData.cart || [];
        // Thêm một mục mới vào danh sách giỏ hàng với thông tin từ sản phẩm và số lượng (qty)
        cartItems.push({
            id:itemId,
            title:productData.title,
            brand:productData.brand,
            price:productData.price,
            image:productData.image,
            qty:qty,
        })
        // Cập nhật tài liệu người dùng với danh sách giỏ hàng mới
        await updateDoc(userDocRef,{cart:cartItems})
        console.log("items added to cart")
         // Trả về đối tượng báo cáo thành công và dữ liệu giỏ hàng mới
        return {success:true,data:cartItems}
    }else{
       // console.error("user or product doesnt exist")
    }
}

export const removeItemById = async(id) => {
        const userDocRef = doc(db,"users",auth.currentUser.uid); 
        const userDocSnapshot = await getDoc(userDocRef);
        if(userDocSnapshot.exists()){
            const userData = userDocSnapshot.data();// Lấy dữ liệu của người dùng từ snapshot
            const newCart = userData.cart.filter((item)=>item.id!==id);// Lọc ra danh sách mới (newCart) không chứa sản phẩm có id trùng với id cần xóa
            await updateDoc(userDocRef,{cart:newCart})// Cập nhật tài liệu người dùng với danh sách giỏ hàng mới
            const subTotal = newCart.reduce((acc,curr)=> acc+Number(curr.price)) // Tính tổng số tiền sau khi xóa sản phẩm
            return {data:newCart,success:true,subTotal}// Trả về đối tượng báo cáo thành công, dữ liệu giỏ hàng mới và tổng số tiền mới
        }else{
            //console.log("user doesn't exists")
        }
    }

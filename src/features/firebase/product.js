import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";


export const getProducts = async() => { // hàm getProduct để sử dụng trong các modal khác
    try {
        const productsRef = collection(db,"products");// tạo tham chiếu đến bảng pro
        const productsSnapshot = await getDocs(productsRef)// thực hiện truy vấn
        const products = productsSnapshot.docs.map(doc=>({id:doc.id,...doc.data()})) //pss.doc : một mảng chứa tất cả các doc của prod
        //.map dùng để chuyển đổi doc thành đối tượng trong mảng products
        return products;
    } catch (error) {
        //console.error(error)
    }
}
// Lấy thông tin sp dựa trên id cho bẳng detail trả về ctiet sp
export const getProductById = async (productId)=>{
    try {
        console.log("prod",productId)
        const productRef = doc(db,"products",productId)
        const productSnapshot = await getDoc(productRef)
        const product = {id: productSnapshot.id,...productSnapshot.data()}
        return product;
    } catch (error) {
       // console.error(error)
    }
}
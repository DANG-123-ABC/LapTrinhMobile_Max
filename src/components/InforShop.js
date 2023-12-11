import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SliderHome from "../components/SliderHome";

const Example = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.slider}>
        <Text style={styles.galleryText}>
          ĐIỀU KHOẢN VÀ DỊCH VỤ
        </Text>
       
        <View>
          <SliderHome />
        </View>
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>1. Giới thiệu Maverik Studio</Text>
        <Text style={styles.info}>
          Chào mừng quý khách đến với cửa hàng thời trang của chúng tôi, nơi mà phong cách gặp gỡ xu hướng, và sự thoải mái gặp gỡ phong cách. Tại đây, chúng tôi tự hào giới thiệu đến bạn những bộ sưu tập đa dạng với những thiết kế độc đáo, mang đậm chất sáng tạo và phản ánh đúng xu hướng thời trang hiện đại.
        </Text>
      </View>
      
      <View style={styles.column}>
        <Text style={styles.label}>2. Hướng dẫn sử dụng app mobile :</Text>
        <Text style={styles.info}>Khi vào app của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.</Text>
        <Text style={styles.info}>Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website. Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.</Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>3. Thanh toán an toàn và tiện lợi</Text>
        <Text style={styles.info}>Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp:</Text>
        <Text style={styles.info}>Cách 1: Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người bán)</Text>
        <Text style={styles.info}>Cách 2: Thanh toán sau (COD – giao hàng và thu tiền tận nơi)</Text>
        <Text style={styles.info}>Cách 3: Thanh toán online qua thẻ tín dụng, chuyển khoản</Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>4.Chính sách đổi trả:</Text>
        <Text style={styles.info}>
        - Đối với sản phẩm áo quần, thời gian đổi hàng trong vòng 3 ngày kể từ ngày khách hàng nhận bưu phẩm,  và chỉ áp dụng với sản phẩm bị lỗi sản xuất. (không áp dụng đổi trả cho sản phẩm hoàn chỉnh ) 
        </Text>
        <Text style={styles.info}>- Sản Phẩm đổi trả yêu cầu phải có hoá đơn mua hàng tại hệ thống của Maverik Studio </Text>
        <Text style={styles.info}>- Sản Phẩm đổi trả yêu cầu phải có hoá đơn mua hàng tại hệ thống của Maverik Studio </Text>
        <Text style={styles.info}> - Áp dụng đổi hàng với tất cả sản phẩm và sản phẩm được đổi phải còn nguyên nhãn mác, trong tình trạng chưa qua sử dụng</Text>
        <Text style={styles.info}>- Với trường  sản phẩm bị cắt tag, chúng tôi sẽ không giải quyết đơn đổi trả. </Text>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background color
  },
  column: {
    marginBottom: 20,
    marginTop: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#333', // Dark text color
  },
  info: {
    fontSize: 16,
    color: '#555', // Slightly lighter text color
    lineHeight: 24, // Adjust line height for better readability
    marginTop: 5,
  },
  slider: {
    textAlign: 'center',
  },
  galleryText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark text color
    marginTop: 20,
  },
});


export default Example;

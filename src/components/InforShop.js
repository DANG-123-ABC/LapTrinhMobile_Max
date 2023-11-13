import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SilderHome from "../components/SliderHome";

const Example = () => {
  return (
    <View style={styles.container}>

<View style={styles.slider}>
        <Text style={styles.galleryText}>
          Maverik Gallery
        </Text>
        <View>
        <SilderHome/>
      </View>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Streetwear, Menswear, Cozy, Vintage Vibes</Text>
        <Text style={styles.info}>
          Chào mừng quý khách đến với cửa hàng thời trang của chúng tôi, nơi mà phong cách gặp gỡ xu hướng, và sự thoải mái gặp gỡ phong cách. Tại đây, chúng tôi tự hào giới thiệu đến bạn những bộ sưu tập đa dạng với những thiết kế độc đáo, mang đậm chất sáng tạo và phản ánh đúng xu hướng thời trang hiện đại.
        </Text>
      </View>
      
      <View style={styles.column}>
        <Text style={styles.label}>Quốc Gia:</Text>
        <Text style={styles.info}>Việt Nam</Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>Ngày mở bán:</Text>
        <Text style={styles.info}>11 Tháng 11, 1111</Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>Sản Phẩm Chính:</Text>
        <Text style={styles.info}>
          Sản phẩm thời trang dành cho giới trẻ. Hãy để chúng tôi trở thành đối tác tin cậy của bạn trong việc thể hiện phong cách cá nhân và nâng tầm vẻ đẹp của bạn. Xin chân thành cảm ơn bạn đã đến và mong rằng bạn sẽ tận hưởng những trải nghiệm mua sắm tuyệt vời tại cửa hàng thời trang của chúng tôi.
        </Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
    
  },
  column: {
    marginBottom: 20,
    marginTop: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  info: {
    color: 'grey',
    marginTop: 3,  
  },

  slider: {
    textAlign: 'center',
  },
  galleryText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 10,
  },
});

export default Example;


import React, { useState , useEffect } from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';




const images = [
  'https://scontent.fhan14-4.fna.fbcdn.net/v/t31.18172-8/11411633_886323334787274_3987837880620351992_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2be8e3&_nc_eui2=AeGq2UWbQ-HBrsps4xUO67r5wWTwUubqj3bBZPBS5uqPdv2_UMSQA7Wz25ycmZ_HOc8fMfa5TAZNfdzBclInGIEw&_nc_ohc=3uujC0HUW7MAX_RL6nZ&_nc_ht=scontent.fhan14-4.fna&cb_e2o_trans=t&oh=00_AfDKxnIK7mkDDTh4ZSptSgQK2Nnt6cj66ikvArBnAyiw1w&oe=6577ABC2',
  'https://scontent.fhan14-3.fna.fbcdn.net/v/t31.18172-8/11194482_856314094454865_4595498020859938831_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2be8e3&_nc_eui2=AeHL4ySGmtfkh4Sf02Gsu9tKUR4Ka9CcES1RHgpr0JwRLVdsO7sjjOWAEM3pjXaiIgy5qPYXEDGjHekKFcgCU6GJ&_nc_ohc=LQaSbuCpqzkAX9enaUR&_nc_ht=scontent.fhan14-3.fna&cb_e2o_trans=t&oh=00_AfDFZfqkqCwTKqA9rIFcfOuS0dJ2QPZADxNhX4l7-FMbcQ&oe=6577AB3D',
  'https://scontent.fhan14-1.fna.fbcdn.net/v/t31.18172-8/10887509_785644394855169_884990385198599371_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2be8e3&_nc_eui2=AeFeG_F5DE52hiimQBsT6GZb9--GkzbzCGL374aTNvMIYnyBctGnG6dRPCuXSanDDvDdbtqB79s4N8IQBn54KTva&_nc_ohc=AZpGcA8JPPIAX8HCdov&_nc_ht=scontent.fhan14-1.fna&cb_e2o_trans=t&oh=00_AfAImMZCHy9_t8309ayVSP-2ocgWi4CywrmdfRh2zjpIlQ&oe=6577ACD6',
  'https://scontent.fhan14-3.fna.fbcdn.net/v/t31.18172-8/13497581_1085945758158363_1246637142856692752_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2be8e3&_nc_eui2=AeFsjnaFDiakJVoS7rCypzKvBc7yzf3fMo0FzvLN_d8yjWSKohPEHiRD5sQIDPR789AxomgCPFJysTNX9PqlsVAG&_nc_ohc=zH8pVjAF_dcAX9F_DhQ&_nc_ht=scontent.fhan14-3.fna&cb_e2o_trans=t&oh=00_AfAN7H39aUBUlD4pgp5PpbfcvUtAsflVKxb4nmaJdM_tYw&oe=6577C447',
  'https://scontent.fhan14-3.fna.fbcdn.net/v/t31.18172-8/12890919_1028894567196816_4719637949779210026_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2be8e3&_nc_eui2=AeHDFXIDIlpi5mKIMQ9Q8vBrJh7A4eeAQIgmHsDh54BAiOW3_mbEuQSppIZRmR3cAAWuRTbxkIduG4YeQGIE0qbE&_nc_ohc=Zenx8kMwwjMAX_8ZAGB&_nc_oc=AQmtubDB3OTlCG1Y3EtZ2GB_P2wBi6if49agmiXZ5ijj-EZscpK7hlGnA5AjEn8yvpstRtV-5qLRjjP-TyXQLpZV&_nc_ht=scontent.fhan14-3.fna&cb_e2o_trans=t&oh=00_AfAc23UEQDFY_oXQQdu7Jla2FAB_3KMpYgYyklPmrzK_xA&oe=6577BCBB',
];

const SilderHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const slideWidth = Dimensions.get('window').width;
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / slideWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      // Tự động chuyển đổi slider sau một khoảng thời gian
      const newIndex = (activeIndex + 1) % images.length;
      setActiveIndex(newIndex);
    }, 3000); // Thay đổi khoảng thời gian ở đây (3 giây = 3000 milliseconds)

    return () => {
      clearInterval(slideInterval); // Hủy bỏ interval khi component bị unmounted
    };
  }, [activeIndex]);

  return (
    <View style={styles.sliderContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        contentOffset={{ x: activeIndex * Dimensions.get('window').width, y: 0 }}
      >
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: index === activeIndex ? 'black' : 'gray' },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: 20,
    width: '100%',
    height: 200,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  paginationContainer: {
    display: 'none',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default SilderHome;



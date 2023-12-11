
import React, { useState , useEffect } from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';




const images = [
  'https://theme.hstatic.net/200000162957/1001007349/14/header_pageabout.jpg?v=136',
   'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/340583161_539754424983491_2424276536403477601_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=tU0UGFQoTa8AX-hS1Fh&_nc_ht=scontent.fhan14-4.fna&cb_e2o_trans=t&oh=00_AfC3gyPci6tdiJYGXab0XK898PM6gKmqoRuxOwN-igXa0g&oe=657B51EC',
  'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/338521803_1617858412031724_3159037351372515354_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=cZcAabhwRhMAX9Au_Us&_nc_ht=scontent.fhan14-3.fna&cb_e2o_trans=t&oh=00_AfDyqJ3Yt1alvt8YuOtuBMkBf55kCqQ0Yh77MOfaWKyiDA&oe=657B684B',
  'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/314652746_659151052401915_4700286614345986728_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=s46vju5H8dIAX-NiPDo&_nc_ht=scontent.fhan14-2.fna&cb_e2o_trans=t&oh=00_AfA9uiM07AgZpBvM9KjF1RxPzDMIRbd0cXwChoImMFaQ-g&oe=657C0015',
  
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



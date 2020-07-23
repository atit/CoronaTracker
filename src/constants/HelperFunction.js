import { Dimensions } from 'react-native';

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const Scale = size => {
  const { width, height } = Dimensions.get('window');
  if (width < height) {
    return (width / guidelineBaseWidth) * size;
  } else {
    return (height / guidelineBaseHeight) * size * 1.6;
  }
};

const VerticalScale = size => {
  const { width, height } = Dimensions.get('window');
  if (width < height) {
    return (height / guidelineBaseHeight) * size;
  } else {
    return (width / guidelineBaseWidth) * size * 1.6;
  }
};

// const VerticalScale = size => (height / guidelineBaseHeight) * size;
const ModerateScale = (size, factor = 0.5) =>
  size + (Scale(size) - size) * factor;

const { width, height } = Dimensions.get('window');

export default {
  Scale,
  VerticalScale,
  ModerateScale,
  width,
  height
};

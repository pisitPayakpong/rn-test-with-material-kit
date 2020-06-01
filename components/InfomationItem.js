import React from "react";
import { withNavigation } from "@react-navigation/compat";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { map } from "lodash";

import materialTheme from "../constants/Theme";

const { width } = Dimensions.get("screen");

class InfomationItem extends React.Component {
  state = {
    detail: "",
  };
  render() {
    const {
      navigation,
      horizontal,
      full,
      style,
      priceColor,
      imageStyle,
      route,
    } = this.props;
    const imageStyles = [
      styles.image,
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle,
    ];

    const product = route?.params?.product;

    console.log({ styles, theme });

    return (
      <Block style={styles.block}>
        <Image source={{ uri: product.image }} style={imageStyles} />
        {map(product, (p) => {
          return (
            <Text>
              <Text>{p}</Text>
            </Text>
          );
        })}
      </Block>
    );
  }
}

export default withNavigation(InfomationItem);

const styles = StyleSheet.create({
  block: {
    padding: 20,
  },
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: "auto",
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

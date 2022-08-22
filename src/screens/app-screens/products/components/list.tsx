import React, { useCallback } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { Card } from "components";
import { useDispatch } from "react-redux";
import { addToCart } from "src/store/cart-slice";
import * as Animatable from "react-native-animatable";

interface Props {
  data: any;
  onRefresh: () => void;
  endReached: () => void;
  refreshing: boolean;
}
interface RenderItemProps {
  item: {
    id: number | any;
    title: string;
    price: number;
    description: string;
    category: string;
    image: any;
    rating: {
      rate: number;
      count: number;
    };
  };
  index: number;
}

export const ProductsList: React.FC<Props> = React.memo((props) => {
  const dispatch = useDispatch();
  const _addToCart = useCallback(
    (item: any) => {
      dispatch(addToCart(item));
    },
    [dispatch]
  );
  const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    return (
      <Animatable.View
        animation="fadeIn"
        delay={index * 100}
        useNativeDriver
        style={{}}
      >
        <Card
          title={item.title}
          index={index}
          img={item.image}
          addToCart={() => _addToCart(item)}
          price={item.price}
          rate={item.rating.rate}
          categoryName={item.category}
        />
      </Animatable.View>
    );
  }, []);
  return (
    <>
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={props.data}
          numColumns={2}
          removeClippedSubviews={true}
          contentContainerStyle={{ alignItems: "center" }}
          onEndReached={props.endReached}
          refreshControl={
            <RefreshControl
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }
          keyExtractor={(item) => `products_keys${item.id}`}
          renderItem={renderItem}
        />
      </View>
    </>
  );
});

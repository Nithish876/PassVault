import { View } from "react-native";

const PaginationDots = ({
  total,
  activeIndex,
}:any) =>{
  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={{
            width: activeIndex === index ? 24 : 8,
            height: 8,
            borderRadius: 99,
            backgroundColor:
              activeIndex === index ? "#4F46E5" : "#E2E8F0",
          }}
        />
      ))}
    </View>
  );
}

export default PaginationDots;


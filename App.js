import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

import Constants from "expo-constants";
import logo from "./assets/logo.png";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Octicons"; //location

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// <View></View>
// <Text></Text>
const colors = {
  back: "#F5F7FB",
  green: "#51B8B7",
  darkgreen: "#266575",
  yellow: "#F9C55D",
  grey: "#CED7E3",
};

const menu = [
  { id: 1, name: "Doctors", selected: true },
  { id: 2, name: "Pharmacy", selected: false },
  { id: 3, name: "Procedures", selected: false },
  { id: 4, name: "Diagnosis", selected: false },
];

const med = [
  {
    id: 1,
    name: "Buy \n Medicines",
    img: require("./assets/med.png"),
    selected: false,
  },
  {
    id: 1,
    name: "Book \n Lab Test",
    img: require("./assets/lab.png"),
    selected: false,
  },
  {
    id: 1,
    name: "Find \n Hospitals",
    img: require("./assets/hospital.png"),
    selected: true,
  },
  {
    id: 1,
    name: "Get Free \n Consult",
    img: require("./assets/consult.png"),
    selected: false,
  },
];

const health = [
  { id: 1, name: "COVID", img: require("./assets/covid.png"), selected: false },
  {
    id: 2,
    name: " Skin \n Rash",
    img: require("./assets/skin.png"),
    selected: false,
  },
  {
    id: 3,
    name: "     Bad  \n Stomach",
    img: require("./assets/stomach.png"),
    selected: true,
  },
  { id: 4, name: "Fever", img: require("./assets/fever.png"), selected: false },
];

const icons = [
  { id: 1, name: "search1" },
  { id: 2, name: "calendar" },
  { id: 3, name: "user" },
  // { id: 3, img: require('./assets/user.png') },
];
const Con = ({ children, h, w, br, ph, pv, osc, isc, bc }) => {
  return (
    <View
      style={[
        styles.outer,
        { borderRadius: br, shadowColor: osc || "#fbffff" },
      ]}
    >
      <View
        style={[
          styles.inner,
          { borderRadius: br, shadowColor: isc || "#b7c4dd" },
        ]}
      >
        <View
          style={[
            styles.content,
            {
              borderRadius: br,
              height: h,
              width: w,
              paddingHorizontal: ph,
              paddingVertical: pv,
              backgroundColor: bc || "white",
            },
          ]}
        >
          {children}
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.head1}>
          <View>
            <Image
              source={logo}
              style={{ height: 100, width: 100, resizeMode: "contain" }}
            />
          </View>

          <Con
            h={30}
            w={50}
            br={20}
            ph={60}
            pv={15}
            osc={"#61CBCB"}
            isc={"#45A3A3"}
            bc={colors.green}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{ color: "white", fontSize: 15, paddingRight: 10 }}
                >
                  Gurgaon
                </Text>
              </View>
              <View
                style={{
                  paddingLeft: 5,
                  borderLeftWidth: 1.5,
                  borderColor: "#57BEBD",
                }}
              >
                {" "}
                <Icon2 name="location" color={colors.yellow} size={15} />
              </View>
            </View>
          </Con>
        </View>
        <View style={{ position: "relative" }}>
          <ScrollView
            style={styles.head2}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {menu.map((items) => {
              return (
                <View style={styles.menu}>
                  <Text
                    style={[
                      styles.menuText,
                      { fontWeight: items.selected ? "bold" : "" },
                    ]}
                  >
                    {items.name}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
          <View
            style={{
              position: "absolute",
              width: 100,
              borderWidth: 2,
              borderColor: colors.yellow,
              bottom: 3,
              left: 5,
            }}
          ></View>
        </View>
      </View>

      <View style={{ position: "relative" }}>
        <View style={{ marginTop: -7 }}>
          <Image
            source={require("./assets/half.png")}
            style={{
              transform: [{ rotate: "180deg" }],
              height: 140,
              width: "100%",
              resizeMode: "stretch",
            }}
          />
        </View>
        <View
          style={{
            top: -65,
            marginHorizontal: 20,
            marginVertical: 0,
            shadowOffset: {
              width: -6,
            },
            shadowOpacity: 1,
            shadowRadius: 6,
            shadowColor: "#DAE8EB",
            borderRadius: 50,
          }}
        >
          <View
            style={{
              shadowOffset: {
                width: 6,
                height: 6,
              },
              shadowOpacity: 1,
              shadowRadius: 6,
              shadowColor: "#DAE8EB",
              borderRadius: 50,
            }}
          >
            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 50,
                borderRadius: 50,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Icon name="search1" size={25} color={colors.yellow} />
              </View>
              <View style={{ width: "70%", marginLeft: 15, fontSize: 25 }}>
                <TextInput placeholder="Search doctors,hospitals and clinics..." />
              </View>
              <View
                style={{
                  height: 50,
                  borderWidth: 0.8,
                  borderColor: colors.green,
                  marginRight: 20,
                }}
              ></View>
              <View>
                <Icon name="setting" size={25} color={colors.green} />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 120,
          backgroundColor: colors.green,
          marginHorizontal: 25,
          marginVertical: 40,
          borderRadius: 25,
          position: "relative",
        }}
      >
        <View style={{ position: "absolute", bottom: -18, left: -30 }}>
          <Image
            source={require("./assets/doc.png")}
            style={{
              height: 200,
              width: 200,
              resizeMode: "contain",
              zIndex: 100,
            }}
          />
        </View>
        <View style={{ position: "absolute", bottom: 35, right: 10 }}>
          <View>
            <Text
              style={{ color: colors.yellow, fontWeight: "700", fontSize: 26 }}
            >
              Consult Top Doctors
            </Text>
          </View>
          <View>
            <Text style={{ color: "white", fontWeight: "400", fontSize: 16 }}>
              Connect and Speak with {"\n"} a Doctor Now
            </Text>
          </View>
        </View>
        <View style={{ position: "absolute", bottom: -15, right: 40 }}>
          <View
            style={{
              shadowOffset: {
                width: -6,
                height: -6,
              },
              shadowOpacity: 1,
              shadowRadius: 6,
              shadowColor: "#5DCBCF",
              borderRadius: 50,
            }}
          >
            <View
              style={{
                shadowOffset: {
                  width: 6,
                  height: 6,
                },
                shadowOpacity: 1,
                shadowRadius: 6,
                shadowColor: "#DFE2ED",
                backgroundColor: "#FEFEFE",
                height: 40,
                width: 120,
                borderRadius: 20,
                borderColor: colors.yellow,
                borderWidth: 1.5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ fontSize: 25 }}>
                <Text style={{ color: colors.darkgreen, fontWeight: "bold" }}>
                  {" "}
                  Book Now
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.med}>
        {med.map((items) => {
          return (
            <View style={{ margin: 11 }}>
              <Con
                h={80}
                w={180}
                br={15}
                ph={50}
                pv={12}
                bc={items.selected ? "#E2F3F3" : "#F5F7FB"}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Image
                      source={items.img}
                      style={{ height: 50, width: 50, resizeMode: "contain" }}
                    />
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#2B6C6C",
                      }}
                    >
                      {items.name}
                    </Text>
                  </View>
                </View>
              </Con>
            </View>
          );
        })}
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View>
          <Text
            style={{
              color: colors.darkgreen,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Common Health Concerns
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {health.map((item) => {
            return (
              <View style={{ marginRight: 25, marginVertical: 40 }}>
                <Con
                  h={150}
                  w={60}
                  br={50}
                  ph={50}
                  pv={12}
                  bc={item.selected ? "#E2F2F3" : ""}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View style={{ marginBottom: 20 }}>
                      <Image source={item.img} />
                    </View>
                    <View style={{ alignSelf: "center" }}>
                      <Text
                        style={{ color: colors.darkgreen, fontWeight: "bold" }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </Con>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <View>
          <Con h={50} w={120} br={50} ph={50} pv={12} bc={colors.back}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  source={require("./assets/home.png")}
                  style={{ height: 50, width: 50, resizeMode: "contain" }}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>Home</Text>
              </View>
            </View>
          </Con>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icons.map((item) => {
            return (
              <View style={{ marginRight: 30 }}>
                <Icon name={item.name} color={colors.grey} size={25} />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  med: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  menuText: {
    fontSize: 15,
    color: "white",
  },
  menu: {
    marginHorizontal: 20,
  },
  head2: {
    marginTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: "#8AD2D1",
  },
  head1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 0,
  },
  header: {
    backgroundColor: colors.green,
  },
  container: {
    flex: 1,
    backgroundColor: colors.back,
  },
  outer: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  inner: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

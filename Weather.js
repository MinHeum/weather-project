import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, SafeAreaView } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { watchPositionAsync } from "expo-location";
import { RefreshControl } from 'react-native-web-refresh-control'


const weatherOptions = {
    Thunderstorm: {
        iconName: "thunderstorm",
        gradient: ["#4ECDC4", "#556270"],
        title: "뇌우",
        subTitle: "뇌우는 천둥·번개와 함께 내리는 비이며, 주로 여름철의 지표면 불균등 가열로 발생한 적란운, 웅대적운이나 한랭전선에서 만들어진 적란운, 웅대적운, 적운등에서 발생한다."
    },
    Drizzle: {
        iconName: "rainy",
        gradient: ["#3a7bd5","#3a6073"],
        title: "이슬비",
        subTitle: "이슬비는 지름이 0.5mm보다 작은 빗방울이 거의 같은 세기로 내리는 비로 언뜻 보면 물방울이 공중에 떠 있는 것처럼 보인다."
    },
    Rain: {
        iconName: "rainy",
        gradient: ["#005C97","#363795"],
        title: "비",
        subTitle: "비는 대기권의 수증기가 응축되어 물방울의 형태로 지상에 떨어지는 기상 현상을 일컬으며, 대기권에 있는 수증기가 충분히 무거워지면 중력에 의해 지상으로 떨어지는데 이는 지구에서 일어나는 물의 순환의 중요한 과정 중 하나이다."
    },
    Snow: {
        iconName: "snow",
        gradient: ["#83a4d4","#b6fbff"],
        title: "눈",
        subTitle: "눈은 기상 현상의 한 종류로 기온이 섭씨 0℃ 아래로 떨어져, 구름 안의 물입자나 대기 중의 수증기가 얼어서 결정화된 것이다. 남극·북극의 두터운 얼음층과 빙하는 오랜 기간 눈이 쌓여 형성되었다."
    },
    Mist: {
        iconName: "menu-outline",
        gradient: ["#E6DADA","#274046"],
        title: "안개(Mist)",
        subTitle: "안개는 수증기를 포함한 대기의 온도가 어떤 이유로 내려가 이슬점 온도에 도달할 때 포함된 수증기가 작은 물입자가 되어 공중에 뜬 상태를 말한다. 상대 습도가 70% 미만일 때에 연무(Mist)라고 한다."
    },
    Smoke: {
        iconName: "menu-outline",
        gradient: ["#E6DADA","#274046"],
        title: "연기",
        subTitle: "연기는 가연성 물질이 연소할 때 생기는 고체, 액체 상태의 미립자이다."
    },
    Haze: {
        iconName: "reorder-three",
        gradient: ["#E6DADA","#274046"],
        title: "안개(Haze)",
        subTitle: "안개는 수증기를 포함한 대기의 온도가 어떤 이유로 내려가 이슬점 온도에 도달할 때 포함된 수증기가 작은 물입자가 되어 공중에 뜬 상태를 말한다. 상대 습도가 80% 이상일 때에 박무(Haze)라고 한다."
    },
    Dust: {
        iconName: "menu-outline",
        gradient: ["#e9d362","#333333"],
        title: "모래폭풍",
        subTitle: "모래폭풍은 건조지역에서 발생하는 모래를 동반한 강력한 바람을 말한다. 아시아의 황사는 미국까지 영향을 미친다. 화성에도 모래폭풍이 발생하는 것이 확인되었다."
    },
    Fog: {
        iconName: "menu-outline",
        gradient: ["#f79d00","#64f38c"],
        title: "안개(Fog)",
        subTitle: "안개는 수증기를 포함한 대기의 온도가 어떤 이유로 내려가 이슬점 온도에 도달할 때 포함된 수증기가 작은 물입자가 되어 공중에 뜬 상태를 말한다. "
    },
    Sand: {
        iconName: "menu-outline",
        gradient: ["#D1913C","#FFD194"],
        title: "모래폭풍",
        subTitle: "모래폭풍은 건조지역에서 발생하는 모래를 동반한 강력한 바람을 말한다. 아시아의 황사는 미국까지 영향을 미친다. 화성에도 모래폭풍이 발생하는 것이 확인되었다."
    },
    Ash: {
        iconName: "menu-outline",
        gradient: ["#1F1C2C","#928DAB"],
        title: "화산재",
        subTitle: "화산재는 화산 분화로 발생한 짓이겨진 돌과 유리 조각인 테프라로 구성되며, 크기는 직경 4mm 미만이다. 화산재는 호흡기 문제를 유발하며 기계를 오작동시킨다."
    },
    Squall: {
        iconName: "rainy-outline",
        gradient: ["#BBD2C5","#536976","#292E49"],
        title: "스콜",
        subTitle: "스콜은 갑자기 바람이 불기 시작하여 몇 분 동안 지속된 후 갑자기 멈추는 현상을 이르는 말이다."
    },
    Tornado: {
        iconName: "thunderstorm-outline",
        gradient: ["#485563","#29323c"],
        title: "토네이도",
        subTitle: "토네이도는 온난 지역의 여름에 주로 발생하는 강력한 바람의 일종이며 주로 적운이나 적란운에서 발생한다. 그 규모는 일반적인 회오리바람보다 훨씬 커 지름이 수백 미터에 달할수도 있으며, 많은 지역에 인명과 재산 피해를 입힌다."
    },
    Clear: {
        iconName: "sunny-outline",
        gradient: ["#3A1C71","#D76D77","#FFAF7B"],
        title: "맑음",
        subTitle: "맑음은 하늘의 기상 상태 중 하나이다. 기본적으로 구름이 거의 없거나 전혀 없는 빈 상태를 가리킨다. 쾌청(快晴), 화창(和暢) 등의 단어도 사용될 수 있다."
    },
    Clouds: {
        iconName: "cloudy-outline",
        gradient: ["#2b5876","#4e4376"],
        title: "흐림",
        subTitle: "흐림은 하늘의 기상 상태 중 하나이다. 기본적으로 구름이 하늘 전체를 덮고 있어, 태양이 거의 보이지 않는 상태를 말한다."
    },
}

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
}

export default function Weather({ temp, condition }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);


    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
    >
        <SafeAreaView style={styles.container}>
            <ScrollView 
                refreshControl = {<RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh} 
                                    tintColor="#9ba2b4"
                                    title="Refreshing..."
                                    titleColor="white"
                                />}
            >
            
                <View style={styles.halfContainer}>
                    <Ionicons 
                        name={weatherOptions[condition].iconName}
                        size={92}
                        color="white"
                    />
                    <Text style={styles.temp}>{temp}˚</Text>
                </View>
                
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>
                        {weatherOptions[condition].title}
                    </Text>
                    <Text style={styles.subTitle}>
                        {weatherOptions[condition].subTitle}
                    </Text>
                </View>

                <StatusBar barStyle="light-content" />
              </ScrollView>   
        </SafeAreaView>
    </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds",
    ])
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100,
        paddingBottom: 100
    },
    title:{
        fontWeight: "600",
        color: "white",
        fontSize: 45,
        marginBottom: 5
    },
    subTitle:{
        fontWeight: "500",
        color: "white",
        fontSize: 30
    },
    textContainer:{
        alignItems: "flex-start",
        padding: 15
    }
});
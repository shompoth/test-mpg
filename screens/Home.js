// Librairies
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
// import axios from "axios";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";

function Home(props) {
    // States
    // const [dimensions, setDimensions] = useState({ window, screen });

    const [tableList, setTableList] = useState(["Joueurs", "Poste", "Club", "Côte"]);

    const [players, setPlayers] = useState([
        {
            lastname: "Mbappe",
            ultraPosition: 40,
            club: "PSG",
            quotation: 50,
            id: 0,
            firstname: "Kyllian",
            birthDate: 22,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssist: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                shotOnTargetByMatch: 10,
                percentageShotOnTarget: 70,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,
                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Ruffier",
            ultraPosition: 10,
            club: "St-Etienne",
            quotation: 20,
            id: 1,
            firstname: "Stéphane",
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,
                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
                // GOALKEEPER
                goalConcede: 19,
                sumCleanSheet: 10,
                sumSaves: 13,
                sumDeflect: 4,
                sumPenaltySave: 2,
                sumPenaltyFaced: 5,
            },
        },
        {
            lastname: "Aouar",
            ultraPosition: 32,
            club: "Lyon",
            quotation: 40,
            id: 2,
            firstname: "Houssem",
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Atal",
            ultraPosition: 21,
            club: "Nice",
            quotation: 27,
            id: 3,
            firstname: "Youcef",
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Lala",
            ultraPosition: 21,
            club: "Strasbourg",
            quotation: 21,
            id: 4,
            firstname: "Keny",
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Savanier",
            ultraPosition: 31,
            club: "Nimes",
            quotation: 17,
            id: 5,
            firstname: "Steve",
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Pepe",
            ultraPosition: 40,
            club: "Lille",
            quotation: 35,
            id: 6,
            firstname: "Nicolas",
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Ikone",
            ultraPosition: 32,
            club: "Lille",
            quotation: 30,
            id: 7,
            firstname: "Jonathan",
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Fonte",
            ultraPosition: 20,
            club: "Lille",
            quotation: 17,
            id: 8,
            firstname: "Ruben",
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Silva",
            ultraPosition: 20,
            club: "PSG",
            quotation: 45,
            id: 9,
            firstname: "Thiago",
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
    ]);

    const [sortPlayers, setSortPlayers] = useState(null);

    // Cycles de vie
    // useEffect(() => {
    //     axios
    //         .get(`https://api.monpetitgazon.com/stats/championship/1/2018`)
    //         .then(res => {
    //             const persons = res.data;
    //             setPlayers(persons);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);

    // useEffect(() => {
    //     Dimensions.addEventListener("change", onChange);
    //     return () => {
    //         Dimensions.removeEventListener("change", onChange);
    //     };
    // });

    // Variables

    // Fonctions
    // const onChange = ({ window, screen }) => {
    //     setDimensions({ window, screen });
    // };

    const playerPosition = ultraPosition => {
        let position;

        switch (ultraPosition) {
            case 10:
                position = "G";
                break;
            case 20:
                position = "D";
                break;
            case 21:
                position = "L";
                break;
            case 31:
                position = "MD";
                break;
            case 32:
                position = "MO";
                break;
            case 40:
                position = "A";
                break;
            default:
                position = null;
                break;
        }
        return position;
    };

    const settingSort = sort => {
        const newPlayers = [...players];

        if (sort === "Joueurs") {
            if (sortPlayers === "alphaDescending") {
                setSortPlayers("alphaAscending");
                newPlayers.sort((a, b) =>
                    b.lastname.toUpperCase() > a.lastname.toUpperCase() ? 1 : -1,
                );
            } else {
                setSortPlayers("alphaDescending");
                newPlayers.sort((a, b) =>
                    a.lastname.toUpperCase() > b.lastname.toUpperCase() ? 1 : -1,
                );
            }
        }
        if (sort === "Poste") {
            if (sortPlayers === "posteDescending") {
                setSortPlayers("posteAscending");
                newPlayers.sort((a, b) => (b.ultraPosition > a.ultraPosition ? 1 : -1));
            } else {
                setSortPlayers("posteDescending");
                newPlayers.sort((a, b) => (a.ultraPosition > b.ultraPosition ? 1 : -1));
            }
        }

        setPlayers(newPlayers);
    };

    return (
        <View
            style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                backgroundColor: "#fff",
            }}
        >
            <View style={styles.container}>
                <StatusBar style="auto" />

                <View
                    style={{
                        marginTop: 10,
                        paddingHorizontal: 10,
                        borderRadius: "10%",
                        flexDirection: "row",
                        backgroundColor: "#e9ebee",
                    }}
                >
                    {tableList.map(item => (
                        <TouchableOpacity
                            onPress={() => settingSort(item)}
                            activeOpacity={0.6}
                            style={{
                                ...styles.listWrapper,
                                paddingHorizontal: 0,
                            }}
                            key={item}
                        >
                            <View
                                style={{
                                    ...styles.row,
                                    height: 50,
                                    flex: 1,
                                }}
                            >
                                <Text
                                    style={{
                                        ...styles.row,
                                        color: "#99a0b2",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {item}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <FlatList
                    data={players}
                    renderItem={player => (
                        <TouchableHighlight
                            onPress={() => {
                                props.navigation.navigate("Detail du joueur", {
                                    player,
                                });
                            }}
                            activeOpacity={1}
                            underlayColor="rgba(91, 196, 69, 0.7)"
                        >
                            <View style={styles.listWrapper}>
                                <Text style={styles.row}>{player.item.lastname}</Text>
                                <Text style={styles.row}>
                                    {playerPosition(player.item.ultraPosition)}
                                </Text>
                                <Text style={styles.row}>{player.item.club}</Text>
                                <Text style={styles.row}>{player.item.quotation}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor={player => player.id.toString()}
                    style={{
                        width: "100%",
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: window.width > 450 ? "85%" : "95%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: "#fff",
    },
    listWrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        borderBottomWidth: 1,
        borderBottomColor: "#e9ebee",
        paddingHorizontal: 10,
    },
    row: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 10,
        fontSize: 12,
    },
});

export default Home;

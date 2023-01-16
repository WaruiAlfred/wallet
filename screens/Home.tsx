import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import logo1 from "../assets/cards/mc.png";
import logo2 from "../assets/cards/visa_white.png";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
import portrait1 from "../assets/portraits/p1.jpg";
import portrait2 from "../assets/portraits/p2.jpg";
import portrait3 from "../assets/portraits/p3.jpg";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigators/RootStack";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "2343345454646",
      balance: 2000.22,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "23433656454646",
      balance: 23400.22,
      alias: "Personal Prepaid",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: "23876754646",
      balance: 454000.22,
      alias: "School Prepaid",
      logo: logo1,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: "-$86.00",
      date: "14 Sep 2021",
      title: "Taxi",
      subtitle: "Uber Car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$286.00",
      date: "14 Sep 2021",
      title: "Shopping",
      subtitle: "Ali Express",
      art: {
        background: colors.tertiary,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount: "-$586.00",
      date: "14 Sep 2021",
      title: "Travel",
      subtitle: "Emirates",
      art: {
        background: colors.accent,
        icon: "airplane",
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "2450.56",
      name: "Coby Anda",
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      amount: "4450.56",
      name: " Halerm Anda",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: "5450.56",
      name: "AnreCoby James",
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;

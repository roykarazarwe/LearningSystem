import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Table, TableWrapper, Row } from "react-native-table-component";

const ClassMenu = () => {
  const [tableHead] = useState([
    "Id",
    "Level",
    "Subject",
    "Topic",
    "Teacher",
    "Date",
    "Time",
    "Link",
  ]);

  const columnWidth = 80;
  const course = [
    {
      id: 1,
      level: "2",
      subject: "mathematics",
      topic: "fractions",
      teacher: "Odong",
      date: "1/2/2024",
      time: "2:00pm",
      link: "link",
    },
    {
      id: 2,
      level: "3",
      subject: "science",
      topic: "chemistry",
      teacher: "Smith",
      date: "2/2/2024",
      time: "3:00pm",
      link: "link",
    },
    {
      id: 3,
      level: "4",
      subject: "history",
      topic: "ancient civilizations",
      teacher: "Johnson",
      date: "3/2/2024",
      time: "4:00pm",
      link: "link",
    },
    {
      id: 4,
      level: "5",
      subject: "language arts",
      topic: "literature",
      teacher: "Brown",
      date: "4/2/2024",
      time: "5:00pm",
      link: "link",
    },
    {
      id: 5,
      level: "6",
      subject: "geography",
      topic: "world regions",
      teacher: "Davis",
      date: "5/2/2024",
      time: "6:00pm",
      link: "link",
    },
    {
      id: 6,
      level: "7",
      subject: "art",
      topic: "painting",
      teacher: "Lee",
      date: "6/2/2024",
      time: "7:00pm",
      link: "link",
    },
    {
      id: 7,
      level: "8",
      subject: "music",
      topic: "classical music",
      teacher: "Garcia",
      date: "7/2/2024",
      time: "8:00pm",
      link: "link",
    },
    {
      id: 8,
      level: "9",
      subject: "physical education",
      topic: "sports",
      teacher: "Martinez",
      date: "8/2/2024",
      time: "9:00pm",
      link: "link",
    },
    {
      id: 9,
      level: "10",
      subject: "computer science",
      topic: "programming",
      teacher: "Taylor",
      date: "9/2/2024",
      time: "10:00pm",
      link: "link",
    },
    {
      id: 10,
      level: "11",
      subject: "economics",
      topic: "microeconomics",
      teacher: "Wilson",
      date: "10/2/2024",
      time: "11:00pm",
      link: "link",
    },
    {
      id: 11,
      level: "8",
      subject: "music",
      topic: "classical music",
      teacher: "Garcia",
      date: "7/2/2024",
      time: "8:00pm",
      link: "link",
    },
    {
      id: 12,
      level: "9",
      subject: "physical education",
      topic: "sports",
      teacher: "Martinez",
      date: "8/2/2024",
      time: "9:00pm",
      link: "link",
    },
    {
      id: 13,
      level: "10",
      subject: "computer science",
      topic: "programming",
      teacher: "Taylor",
      date: "9/2/2024",
      time: "10:00pm",
      link: "link",
    },
    {
      id: 14,
      level: "11",
      subject: "economics",
      topic: "microeconomics",
      teacher: "Wilson",
      date: "10/2/2024",
      time: "11:00pm",
      link: "link",
    },
  ];

  const data = course.map((item) => [
    item.id,
    item.level,
    item.subject,
    item.topic,
    item.teacher,
    item.date,
    item.time,
    item.link,
  ]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderColor: "#C1C0B9" }}>
            <Row
              data={tableHead}
              widthArr={Array(8).fill(columnWidth)} // Array with fixed width for all columns
              style={styles.head}
              textStyle={styles.headText}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderColor: "#C1C0B9" }}>
              <TableWrapper>
                {data.map((dataRow, index) => {
                  const rowStyle = [styles.row];
                  if (index % 2 !== 0) {
                    rowStyle.push({ backgroundColor: "#ffffff" });
                  }
                  return (
                    <Row
                      key={index}
                      data={dataRow}
                      widthArr={Array(8).fill(columnWidth)} // Array with fixed width for all columns
                      style={rowStyle}
                      textStyle={styles.text}
                    />
                  );
                })}
              </TableWrapper>
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#ffffff",
  },
  head: {
    height: 50,
    fontWeight: "bold",
  },
  headText: {
    textAlign: "center",
    fontWeight: "400",
  },
  text: {
    textAlign: "center",
    fontWeight: "200",
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: "#F7F8FA",
  },
});

export default ClassMenu;

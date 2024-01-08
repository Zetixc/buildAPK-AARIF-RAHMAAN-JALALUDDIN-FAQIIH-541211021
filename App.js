import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Button, Linking, ScrollView } from "react-native";

const App = () => {
  const wa = "https://wa.me/6282242458593";
  const satu = "https://zetixc.github.io";
  const dua = "https://www.behance.net/gallery/145201685/FAQIHOME";
  const tiga = "https://azkajaya.github.io/";
  const empat = "https://fadtmusic.github.io/";

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: 80,
          marginHorizontal: 20,
        }}
      >
        <Image
          source={require("./assets/saya.jpg")}
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          'Aarif Faqiih
        </Text>

        <Text
          style={{
            fontSize: 15,
            textAlign: "justify",
            marginBottom: 20,
            lineHeight: 23,
          }}
        >
          Siswa kelas 12 kelahiran 2006 dari SMK Telkom Purwokerto jurusan Rekayasa Perangkat Lunak memiliki minat di bidang Frontend Web Development dan Electronic Music Production dengan pengalaman magang di PT. Mega Giga Solusindo
          sebagai Frontend Web Developer selama 6 bulan dan sudah membuat puluhan musik secara mandiri.
        </Text>

        <Button
          title="Hubungi Saya"
          color="#0080ff"
          onPress={() => {
            Linking.openURL(wa);
          }}
        />

        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
            marginBottom: 10,
          }}
        >
          Projek Saya
        </Text>

        <Image
          source={require("./assets/1.png")}
          style={{
            width: 309,
            height: 158,
            marginTop: 10,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          Web Portofolio pertama saya dibuat pada tahun 2021.
        </Text>

        <Button
          title="Kunjungi"
          color="#0080ff"
          onPress={() => {
            Linking.openURL(satu);
          }}
        />

        <Image
          source={require("./assets/4.png")}
          style={{
            width: 309,
            height: 133,
            marginTop: 40,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          UI design aplikasi mobile FAQIHOME dibuat pada tahun 2022.
        </Text>

        <Button
          title="Kunjungi"
          color="#0080ff"
          onPress={() => {
            Linking.openURL(dua);
          }}
        />

        <Image
          source={require("./assets/2.png")}
          style={{
            width: 309,
            height: 158,
            marginTop: 40,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          Web Company Profile usaha klien pertama saya pada tahun 2023.
        </Text>

        <Button
          title="Kunjungi"
          color="#0080ff"
          onPress={() => {
            Linking.openURL(tiga);
          }}
        />

        <Image
          source={require("./assets/3.png")}
          style={{
            width: 309,
            height: 158,
            marginTop: 40,
          }}
        />

        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          Web Portofolio kedua saya dibuat pada tahun 2023.
        </Text>

        <Button
          title="Kunjungi"
          color="#0080ff"
          onPress={() => {
            Linking.openURL(empat);
          }}
        />

        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginVertical: 30,
          }}
        >
          © 2023 'Aarif Faqiih
        </Text>
      </View>
    </ScrollView>
  );
};

export default App;

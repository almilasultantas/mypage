import React from "react";
import "../CSS/Main.css";

function About(args) {
    return (
        <div style={{ textAlign: "center", minHeight: "80vh" }} className="maindiv">
            <h1>Merhaba! Ben Almıla Sultan TAŞ. </h1>
            <p className="pAbout">
                Bilgisayar Mühendisiyim ve teknolojiye olan tutkumla kendimi sürekli geliştirmeye adamış biriyim.
            </p>
            <p className="pAbout">
                Eğitimime Yalova Üniversitesi'nde başladım ve buradan Bilgisayar Mühendisliği lisans derecesi ile mezun oldum. Üniversite eğitimim boyunca, yazılım geliştirme ve bilgisayar bilimleri üzerine derinlemesine araştırmalar yaptım.
            </p>
            <p className="pAbout">
                Staj dönemlerimde pratik deneyim kazanmak için çaba harcadım. Ada Yazılım'daki stajım sırasında, Xamarin teknolojisini kullanarak bir mobil uygulama geliştirdik ve bu uygulamanın bir API ile etkileşimini sağladık. Ardından, yapay zeka alanında daha derinlemesine bir deneyim edinmek için staj yapma fırsatı buldum. 2023 yazında, Türkiye'nin önde gelen savunma sanayi firmalarından biri olan Baykar Makina Sanayi ve Ticaret A.Ş.'de staj yaptım.
            </p>
            <p className="pAbout">
                Şu anda, Newpower Generator şirketinde çalışarak bilgi birikimimi ve deneyimlerimi daha da ileriye götürmek için çalışıyorum. Okul projelerim ve kişisel projelerime projelerim sayfasında bulabilirsiniz. Teknolojiye olan tutkum ve sürekli öğrenme arzumla, gelecekteki başarılarım için heyecanla hazırlanıyorum.
            </p>
            <button className="btnBigger">Benimle İletişime Geçin </button>

            <br />
        </div>
    );
}

export default About;
